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
    <div className="d-flex flex-row me-3">
      <div>
        {user ? (
          <Button
            variant="outline-dark"
            className="fw-bold me-2 mt-2"
            onClick={handleLogout}
          >
            logout
          </Button>
        ) : (
          <Link to={"/login"}>
            <Button
              variant="outline-dark"
              className="fw-bold me-1"
              style={{ height: "37px" }}
            >
              longin
            </Button>
          </Link>
        )}
      </div>
      <div>
        {user ? (
          <p className="fw-bold mt-2">{user.email.split("@", 1)}</p>
        ) : (
          <Link to={"/register"}>
            <Button
              variant="outline-dark"
              className="fw-bold"
              style={{ height: "37px" }}
            >
              register
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default LoginConatiner;
