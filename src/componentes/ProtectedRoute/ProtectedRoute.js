import LoginContext from "../../context/LoginContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(LoginContext);

  if (user.email === "alejandro_1031m@hotmail.com") {
    return <>{children}</>;
  } else {
    try {
      throw new Error("User not authorized");
    } catch (error) {
      alert(error);
      return <Navigate to="/" />;
    }
  }
};

export default ProtectedRoute;
