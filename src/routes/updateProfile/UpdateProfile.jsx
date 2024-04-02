import React from 'react'

import { useContext, useState } from "react";
import "./updateProfile.scss";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateSchema } from "../../utils/validations";
import axios from 'axios';

const ProfileUpdate=()=> {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [avatar, setAvatar] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(updateSchema),
  });

  const navigate = useNavigate();

  const Submit = async (data) => {
    avatar.length>0 ? data.avatar=avatar[0]:data.avatar = currentUser.avatar||null
    

    try {
      const res = await axios.put(
        `http://localhost:8000/api/v1/user/${currentUser.id}`,
        data,
        { withCredentials: true }
      );
      updateUser(res.data);
      navigate("/profile");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit(Submit)}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              {...register("username")}
              type="text"
              defaultValue={currentUser.username}
            />
            {errors?.username?.message && (
              <p className="error">{errors?.username?.message}</p>
            )}
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              {...register("email")}
              type="email"
              defaultValue={currentUser.email}
            />
            {errors?.email?.message && (
              <p className="error">{errors?.email?.message}</p>
            )}
          </div>

          <button>Update</button>
        </form>
      </div>
      <div className="sideContainer">
        <img
          src={avatar[0] || currentUser.avatar || "/noavatar.avif"}
          alt=""
          className="avatar"
        />
        <UploadWidget
          uwConfig={{
            cloudName: "akm-dev",
            uploadPreset: "estates",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        />
      </div>
    </div>
  );
}

export default ProfileUpdate;