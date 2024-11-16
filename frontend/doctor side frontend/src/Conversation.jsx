import React from 'react';
import PatientSidebar from './PatientSidebar'; // Assuming you have a PatientSidebar component

const Conversation = ({ conversations, input, handleInputChange, handleSend, sidebarVisible, patientSidebarVisible, toggleSidebar, togglePatientSidebar }) => {
  return (
    <div className={`flex flex-col relative ${sidebarVisible ? 'w-3/4' : 'w-full'}`}>
      {/* Login/Signup Button */}
      <div className="absolute top-4 right-16 bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-blue-700">
        Login / Signup
      </div>

      {/* Toggle Sidebar Button */}
      <div
        onClick={toggleSidebar}
        className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-red-700"
      >
        {sidebarVisible ? 'Hide Sidebar' : 'Show Sidebar'}
      </div>

      {/* Toggle Patient Sidebar Button */}
      <div
        onClick={togglePatientSidebar}
        className="absolute top-16 left-4 bg-red-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-red-700"
      >
        {patientSidebarVisible ? 'Hide Patient List' : 'Show Patient List'}
      </div>

      {/* Conditionally render PatientSidebar */}
      {patientSidebarVisible && <PatientSidebar />}

      <div className="flex-1 p-4 overflow-y-auto">
        {conversations.map((conv, index) => (
          <div key={index} className={`mb-2 p-2 rounded ${conv.sender === 'User' ? 'bg-blue-100' : 'bg-gray-200'}`}>
            <strong>{conv.sender}: </strong>{conv.text}
          </div>
        ))}
      </div>
      
      <div className="p-4 bg-gray-100 flex items-center">
        <input 
          type="text" 
          value={input} 
          onChange={handleInputChange} 
          placeholder="Type your question here..." 
          className="flex-1 border border-gray-400 p-2 rounded mr-2"
        />
        <button onClick={handleSend} className="bg-blue-500 text-white p-2 rounded">Send</button>
      </div>
    </div>
  );
};

export default Conversation;
