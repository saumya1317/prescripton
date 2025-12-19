import React from 'react';

const Doctors = () => {
  // Sample doctor data
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      experience: "15 years",
      rating: 4.8
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      experience: "12 years",
      rating: 4.9
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      experience: "10 years",
      rating: 4.7
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Orthopedic Surgeon",
      experience: "18 years",
      rating: 4.6
    }
  ];

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Doctors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map(doctor => (
          <div key={doctor.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800">{doctor.name}</h2>
            <p className="text-indigo-600 font-medium">{doctor.specialty}</p>
            <p className="text-gray-600 mt-2">Experience: {doctor.experience}</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-700">{doctor.rating}</span>
            </div>
            <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;