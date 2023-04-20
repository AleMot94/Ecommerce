const LoginConatiner = ({ user, logout }) => {
  return (
    <div>
      <h3>Welcom {user}</h3>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default LoginConatiner;
