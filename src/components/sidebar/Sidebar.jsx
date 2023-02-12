import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import PeopleIcon from '@mui/icons-material/People';import LocalShippingIcon from "@mui/icons-material/LocalShipping";
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
// import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  // const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">KingstechG</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
         
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">CUSTOMER</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PeopleIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Guarantors</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>Loans</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Decision Models</span>
          </li>
          <li>
            <SavingsOutlinedIcon className="icon" />
            <span>Savings</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Loan Request</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Whitelist</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Karma</span>
          </li>
          <p className="title">BUSINESS</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Organization</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Loan Products</span>
          </li>
          <li>
            <InsertChartIcon className="icon" />
            <span>Savings Products</span>
          </li>
          <li>
            <InsertChartIcon className="icon" />
            <span>Fees and Charges</span>
          </li>
          <li>
            <InsertChartIcon className="icon" />
            <span>Transactions</span>
          </li>
          <li>
            <InsertChartIcon className="icon" />
            <span>Services</span>
          </li>
          <li>
            <InsertChartIcon className="icon" />
            <span>Service Account</span>
          </li>
          <li>
            <InsertChartIcon className="icon" />
            <span>Settlements</span>
          </li>
          <li>
            <InsertChartIcon className="icon" />
            <span>Reports</span>
          </li>
          <p className="title">SETTINGS</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Preferences</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Fees and Pricing</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Audit Logs</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          // onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          // onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
