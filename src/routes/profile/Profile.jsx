import "./profile.scss"
import {Chat,List} from "../../components"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
  const navigate = useNavigate();
   const { updateUser,currentUser } = useContext(AuthContext);

  

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8000/api/v1/auth/logout");
      localStorage.removeItem("user")
      updateUser(null)
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update" className="link">Update Profile</Link>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src={ currentUser.avatar || "/noavatar.avif"}
                alt=""
              />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              E-mail: <b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  )
}

export default Profile