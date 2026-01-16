import React, { useContext } from 'react'
import { LoginContext } from '../Context/LoginContext'
import { Navigate } from 'react-router-dom'

function PrivateRoute({children}) {
 const {loggedInUser} =useContext(LoginContext)

 if(!loggedInUser){
    return <Navigate to="/loginpage" />
 }

 return children
}

export default PrivateRoute