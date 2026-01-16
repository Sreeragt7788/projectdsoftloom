import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../../Context/SearchContext";
import { LoginContext } from "../../Context/LoginContext";

function NavBar() {
  const { search, setSearch } = useContext(SearchContext);
  const { loggedInUser, logout } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/loginpage");
  };

  return (
    <nav className="w-full bg-white shadow-sm px-6 py-3 flex items-center">
      
     
      <div className="w-1/4">
        <Link
          to="/products"
          className="text-2xl font-bold text-indigo-600"
        >
          ShopEasy
        </Link>
      </div>

      {/* Center - Search */}
      <div className="w-2/4 flex justify-center">
        <div className="w-full max-w-md flex items-center bg-gray-100 rounded-lg px-4 py-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="bg-transparent outline-none flex-1 text-sm"
          />
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>

    
      <div className="w-1/4 flex justify-end items-center gap-4">
        
        
        <Link
          to="/cart"
          className="flex items-center gap-1 text-gray-700 hover:text-indigo-600 font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25h11.218c1.121-2.3 2.1-4.684 2.924-7.138M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0Z"
            />
          </svg>
          <span>Cart</span>
        </Link>

        {loggedInUser ? (
  <div className="flex items-center gap-3">
    
    {/* Avatar created  */}
    <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold uppercase">
      {loggedInUser.name.charAt(0)}
    </div>

    {/* Username here */}
    <span className="text-sm font-medium text-gray-700">
      {loggedInUser.name}
    </span>

    {/* Logout  button */}
    <button
      onClick={handleLogout}
      className="px-3 py-1.5 text-sm rounded-md bg-red-500 text-white hover:bg-red-600"
    >
      Logout
    </button>

  </div>
) : (
  <h3 className="text-gray-700 font-medium">Guest</h3>
)}

      </div>
    </nav>
  );
}

export default NavBar;
