import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";

export default function PrivateRoute({ children }) {
  const { loggedInUser } = useContext(LoginContext);

  if (!loggedInUser) {
    return <Navigate to="/loginpage" replace />;
  }

  return children;
}
