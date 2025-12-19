import React from 'react';

const Appointments = () => {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Book an Appointment</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600">Select a doctor and choose a date/time to book your appointment.</p>
        <div className="mt-4">
          <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Browse Doctors
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointments;