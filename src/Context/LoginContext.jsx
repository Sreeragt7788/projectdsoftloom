import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext(null);

export function LoginProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState(() => {
    const savedUser = localStorage.getItem("userLogged");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // persist login state
  useEffect(() => {
    if (loggedInUser) {
      localStorage.setItem("userLogged", JSON.stringify(loggedInUser));
    } else {
      localStorage.removeItem("userLogged");
    }
  }, [loggedInUser]);

  const login = (loginFormData) => {
    const registeredUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    const matchedRegisteredUser = registeredUsers.find(
      (user) =>
        user.email === loginFormData.email &&
        user.password === loginFormData.password
    );

    if (!matchedRegisteredUser) {
      return false;
    }

    setLoggedInUser({
      name: matchedRegisteredUser.name,
      email: matchedRegisteredUser.email,
      token: matchedRegisteredUser.token,
    });

    return true;
  };

  const logout = () => {
    setLoggedInUser(null);
    localStorage.removeItem("userLogged");
  };

  return (
    <LoginContext.Provider value={{ loggedInUser, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
}
