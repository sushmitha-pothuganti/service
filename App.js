// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/index'; // Ensure this matches the file and component name
import Services from './components/services'; // Ensure this matches the file and component name
import Booking from './components/booking'; // Ensure this matches the file and component name
import Contact from './components/contact'; // Ensure this matches the file and component name
import SignUp from './components/signup'; // Ensure this matches the file and component name
import Login from './components/login'; // Ensure this matches the file and component name
import About from './components/about'; // Ensure this matches the file and component name
import Payment from './components/payment'; // Ensure this matches the file and component name

import { ToastContainer } from 'react-toastify';  // Import ToastContainer for notifications
import 'react-toastify/dist/ReactToastify.css';  // Import toast styles

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>

      {/* ToastContainer for displaying toast notifications */}
      <ToastContainer />
    </Router>
  );
}

export default App;
