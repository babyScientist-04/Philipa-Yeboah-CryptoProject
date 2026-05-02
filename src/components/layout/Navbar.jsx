import { Search, Globe } from "lucide-react";
import logo from '../../assets/img/coinbaseLogo.svg'

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex items-center gap-10">
           
            <div className="">
              <img src={logo} alt="" className="w-10 h-10"/>
            </div>

            
            <div className="hidden  font-semibold md:flex items-center gap-8 text-sm text-gray-700">
              <a href="#" className="hover:text-black">Cryptocurrencies</a>
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

            <button className="px-5 py-2 rounded-full bg-gray-100 text-sm font-medium hover:bg-gray-200">
              Sign in
            </button>

            <button className="px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
