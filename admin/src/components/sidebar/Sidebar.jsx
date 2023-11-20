import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/users" style={{ textDecoration: "none" }}>
          <span className="logo">GOODDEEDS ADMIN</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          
          
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/halls" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Halls</span>
            </li>
          </Link>
          <Link to="/slots" style={{ textDecoration: "none" }}>
          <li>
            <CreditCardIcon className="icon" />
            <span>Slots</span>
          </li>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
          <li>
            <PhoneIcon className="icon" />
            <span>Contacts</span>
          </li>
          </Link>
          
          
          
          
        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;
