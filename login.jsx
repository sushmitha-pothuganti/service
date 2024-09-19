import { useNavigate, Link } from 'react-router-dom'; // Import Link along with useNavigate
import { signInWithEmailAndPassword } from 'firebase/auth'; // Firebase package for email/password authentication
import { auth } from './firebase'; // Firebase configuration and authentication instance
import { toast } from 'react-toastify'; // For displaying notifications

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target['login-email'].value.trim();
    const password = event.target['login-password'].value.trim();

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailPattern.test(email)) {
      toast.error('Please enter a valid Gmail address.', { position: "top-center" });
      return;
    }

    // Password validation
    const passwordPattern = /^(?=(?:.*[a-zA-Z]){4,})(?=(?:.*\d){1,2})(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordPattern.test(password)) {
      toast.error('Password must be at least 6 characters long, with at least 4 letters, 1-2 numbers, and one special character.', { position: "top-center" });
      return;
    }

    try {
      // Firebase authentication
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful", { position: "top-center" });
      navigate("/"); // Navigate to the homepage (index.html) after successful login
    } catch (error) {
      console.error("Login error:", error.message);
      toast.error(error.message, { position: "bottom-center" });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-green-500 text-white py-5 text-center">
        <h1 className="text-3xl">QuickService - Login</h1>
      </header>

      <main className="max-w-md mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl text-gray-700 mb-6 text-center">Login to Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            Email:
            <input
              type="text"
              name="login-email"
              className="w-full p-3 border border-gray-300 rounded mt-1"
              required
            />
          </label>
          <label className="block">
            Password:
            <input
              type="password"
              name="login-password"
              className="w-full p-3 border border-gray-300 rounded mt-1"
              required
            />
          </label>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <Link to="/signup" className="text-blue-500 hover:underline">
            New customer/service provider? Register Here
          </Link>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-3 text-center">
        <p>&copy; 2024 QuickService. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
