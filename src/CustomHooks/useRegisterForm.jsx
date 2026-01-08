import { useState } from "react";

export function useRegisterForm(){
    const [registerData,setRegisterData]=useState({name:"",email:"",password:"",confirmPassword:""});

    const handleChange =(e)=>{
        const {name,value} = e.target;
        setRegisterData((previous)=>({
            ...previous,[name]:value,
        }))
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(registerData)
        setRegisterData({
           name:"",email:"",password:"",confirmPassword:"" 
        })
    }
    
    return {registerData ,handleChange , handleSubmit}
}
