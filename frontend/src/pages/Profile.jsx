// src/pages/Profile.jsx
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/signin");
  };

  
  const joinDate = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "N/A";

  
  const initials = user?.name
    ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : "??";

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 py-16">

        
        <h1 className="text-3xl font-semibold mb-10">My Profile</h1>

        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">

          
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">
              {initials}
            </div>
            <div>
              <h2 className="text-2xl font-semibold">{user?.name}</h2>
              <p className="text-gray-500 text-sm mt-1">Coinbase Member</p>
            </div>
          </div>

          <hr className="border-gray-100 mb-8" />

          
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Full Name</p>
                <p className="text-gray-800 font-medium">{user?.name}</p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Email Address</p>
                <p className="text-gray-800 font-medium">{user?.email}</p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Member Since</p>
                <p className="text-gray-800 font-medium">{joinDate}</p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Account ID</p>
                <p className="text-gray-500 font-mono text-sm">{user?.id}</p>
              </div>
            </div>
          </div>

          <hr className="border-gray-100 my-8" />

          
          <button
            onClick={handleLogout}
            className="w-full py-3 rounded-full border border-red-200 text-red-500 hover:bg-red-50 font-medium transition"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;