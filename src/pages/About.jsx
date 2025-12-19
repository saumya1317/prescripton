import React from 'react';

const About = () => {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600 mb-4">
          Welcome to Appointment Booking, your trusted platform for scheduling medical appointments with qualified healthcare professionals.
        </p>
        <p className="text-gray-600 mb-4">
          Our mission is to make healthcare more accessible by connecting patients with doctors in a seamless and efficient manner. We believe that booking a medical appointment should be as easy as booking a ride or ordering food online.
        </p>
        <p className="text-gray-600 mb-4">
          Founded in 2023, our team consists of healthcare experts and technology professionals dedicated to improving the patient experience through innovative solutions.
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Our Values</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li><strong>Patient-Centered:</strong> We prioritize the needs and comfort of our patients above all else.</li>
          <li><strong>Quality Care:</strong> We partner with verified healthcare professionals to ensure the highest standards.</li>
          <li><strong>Transparency:</strong> Clear pricing, availability, and provider information at your fingertips.</li>
          <li><strong>Innovation:</strong> Continuously improving our platform to serve you better.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;