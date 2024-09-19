// src/components/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-800 text-white py-4">
        <nav>
          <ul className="flex justify-center space-x-4">
            <li><Link to="/" className="hover:bg-gray-600 px-4 py-2">Home</Link></li>
            <li><Link to="/services" className="hover:bg-gray-600 px-4 py-2">Find Services</Link></li>
            <li><Link to="/about" className="hover:bg-gray-600 px-4 py-2">About Us</Link></li>
            <li><Link to="/contact" className="hover:bg-gray-600 px-4 py-2">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="p-6">
        <section className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="mb-4">Welcome to QuickService, your one-stop solution for all your home service and grocery needs. Our platform connects you with reliable service providers and ensures that your daily needs are met with ease.</p>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Our Mission</h2>
          <p className="mb-4">Our mission is to make finding and booking home services and groceries as simple and hassle-free as possible. We strive to provide a seamless experience from start to finish, ensuring that you get the services you need when you need them.</p>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Our Services</h2>
          <p className="mb-4">We offer a variety of services including:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Home Cleaning</li>
            <li>Plumbing</li>
            <li>Electrical Repairs</li>
            <li>Grocery Shopping</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Contact Us</h2>
          <p className="mb-4">If you have any questions or need assistance, feel free to reach out to us:</p>
          <p className="mb-2">Email: <a href="mailto:support@quickservice.com" className="text-blue-500">support@quickservice.com</a></p>
          <p>Phone: +1 (123) 456-7890</p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-3 fixed bottom-0 w-full">
        <p>&copy; 2024 QuickService. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
