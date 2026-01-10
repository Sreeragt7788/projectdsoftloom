import { useState } from "react";

export function useRegisterForm() {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };



  //validation
  const handleRegisterForm = (registerData) => {
    //name
    if (!registerData.name) return "Name is required";

    if (!registerData.name.trim()) return "Name cannot be empty";

    //email
    if (!registerData.email) return "Email is required";
    if (!registerData.email.endsWith("@gmail.com"))
      return "Enter email must be gmail address";

    //password
    if (!registerData.password) return "Password is required";

    if (registerData.password.length < 6)
      return "Password must be atleast 6 characters";

    //confirm Password

    if (!registerData.confirmPassword) return "Confirm Password is required";

    if (registerData.password !== registerData.confirmPassword)
      return "Password and Confirm Password mut be same";

    return true;
  };




  const handleSubmit = (e) => {
    e.preventDefault();

    const registerValidation = handleRegisterForm(registerData)

    if(registerValidation !== true){
        alert(registerValidation)
        return;
    }

    console.log(registerData);
    setRegisterData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return { registerData, handleChange, handleSubmit };
}
