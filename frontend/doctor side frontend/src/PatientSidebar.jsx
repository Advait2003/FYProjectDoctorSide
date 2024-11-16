import React from 'react';

const PatientSidebar = () => {
  // Dummy list of patients
  const patients = [
    { name: 'John Doe' },
    { name: 'Jane Smith' },
    { name: 'Alice Johnson' },
    { name: 'Bob Brown' },
    { name: 'Charlie Davis' }
  ];

  return (
    <div className="flex-shrink-0 w-1/4 bg-gray-800 text-white p-4 overflow-y-auto">
      <h2 className="text-lg font-bold mb-4">Patients</h2>
      <ul>
        {patients.map((patient, index) => (
          <li key={index} className="mb-2 p-2 rounded bg-gray-700">
            <strong>{patient.name}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientSidebar;
