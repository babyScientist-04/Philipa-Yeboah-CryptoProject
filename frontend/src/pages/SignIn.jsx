import { useState } from "react";
import logo from "../assets/img/coinbaseLogo.svg";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const SignIn = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const socialButtons = [
    { name: "Passkey", text: "Sign in with Passkey", icon: <FaApple size={20} /> },
    { name: "Google",  text: "Sign in with Google",  icon: <FcGoogle size={20} /> },
    { name: "Apple",   text: "Sign in with Apple",   icon: <FaApple size={20} /> },
  ];

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await login(form);
      navigate("/"); 
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black w-full min-h-screen text-white">
      <nav>
        <img src={logo} alt="Coinbase" className="w-16 h-16 p-3" />
      </nav>

      <main className="px-6 flex flex-col items-center justify-center pt-10">
        <div className="w-full max-w-md">
          <h1 className="font-bold text-3xl text-gray-100">Sign in to Coinbase</h1>

          
          {error && (
            <div className="mt-4 p-3 bg-red-900/40 border border-red-500/50 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
           
            <div>
              <label className="block mb-1 text-sm text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="satoshi@nakamoto.com"
                required
                className="p-4 rounded-lg text-gray-300 bg-zinc-900 border border-zinc-700 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            
            <div>
              <label className="block mb-1 text-sm text-gray-300">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Your password"
                required
                className="p-4 rounded-lg text-gray-300 bg-zinc-900 border border-zinc-700 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-full font-semibold transition"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-700" />
            <span className="px-4 text-gray-400 text-sm">OR</span>
            <div className="flex-1 border-t border-gray-700" />
          </div>

          
          <div className="space-y-4">
            {socialButtons.map((btn, index) => (
              <button
                key={index}
                className="w-full flex items-center justify-center gap-3 bg-zinc-800 hover:bg-zinc-700 py-4 rounded-full font-medium transition"
              >
                {btn.icon}
                {btn.text}
              </button>
            ))}
          </div>

          <p className="text-center mt-6 text-gray-300">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500">Sign up</Link>
          </p>

          <p className="text-center text-gray-500 text-xs mt-6">
            Not your device? Use a private window. See our{" "}
            <span className="underline">Privacy Policy</span> for more info.
          </p>
        </div>
      </main>
    </div>
  );
};

export default SignIn;