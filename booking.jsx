import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const BookingPage = () => {
  const [provider, setProvider] = useState(null);
  const [contact, setContact] = useState('');
  const [price, setPrice] = useState('');
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve provider details from local storage
    const selectedItem = localStorage.getItem('selectedItem');
    const providerContact = localStorage.getItem('providerContact');
    const providerPrice = localStorage.getItem('providerPrice');

    if (!selectedItem || !providerContact || !providerPrice) {
      // Redirect to services page if no provider info
      setProvider(null);
      setContact('');
      setPrice('');
    } else {
      setProvider(selectedItem);
      setContact(providerContact);
      setPrice(providerPrice);
    }
  }, [navigate]);

  const handleProceedToPayment = () => {
    // Handle validation logic
    if (!provider) {
      setMessage('Please select a provider before proceeding.');
      return;
    }
    if (!username || !address) {
      setMessage('Please provide both username and address.');
      return;
    }

    // Store username and address in local storage if needed
    localStorage.setItem('username', username);
    localStorage.setItem('address', address);

    // Redirect to the payment page
    navigate('/payment');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-green-600 p-5 text-white">
        <nav className="flex justify-center space-x-4">
          <Link to="/" className="hover:bg-green-700 px-3 py-2 rounded">Home</Link>
          <Link to="/services" className="hover:bg-green-700 px-3 py-2 rounded">Find Services</Link>
          <Link to="/about" className="hover:bg-green-700 px-3 py-2 rounded">About Us</Link>
          <Link to="/contact" className="hover:bg-green-700 px-3 py-2 rounded">Contact</Link>
        </nav>
      </header>

      <main className="py-10 px-5 text-center">
        <section className="bg-white max-w-xl mx-auto p-10 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Booking Confirmation</h2>

          {provider ? (
            <div className="space-y-4">
              <p><strong>Provider Name:</strong> {provider}</p>
              <p><strong>Contact:</strong> {contact}</p>
              <p><strong>Price:</strong> ${price}</p>

              <div className="space-y-4 mt-6">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username (Alphanumeric only)"
                  className="border px-4 py-2 rounded w-full"
                  pattern="[A-Za-z0-9]+"
                  required
                />
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address (Alphanumeric only)"
                  className="border px-4 py-2 rounded w-full"
                  pattern="[A-Za-z0-9\s]+"
                  required
                />
              </div>

              <button
                onClick={handleProceedToPayment}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-6"
              >
                Proceed to Payment
              </button>

              {message && (
                <p className="text-red-500 mt-4">{message}</p>
              )}
            </div>
          ) : (
            <p>No provider information available. Please go back to the services page.</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default BookingPage;
