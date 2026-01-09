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
   
    const finalValidation = loginValidation(loginData)

    if(finalValidation !== true){
        alert(finalValidation)
        return
    }
    

     console.log(loginData);

    // reset
    setLoginData({
      email: "",
      password: "",
    });

    
  };

  const loginValidation = (loginData) => {
    //EMPTY EMAIL
    if (!loginData.email) return "Email is required";

    //here @gmail.com must
    if (!loginData.email.endsWith("@gmail.com"))
      return "enter must be a gmail address";

    //go for password
    if (!loginData.password) return "Password is required";
    

    // if (loginData.password !== loginData.password)
    //   return "password is incorrect";

    return true;
  };


  return {
    loginData,
    handleChange,
    handleSubmit,
  };
}
