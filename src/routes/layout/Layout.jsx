import "./layout.scss";
import {Navbar} from "../../components";
import { Navigate, Outlet } from "react-router-dom";
  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Layout = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <ToastContainer position="bottom-left" autoClose={500} />
    </div>
  );
};
const RequireAuth = () => {
  const {currentUser} = useContext(AuthContext)
 
  return currentUser ? (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <ToastContainer position="bottom-left" autoClose={500} />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export  {Layout,RequireAuth};
