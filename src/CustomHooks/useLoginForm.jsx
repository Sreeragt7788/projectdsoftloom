import { useContext, useState } from "react";
import { LoginContext } from "../Context/LoginContext";
import { useNavigate } from "react-router-dom";
import { NotificationContext } from "../Context/NotificationContext";

export function useLoginForm() {
  const { showSuccess, showError } = useContext(NotificationContext);
  const { login , logout } = useContext(LoginContext);
  const navigate = useNavigate();

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

    const validationResult = handleLoginValidation(loginData);

    if (validationResult !== true) {
      showError(validationResult);
      return;
    }

    const isLoggedIn = login(loginData);

    if (!isLoggedIn) {
      showError("Invalid email or password");
      return;
    }

    showSuccess("Login Successful");

    setLoginData({
      email: "",
      password: "",
    });

    navigate("/products");
  };

  const handleLoginValidation = (loginData) => {
    if (!loginData.email) return "Email is required";

    if (!loginData.email.endsWith("@gmail.com"))
      return "Email must be a Gmail address";

    if (!loginData.password) return "Password is required";

    return true;
  };

  

  return {
    loginData,
    handleChange,
    handleSubmit,
  };
}
