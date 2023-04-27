import { useContext } from "react";
import LoginContext from "../../context/LoginContext";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const LoginConatiner = () => {
  const { user, loading, logout } = useContext(LoginContext);

  const handleLogout = async () => {
    await logout();
  };

  if (loading) return <h1>loading</h1>;

  return (
    <div className="ms-5">
      <div>
        {user ? (
          <Button
            variant="outline-dark"
            className="fs-6"
            onClick={handleLogout}
          >
            logout
          </Button>
        ) : (
          <Link to={"/login"}>
            <Button variant="outline-dark" className="fs-6">
              longin
            </Button>
          </Link>
        )}
      </div>
      <div>
        {user ? (
          <p className="fs-6">{user.email.split("@", 1)}</p>
        ) : (
          <Link to={"/register"}>
            <Button variant="outline-dark" className="fs-6">
              register
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default LoginConatiner;
