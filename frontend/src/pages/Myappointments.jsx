import React from 'react';

const Myappointments = () => {
  // Sample appointment data
  const appointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      date: "2023-06-15",
      time: "10:30 AM",
      status: "Confirmed"
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      specialty: "Neurologist",
      date: "2023-06-20",
      time: "2:15 PM",
      status: "Pending"
    }
  ];

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Appointments</h1>
      {appointments.length > 0 ? (
        <div className="space-y-4">
          {appointments.map(appointment => (
            <div key={appointment.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{appointment.doctor}</h2>
                  <p className="text-indigo-600 font-medium">{appointment.specialty}</p>
                  <p className="text-gray-600 mt-2">{appointment.date} at {appointment.time}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  appointment.status === 'Confirmed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {appointment.status}
                </span>
              </div>
              <div className="mt-4 flex space-x-2">
                <button className="bg-indigo-600 text-white py-1 px-3 rounded-md text-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Reschedule
                </button>
                <button className="bg-red-600 text-white py-1 px-3 rounded-md text-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-gray-600">You don't have any appointments yet.</p>
          <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Book an Appointment
          </button>
        </div>
      )}
    </div>
  );
};

export default Myappointments;