import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center">
      {/* Header */}
      <header className="bg-gray-100 p-5">
        <h1 className="text-4xl font-bold">Welcome to QuickService</h1>
        <p className="text-xl mt-2">Your one-stop solution for home services and groceries</p>
      </header>

      {/* Menu Bar */}
      <nav>
        <ul className="flex justify-center bg-pink-500 text-white py-3 space-x-4">
          <li>
            <Link to="/" className="px-4 py-2 hover:bg-black">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="px-4 py-2 hover:bg-black">
              Services
            </Link>
          </li>
          <li>
            <Link to="/booking" className="px-4 py-2 hover:bg-black">
              Book Now
            </Link>
          </li>
          <li>
            <Link to="/contact" className="px-4 py-2 hover:bg-black">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/signup" className="px-4 py-2 hover:bg-black">
              Sign-up
            </Link>
          </li>
          <li>
            <Link to="/login" className="px-4 py-2 hover:bg-black">
              Login
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Section */}
      <main className="my-10">
        <section className="intro max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold">What do you need today?</h2>
          <p className="text-lg mt-4">Select from a range of services and groceries delivered to your doorstep!</p>
        </section>

        {/* Location Section */}
        <section className="location-section my-10 max-w-sm mx-auto">
          <label htmlFor="location-select" className="block text-lg mb-2">
            Select Your Location:
          </label>
          <select
            id="location-select"
            className="block w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="">Choose your location</option>
            <option value="new-york">New York</option>
            <option value="los-angeles">Los Angeles</option>
            <option value="chicago">Chicago</option>
            <option value="houston">Houston</option>
          </select>
        </section>

        {/* Categories */}
        <section className="categories max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold">Categories</h3>
          <div className="category-list flex justify-around flex-wrap mt-6">
            <div className="category-item w-1/2 p-4">
              <img
                src="images/services.png"
                alt="Services"
                className="w-full h-auto"
              />
              <h4 className="text-xl mt-4">Home Services</h4>
              <p className="text-gray-600">Electricians, Plumbers, Cleaners, and more.</p>
            </div>

            <div className="category-item w-1/2 p-4">
              <img
                src="images/groceries.png"
                alt="Groceries"
                className="w-full h-auto"
              />
              <h4 className="text-xl mt-4">Groceries</h4>
              <p className="text-gray-600">Fresh vegetables, fruits, and daily needs.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-4">
        <p className="text-gray-600">&copy; 2024 QuickService. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
