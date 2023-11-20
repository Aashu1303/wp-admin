import axios from "axios";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.scss";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  // Handle Change Function
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // Handle Click Function for Login
  const handleLoginClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      if (res.data.isAdmin) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
        navigate("/");
      } else {
        dispatch({ type: "LOGIN_FAILURE", payload: { message: "You are not admin" } });
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  };

  // Handle Click Function for Registration
  const handleRegisterClick = async (e) => {
    e.preventDefault();
    // Add logic to send a registration request to the external API
    try {
      const res = await axios.post("https://wp-admin-api.vercel.app/auth/login", credentials);
      // Handle the registration response as needed
    } catch (error) {
      // Handle registration failure
    }
  };

  return (
    <div className="mainContainer">
      <div className="contentArea">
        <div className="right">
          <h1>Sign in your account!</h1>
          <p>Login with your personal details to continue</p>
          <form>
            <input
              type="text"
              placeholder="Username"
              id="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
            />
            <button disabled={loading} onClick={handleLoginClick}>
              Login
            </button>
            <button disabled={loading} onClick={handleRegisterClick}>
              Register
            </button>
            {error && <span>{error.message}</span>}
          </form>
        </div>
        <div className="left">
          <h1>Welcome Back!</h1>
          <p>to continue please login with your personal account information</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
