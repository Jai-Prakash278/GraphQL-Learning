import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg animate-slideDown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to={"/"}
            className="text-white text-2xl font-bold hover:text-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            Quote App
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link
                to={"/profile"}
                className="text-white hover:text-gray-200 transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium transform hover:scale-110"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="text-white hover:text-gray-200 transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium transform hover:scale-110"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signUp"
                className="text-white hover:text-gray-200 transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium transform hover:scale-110"
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                to="/create"
                className="bg-white text-purple-600 hover:bg-gray-100 transition-all duration-300 px-4 py-2 rounded-md text-sm font-medium transform hover:scale-110 hover:shadow-lg"
              >
                Create
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
