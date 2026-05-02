import React from 'react'
import logo from '../assets/img/coinbaseLogo.svg'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SignIn = () => {
  
      const socialButtons = [
        {
        name: "Passkey",
        text: "Sign in with Passkey",
        icon: <FaApple size={20} />,
      },
      {
        name: "Google",
        text: "Sign in with Google",
        icon: <FcGoogle size={20} />,
      },
      {
        name: "Apple",
        text: "Sign in with Apple",
        icon: <FaApple size={20} />,
      },
      
    ];
  return (
    <div className='bg-black w-full min-h-screen text-white'>
            <nav>
                <img src={logo} alt="" className='w-16 h-16 p-3' />
            </nav>
            <main className='  px-6 flex flex-col  items-center justify-center pt-26'>
                <div className='w-full max-w-md  '>
                    <h1   className='font-bold text-3xl text-gray-100'>
                        Sign In to Coinbase
                    </h1>
                    
                    <form action="">
                        <label htmlFor=""
                        className='block mb-1 mt-6'>
                            Email
                        </label>
                        <input 
                        type="email"
                        placeholder='Your email address'
                        className='p-4 rounded-lg text-gray-400 border w-full focus:outline-0  focus:ring-1 focus:ring-blue-500'/>
                    </form>
                    <button className="w-full mt-6 bg-[#2e3e67] text-black py-4 rounded-full font-semibold">
                        Continue
                    </button>
                    <div className="flex items-center my-6">
                    <div className="flex-1 border-t border-gray-700"></div>
                    <span className="px-4 text-gray-400 text-sm">OR</span>
                    <div className="flex-1 border-t border-gray-700"></div>
                    </div>
                    <div className="space-y-4">
                        {socialButtons.map((btn, index) => (
                            <button
                            key={index}
                            className="w-full flex items-center justify-center gap-3 bg-zinc-800 hover:bg-zinc-700 py-4 rounded-full font-medium"
                            >
                            {btn.icon}
                            {btn.text}
                            </button>
                        ))}
                    </div>
                    <p className="text-center mt-6 text-gray-300">
                    Already have an account?{" "}
                    <Link to="/SignUp" className="text-blue-500 cursor-pointer">Sign up</Link>
                    </p>
    
                    
                    <p className="text-center text-gray-500 text-xs mt-6">
                   Not your device? Use a private window. See our <span className="underline">Privacy Policy</span> {" "}
                    for more info.
                    </p>
    
    
    
                </div>
            </main>
    
    
        </div>
  )
}

export default SignIn