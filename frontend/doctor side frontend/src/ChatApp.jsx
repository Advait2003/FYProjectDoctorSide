import React, { useState } from 'react';
import Conversation from './Conversation'; // Import the new Conversation component
import PatientSidebar from './PatientSidebar'; // Import the PatientSidebar component

const ChatApp = () => {
  const [input, setInput] = useState('');
  const [conversations, setConversations] = useState([]);
  const [sidebarVisible, setSidebarVisible] = useState(true); // State for left sidebar
  const [patientSidebarVisible, setPatientSidebarVisible] = useState(true); // State for right sidebar


  // Function to handle input change
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Function to send the message
  const handleSend = async () => {
    if (input.trim()) {
      const newMessage = { text: input, sender: 'User' };
      setConversations([...conversations, newMessage]);
      setInput('');

      try {
        // Send message to the backend API
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: input }),
        });

        const data = await response.json();

        // Simulate chatbot response (you can modify this to better fit your bot's response structure)
        const botResponse = { text: data.reply, sender: 'Bot' };
        setConversations((prevConversations) => [...prevConversations, botResponse]);
      } catch (error) {
        console.error('Error sending message:', error);
        const botResponse = { text: 'Sorry, there was an error.', sender: 'Bot' };
        setConversations((prevConversations) => [...prevConversations, botResponse]);
      }
    }
  };

  // Function to toggle the left sidebar visibility
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  // Function to toggle the right sidebar visibility
  const togglePatientSidebar = () => {
    setPatientSidebarVisible(!patientSidebarVisible);
  };

  return (
    <div className="flex h-screen">
      {/* Left Sidebar (Conversations) */}
      {sidebarVisible && (
        <div className="w-1/4 bg-gray-800 text-white p-4 overflow-y-auto">
          <h2 className="text-lg font-bold mb-4">Conversations</h2>
          {conversations.map((conv, index) => (
            <div key={index} className={`p-2 rounded mb-2 ${conv.sender === 'User' ? 'bg-blue-600' : 'bg-gray-700'}`}>
              <strong>{conv.sender}: </strong>{conv.text}
            </div>
          ))}
        </div>
      )}

      {/* Main Chat Area */}
      <Conversation
        conversations={conversations}
        input={input}
        handleInputChange={handleInputChange}
        handleSend={handleSend}
        sidebarVisible={sidebarVisible}
        toggleSidebar={toggleSidebar}
        patientSidebarVisible={patientSidebarVisible}
        togglePatientSidebar = {togglePatientSidebar}
      />

      
    </div>
  );
};

export default ChatApp;
