import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../../utils/validations";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });
  const Submit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/register",
        data
      );
      toast.success(response.data.message)
      setTimeout(()=>{
        navigate("/login")
      },1000)
    } catch (error) {
      error?.response?.data?.message
        ? toast.error(error?.response?.data?.message)
        : toast.error("Something went wrong");
    }
  };
  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit(Submit)}>
          <h1>Create an Account</h1>
          <input type="text" placeholder="Username" {...register("username")} />
          {errors?.username?.message && (
            <p className="error">{errors?.username?.message}</p>
          )}

          <input type="text" placeholder="Email" {...register("email")} />
          {errors?.email?.message && (
            <p className="error">{errors?.email?.message}</p>
          )}

          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors?.password?.message && (
            <p className="error">{errors?.password?.message}</p>
          )}

          <button type="submit">Register</button>
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Register;
