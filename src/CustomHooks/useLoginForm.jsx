import { useState } from "react";

export function useLoginForm() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);

    // reset
    setLoginData({
      email: "",
      password: "",
    });
  };

  return {
    loginData,
    handleChange,
    handleSubmit,
  };
}
