import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./login.scss"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/validations";
import axios from "axios";
import { toast } from "react-toastify";
import {ThreeDots} from "react-loader-spinner"
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
   const navigate = useNavigate();
   const {updateUser} = useContext(AuthContext)
   const {
     register,
     handleSubmit,
     formState: { errors, isSubmitting },
   } = useForm({
     resolver: yupResolver(loginSchema),
   });
   const Submit = async (data) => {
     try {
       const response = await axios.post(
         "http://localhost:8000/api/v1/auth/login",
         data
       );
       console.log(response)
       localStorage.setItem("user",JSON.stringify(response.data))
       updateUser(response.data);
       navigate("/")
     } catch (error) {
       error?.response?.data?.message
         ? toast.error(error?.response?.data?.message)
         : toast.error("Something went wrong");
     }
   };
 return (
   <div className="login">
     <div className="formContainer">
       <form onSubmit={handleSubmit(Submit)}>
         <h1>Welcome back</h1>
         <input {...register("username")} type="text" placeholder="Username" />
         {errors?.username?.message && (
           <p className="error">{errors?.username?.message}</p>
         )}
         <input
           {...register("password")}
           type="password"
           placeholder="Password"
         />
         {errors?.password?.message && (
           <p className="error">{errors?.password?.message}</p>
         )}
         <button disabled={isSubmitting} type="submit">
           {isSubmitting ? (
             <ThreeDots
               visible={true}
               height="15"
               width="80"
               color="#fff"
               radius="6"
               ariaLabel="three-dots-loading"
               wrapperStyle={{}}
               wrapperClass=""
             />
           ) : (
             "Login"
           )}
         </button>
         <Link to="/register">{"Don't"} you have an account?</Link>
       </form>
     </div>
     <div className="imgContainer">
       <img src="/bg.png" alt="" />
     </div>
   </div>
 );
}

export default Login