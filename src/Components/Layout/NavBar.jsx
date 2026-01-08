import React from "react";
import Styles from "../../Styles/NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className={Styles.navSection}>
      
      {/* Logo / Brand */}
      <div className={Styles.logo}>
        ShopEasy
      </div>

      {/* Search */}
      <div className={Styles.navSearch}>
        <input type="text" placeholder="Search products..." />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>

      {/* Links */}
      <div className={Styles.linkSection}>
        <Link to="/">Home</Link>

        <Link to="/cart" className={Styles.cartLink}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
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
          Cart
        </Link>
      </div>

    </nav>
  );
}

export default NavBar;
