import { useContext } from "react";
import LoginContext from "../../context/LoginContext";
import { Link } from "react-router-dom";

const LoginConatiner = () => {
  const { user, loading, logout } = useContext(LoginContext);

  const handleLogout = async () => {
    await logout();
  };

  if (loading) return <h1>loading</h1>;

  return (
    <ul>
      <li>
        {user ? (
          <button onClick={handleLogout}>logout</button>
        ) : (
          <Link to={"/login"}>longin</Link>
        )}
      </li>
      <li>
        <Link to={"/register"}>register</Link>
      </li>
    </ul>
  );
};

export default LoginConatiner;
