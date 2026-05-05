import { Search, Globe, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/coinbaseLogo.svg";
import { useAuth } from "../../context/AuthContext.jsx";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/signin");
  };

  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

         
          <div className="flex items-center gap-10">
            <Link to="/">
              <img src={logo} alt="Coinbase" className="w-10 h-10" />
            </Link>

            <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-700">
              <Link to="/explore" className="hover:text-black">Cryptocurrencies</Link>
              <a href="#" className="hover:text-black">Individuals</a>
              <a href="#" className="hover:text-black">Businesses</a>
              <a href="#" className="hover:text-black">Institutions</a>
              <a href="#" className="hover:text-black">Developers</a>
              <a href="#" className="hover:text-black">Company</a>
            </div>
          </div>

          
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
              <Search size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
              <Globe size={18} />
            </button>

            {user ? (
              // Authenticated state
              <>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-sm font-medium"
                >
                  <User size={16} />
                  {user.name.split(" ")[0]} 
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-5 py-2 rounded-full border border-gray-300 text-sm font-medium hover:bg-gray-50 transition"
                >
                  Sign out
                </button>
              </>
            ) : (
              // Unauthenticated state
              <>
                <Link
                  to="/signin"
                  className="px-5 py-2 rounded-full bg-gray-100 text-sm font-medium hover:bg-gray-200"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
