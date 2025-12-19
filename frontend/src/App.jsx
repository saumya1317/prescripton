import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; // <--- CHANGE THIS LINE (pages, not components)
import Footer from './components/Footer';
import Doctors from './pages/Doctors';
im
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<div>All Doctors Page</div>} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<div>Login Page</div>} />
        <Route path='/about' element={<div>About Page</div>} />
        <Route path='/contact' element={<div>Contact Page</div>} />
        <Route path='/my-profile' element={<div>My Profile</div>} />
        <Route path='/my-appointments' element={<div>My Appointments</div>} />
        <Route path='/appointment/:docId' element={<div>Booking Page</div>} />
      </Routes>
      <Footer />
      
    </div>
  )
}

export default App;