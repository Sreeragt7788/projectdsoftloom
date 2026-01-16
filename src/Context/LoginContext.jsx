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
      localStorage.setItem(
        "userLogged",
        JSON.stringify(loggedInUser)
      );
    } else {
      localStorage.removeItem("userLogged");
    }
  }, [loggedInUser]);

  const login = (loginFormData) => {
    // get all registered users
    const registeredUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    // find matching user
    const matchedRegisteredUser = registeredUsers.find(
      (registeredUser) =>
        registeredUser.email === loginFormData.email &&
        registeredUser.password === loginFormData.password
    );

    if (!matchedRegisteredUser) {
      alert("Invalid email or password");
      return;
    }

    // set logged in user
    setLoggedInUser({
      name: matchedRegisteredUser.name,
      email: matchedRegisteredUser.email,
      token: matchedRegisteredUser.token,
    });
  };

  const logout = () => {
    setLoggedInUser(null);
  };

  return (
    <LoginContext.Provider
      value={{ loggedInUser, login, logout }}
    >
      {children}
    </LoginContext.Provider>
  );
}
