import { createContext, useEffect, useState } from "react";

export const RegisterContext = createContext(null);

export function RegisterProvider({ children }) {

  const [registeredUsers, setRegisteredUsers] = useState(() => {
    const savedUsers = localStorage.getItem("registeredUsers");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "registeredUsers",
      JSON.stringify(registeredUsers)
    );
  }, [registeredUsers]);

  const register = (registerData) => {
    const newUser = {
      name: registerData.name,
      email: registerData.email,
      password: registerData.password,
      token: "dummy-token-registered"
    };

    setRegisteredUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <RegisterContext.Provider value={{ registeredUsers, register }}>
      {children}
    </RegisterContext.Provider>
  );
}
