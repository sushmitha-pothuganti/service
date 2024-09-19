import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ServicesPage = () => {
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [workerType, setWorkerType] = useState('');
  const [location, setLocation] = useState('');
  const [providers, setProviders] = useState([]);
  const [showGroceryItems, setShowGroceryItems] = useState(false);
  const [showWorkerTypes, setShowWorkerTypes] = useState(false);
  const [noProvidersMessage, setNoProvidersMessage] = useState('');

  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setShowGroceryItems(selectedCategory === 'groceries');
    setShowWorkerTypes(selectedCategory === 'maid');
    setSubCategory('');
    setWorkerType('');
    setNoProvidersMessage('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const locationValue = location.trim();

    let availableProviders = [];

    if (category === 'groceries') {
      availableProviders = getAvailableItems(subCategory, locationValue);
    } else if (category === 'maid' && workerType) {
      availableProviders = getAvailableProviders(workerType, locationValue);
    } else {
      availableProviders = getAvailableProviders(category, locationValue);
    }

    if (availableProviders.length === 0) {
      setNoProvidersMessage('Providers are not available at the moment.');
    } else {
      setProviders(availableProviders);
      setNoProvidersMessage('');
    }
  };

  const handleBookNow = (provider) => {
    if (window.confirm('Proceed to Book Now?')) {
      // Save selected provider and details to local storage
      localStorage.setItem('selectedItem', provider.name);
      localStorage.setItem('providerContact', provider.contact);
      localStorage.setItem('providerPrice', provider.price);

      // Navigate to booking page
      navigate('/booking');
    }
  };

  const getAvailableItems = (itemType, location) => {
    const items = {
      vegetables: [
        { name: 'Tomato', price: 1.99 },
        { name: 'Potato', price: 0.99 },
        { name: 'Carrot', price: 1.29 },
        { name: 'Onion', price: 0.89 },
        { name: 'Pepper', price: 2.49 }
      ],
      fruits: [
        { name: 'Apple', price: 2.49 },
        { name: 'Banana', price: 1.29 },
        { name: 'Orange', price: 1.99 },
        { name: 'Grapes', price: 2.99 },
        { name: 'Pineapple', price: 3.49 }
      ],
      dairy: [
        { name: 'Milk', price: 3.49 },
        { name: 'Cheese', price: 4.99 },
        { name: 'Butter', price: 2.99 },
        { name: 'Yogurt', price: 1.99 },
        { name: 'Cream', price: 3.99 }
      ],
      grains: [
        { name: 'Rice', price: 1.29 },
        { name: 'Wheat Flour', price: 0.89 },
        { name: 'Oats', price: 2.49 },
        { name: 'Barley', price: 1.99 },
        { name: 'Quinoa', price: 4.99 }
      ]
    };
    return items[itemType] || [];
  };

  const getAvailableProviders = (type, location) => {
    const providers = {
      maid: {
        cooking: [
          { name: 'Raju', contact: '123-456-7890', price: 50 },
          { name: 'Surya', contact: '987-654-3210', price: 45 },
          { name: 'John', contact: '555-123-4567', price: 55 },
          { name: 'Rakesh', contact: '555-765-4321', price: 50 },
          { name: 'Madhu', contact: '555-987-6543', price: 60 }
        ],
        cleaning: [
          { name: 'Lakshmi', contact: '555-111-2222', price: 40 },
          { name: 'Shiva', contact: '555-222-3333', price: 35 },
          { name: 'Sai', contact: '555-333-4444', price: 45 },
          { name: 'Divya', contact: '555-444-5555', price: 50 },
          { name: 'Bhavani', contact: '555-555-6666', price: 40 }
        ],
        casual: [
          { name: 'Rosham', contact: '555-666-7777', price: 30 },
          { name: 'Rahul', contact: '555-777-8888', price: 25 },
          { name: 'Manish', contact: '555-888-9999', price: 35 },
          { name: 'Charan', contact: '555-999-0000', price: 30 },
          { name: 'Salman', contact: '555-000-1111', price: 40 }
        ]
      },
      plumber: [
        { name: 'Sathish', contact: '555-123-4567', price: 60 },
        { name: 'David', contact: '555-234-5678', price: 55 },
        { name: 'Vamshi', contact: '555-345-6789', price: 65 },
        { name: 'Rajesh', contact: '555-456-7890', price: 70 },
        { name: 'Ramesh', contact: '555-567-8901', price: 60 }
      ],
      electrician: [
        { name: 'Mahesh', contact: '555-246-8100', price: 70 },
        { name: 'Nagaraju', contact: '555-135-7910', price: 75 },
        { name: 'Naresh', contact: '555-246-8101', price: 80 },
        { name: 'Srinu', contact: '555-135-7911', price: 70 },
        { name: 'Bhaskar', contact: '555-246-8102', price: 85 }
      ]
    };
    return providers[category][type] || [];
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
          <h2 className="text-2xl font-bold mb-6">Search for Service Providers or Groceries</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label htmlFor="category" className="block text-left font-semibold">Category:</label>
              <select
                id="category"
                value={category}
                onChange={handleCategoryChange}
                className="mt-1 block w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select Category</option>
                <option value="maid">Maid</option>
                <option value="plumber">Plumber</option>
                <option value="electrician">Electrician</option>
                <option value="groceries">Shop Groceries</option>
              </select>
            </div>

            {showGroceryItems && (
              <div className="mb-4">
                <label htmlFor="grocery-items" className="block text-left font-semibold">Select Grocery Item:</label>
                <select
                  id="grocery-items"
                  value={subCategory}
                  onChange={(e) => setSubCategory(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border rounded-md"
                >
                  <option value="">Select Item</option>
                  <option value="vegetables">Vegetables</option>
                  <option value="fruits">Fruits</option>
                  <option value="dairy">Dairy Products</option>
                  <option value="grains">Grains</option>
                </select>
              </div>
            )}

            {showWorkerTypes && (
              <div className="mb-4">
                <label htmlFor="worker-type" className="block text-left font-semibold">Select Worker Type:</label>
                <select
                  id="worker-type"
                  value={workerType}
                  onChange={(e) => setWorkerType(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border rounded-md"
                >
                  <option value="">Select Type</option>
                  <option value="cooking">Cooking</option>
                  <option value="cleaning">Cleaning</option>
                  <option value="casual">Casual Laborers</option>
                </select>
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="location" className="block text-left font-semibold">Location:</label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded-md"
                placeholder="Enter your location"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Find Providers or Shop
            </button>
          </form>

          {noProvidersMessage && (
            <p className="text-red-500 mt-4">{noProvidersMessage}</p>
          )}

          {providers.length > 0 && (
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-4">Available Providers:</h3>
              <ul className="space-y-4">
                {providers.map((provider) => (
                  <li key={provider.name} className="bg-white p-4 rounded shadow-md">
                    <h4 className="text-lg font-semibold">{provider.name}</h4>
                    <p className="text-sm">Contact: {provider.contact}</p>
                    <p className="text-sm">Price: ${provider.price}</p>
                    <button
                      onClick={() => handleBookNow(provider)}
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-2"
                    >
                      Book Now
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;
