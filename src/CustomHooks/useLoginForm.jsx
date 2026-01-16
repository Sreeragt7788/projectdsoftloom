import { useContext, useState } from "react";
import { LoginContext } from "../Context/LoginContext";
import { useNavigate } from "react-router-dom";

export function useLoginForm() {
  const { login } =useContext(LoginContext)
  const navigate=useNavigate()

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
   
    const finalValidation = handleLoginValidation(loginData)

    if(finalValidation !== true){
        alert(finalValidation)
        return
    }
    
    login(loginData)
    

    // reset
    setLoginData({
      email: "",
      password: "",
    });

    navigate("/products")
    
  };

  const handleLoginValidation = (loginData) => {
    //EMPTY EMAIL
    if (!loginData.email) return "Email is required";

    //here @gmail.com must
    if (!loginData.email.endsWith("@gmail.com"))
      return "enter must be a gmail address";

    //go for password
    if (!loginData.password) return "Password is required";

    return true;
  };


  return {
    loginData,
    handleChange,
    handleSubmit,
  };
}
