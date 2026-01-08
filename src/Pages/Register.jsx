import React, { useEffect, useRef } from "react";
import { useRegisterForm } from "../CustomHooks/useRegisterForm";
import { Link } from "react-router-dom";

function Register() {
  const { registerData, handleChange, handleSubmit } = useRegisterForm();
  const nameRef = useRef(null)

  useEffect(()=>{
    document.title="Register Form - ShopEasy"
    nameRef.current?.focus();
  },[])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-lg p-10 rounded-xl shadow-md"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          Register Here
        </h2>
        <p className="text-gray-500 mb-8">
          Create your account to get started
        </p>

        <div className="grid grid-cols-1 gap-5">
          <input
            type="text"
            name="name"
            value={registerData.name}
            onChange={handleChange}
            ref={nameRef}
            placeholder="Full Name"
            className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-gray-600"
          />

          <input
            type="email"
            name="email"
            value={registerData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-gray-600"
          />

          <input
            type="password"
            name="password"
            value={registerData.password}
            onChange={handleChange}
            placeholder="Password"
            className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-gray-600"
          />

          <input
            type="password"
            name="confirmPassword"
            value={registerData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-gray-600"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-8 bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          Create Account
        </button>

        <div className="text-center mt-6 text-sm text-gray-500">
          Already have an account?
          <Link to='/loginForm' className="ml-1 text-gray-900 font-medium cursor-pointer hover:underline">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
