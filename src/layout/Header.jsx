import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full bg-gray-100 py-4">
      <nav className="flex justify-center space-x-6 text-lg font-medium">
        <Link to="/" className="text-blue-600 hover:text-blue-800 transition">
          Home
        </Link>
        <Link to="/login" className="text-blue-600 hover:text-blue-800 transition">
          Login
        </Link>
      </nav>
    </div>
  );
}

export default Header;
