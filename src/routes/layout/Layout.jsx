import "./layout.scss";
import {Navbar} from "../../components";
import { Outlet } from "react-router-dom";
  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

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

export default Layout;
