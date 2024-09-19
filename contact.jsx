import { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const namePattern = /^[A-Za-z\s]+$/; // Alphabets and spaces only
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Email validation
        const alphanumericWithMinAlpha = /^(?=(?:.*[A-Za-z]){5,10})[A-Za-z0-9\s]+$/; // Alphanumeric with 5-10 alphabets

        let errors = [];

        // Validate Name
        if (!namePattern.test(name)) {
            errors.push("Full name should contain alphabets and spaces only.");
        }

        // Validate Email
        if (!emailPattern.test(email)) {
            errors.push("Please enter a valid email address.");
        }

        // Validate Subject
        if (!alphanumericWithMinAlpha.test(subject)) {
            errors.push("Subject must be alphanumeric and contain between 5 to 10 alphabetic characters.");
        }

        // Validate Message
        if (!alphanumericWithMinAlpha.test(message)) {
            errors.push("Message must be alphanumeric and contain between 5 to 10 alphabetic characters.");
        }

        if (errors.length > 0) {
            alert(errors.join("\n")); // Display validation errors
        } else {
            alert("Thank you for contacting us! We will get back to you shortly.");
            // Clear form fields after submission
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        }
    };

    return (
        <div>
            {/* Header */}
            <header className="bg-blue-600 text-white text-center py-6">
                <h1 className="text-4xl">QuickService</h1>
                <p className="text-xl">We'd love to hear from you!</p>
            </header>

            {/* Navigation */}
            <nav className="bg-gray-800 py-4">
                <ul className="flex justify-center space-x-6">
                    <li><Link to="/" className="text-white hover:bg-gray-600 px-3 py-2 rounded">Home</Link></li>
                    <li><Link to="/services" className="text-white hover:bg-gray-600 px-3 py-2 rounded">Services</Link></li>
                    <li><Link to="/booking" className="text-white hover:bg-gray-600 px-3 py-2 rounded">Book Now</Link></li>
                    <li><Link to="/contact" className="text-white hover:bg-gray-600 px-3 py-2 rounded">Contact Us</Link></li>
                </ul>
            </nav>

            {/* Contact Form */}
            <main className="max-w-3xl mx-auto bg-white p-8 mt-10 rounded-lg shadow-lg">
                <section className="text-center">
                    <h2 className="text-3xl font-semibold text-blue-600 mb-4">Contact Us</h2>
                    <p className="text-gray-600 mb-6">If you have any questions, suggestions, or feedback, feel free to reach out to us. We'd love to assist you!</p>
                    <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-left font-bold">Full Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your full name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-left font-bold">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-left font-bold">Subject:</label>
                            <input
                                type="text"
                                id="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                placeholder="Enter the subject"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-left font-bold">Message:</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Write your message here"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md h-40"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
                        >
                            Submit
                        </button>
                    </form>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center py-4 mt-10 rounded-b-lg">
                <p>&copy; 2024 QuickService. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ContactPage;
