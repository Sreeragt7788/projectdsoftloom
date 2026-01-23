import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../../Context/SearchContext";
import { LoginContext } from "../../Context/LoginContext";
import { CartContext } from "../../Context/CartContext";
import { NotificationContext } from "../../Context/NotificationContext";

function NavBar() {
  const { search, setSearch } = useContext(SearchContext);
  const { loggedInUser, logout } = useContext(LoginContext);
  const { cart, clearCart } = useContext(CartContext);
  const { showError } = useContext(NotificationContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    clearCart();
    logout();
    showError("You are successfully logged out");
    navigate("/products");
  };

  return (
    <nav className="w-full bg-white shadow-sm px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <Link to="/products" className="text-2xl font-bold text-indigo-600">
            ShopEasy
          </Link>
        </div>

        {/* Search */}
        <div className="w-full md:max-w-md">
          <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="bg-transparent outline-none flex-1 text-sm"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between md:justify-end gap-4">

          {/* HOME */}
          <Link
            to="/products"
            className="font-medium text-gray-700 hover:text-indigo-600"
          >
            HOME
          </Link>

          {/* Right side (Cart + User) */}
          <div className="flex items-center gap-4">

            {/* Cart */}
            <Link to="/cart" className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25h11.218c1.121-2.3 2.1-4.684 2.924-7.138M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0Z"
                />
              </svg>

              {cart.length > 0 && (
                <span className="absolute -top-2 right-0 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>

            {/* User */}
            {loggedInUser ? (
              <div className="flex items-center gap-2">
                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold uppercase">
                  {loggedInUser.name.charAt(0)}
                </div>

                {/* Name (desktop only) */}
                <span className="hidden md:inline text-sm font-medium text-gray-700">
                  {loggedInUser.name}
                </span>

                {/* Logout */}
                <button
                  onClick={handleLogout}
                  className="px-3 py-1.5 text-sm rounded-md bg-red-500 text-white hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => navigate("/loginpage")}
                className="text-gray-700 font-medium"
              >
                LOGIN
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
