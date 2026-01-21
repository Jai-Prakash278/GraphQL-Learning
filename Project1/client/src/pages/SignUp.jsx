import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-4rem)] animate-fadeIn">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 animate-slideDown transform hover:scale-[1.02] transition-transform duration-300">
        <h5 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign Up</h5>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 hover:border-purple-300"
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 hover:border-purple-300"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 hover:border-purple-300"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 hover:border-purple-300"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
