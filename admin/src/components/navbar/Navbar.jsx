import "./navbar.scss";
import { Navigate, useNavigate } from 'react-router-dom'
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  
  const {user,dispatch}=useContext(AuthContext)
  const navigate=useNavigate();
  const handleClick=e=>{
    e.preventDefault();
    dispatch({
        type:"LOGOUT",
    });
    navigate("/");
    alert("Logout Success")
    
}
  return (
    <div className="navbar">
      <div className="wrapper">
        <button onClick={handleClick}>Logout</button>
        
        </div>
      </div>
   
  );
};

export default Navbar;
