import LoginContext from "../../context/LoginContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(LoginContext);

  if (loading) {
    return <h1>loadings</h1>;
  }

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
