import { useContext, useEffect, useRef } from "react";
import { useLoginForm } from "../CustomHooks/useLoginForm";
import { Link } from "react-router-dom";


function Login() {
  const { loginData, handleChange, handleSubmit,handleLoggout } = useLoginForm();
  const emailRef = useRef(null);


  
  useEffect(() => {
    document.title="Login -   ShopEasy"
    emailRef.current?.focus();
  }, []);

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full bg-white/10 backdrop-blur-xl shadow-2xl rounded-3xl border border-white/20 overflow-hidden flex flex-col lg:flex-row">
        
        <div className="lg:w-1/2 p-12 flex flex-col justify-center relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85" 
            alt="ShopEasy Shopping Cart - Premium Products Kerala"
            className="absolute inset-0 w-full h-full object-cover opacity-40 lg:opacity-60 z-0"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent z-10"></div>
          
          <div className="relative z-20 text-white max-w-md">
            <h2 className="text-4xl font-bold mb-6 drop-shadow-2xl leading-tight">
              ShopEasy Awaits
            </h2>
            <p className="text-xl mb-8 leading-relaxed drop-shadow-lg">
              Fill your cart with premium electronics, fashion & essentials. UPI ready, Fast delivery.
            </p>
            <ul className="space-y-3 text-lg drop-shadow-md">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 shrink-0">✓</span>
                Secure Checkout
              </li>
              
              <li className="flex items-start">
                <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 shrink-0">✓</span>
                Express Delivery
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 p-12 flex flex-col justify-center">
          <div className="max-w-md w-full mx-auto">
            <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg text-center">
              Sign In Securely
            </h3>
           
            
            <form onSubmit={handleSubmit} className="bg-white/20 backdrop-blur-xl p-8 rounded-2xl border border-white/30 space-y-6 shadow-2xl">
              <div>
                <label className="block text-white text-sm font-medium mb-2 drop-shadow-md">
                  Email
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  value={loginData.email || ''}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur-sm outline-none border border-white/30 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all shadow-lg text-lg"
                  autoComplete="email"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2 drop-shadow-md">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={loginData.password || ''}
                  onChange={handleChange}
                  placeholder="•••••••••"
                  className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur-sm outline-none border border-white/30 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all shadow-lg text-lg"
                  autoComplete="current-password"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg tracking-wide shadow-xl hover:shadow-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform  backdrop-blur-sm border border-white/20"
              >
                Login to ShopEasy →
              </button>

              <p className="text-center text-sm text-white/90 pt-4 drop-shadow-md">
                New customer?{' '}
                <Link 
                  to="/registerpage" 
                  className="underline font-semibold hover:text-indigo-200 transition-colors"
                >
                  Create Account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
