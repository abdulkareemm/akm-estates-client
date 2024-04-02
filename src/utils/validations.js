import * as Yup from "yup";

export const signupSchema = Yup.object({
  username: Yup.string()
    .required("Username is required.")
    .matches(/^[a-zA-Z_ ]*$/, "no special characters allowed.")
    .min(3, "Name must be between 3 and 16 characters.")
    .max(16, "Name must be between 3 and 16 characters."),
  email: Yup.string()
    .email("Invalid email address.")
    .required("Email address is required."),
  password: Yup.string()
    .required("Password in required.")
    .min(8, "Password must be at least 8 characters")
    
});
export const updateSchema = Yup.object({
  username: Yup.string()
    .required("Username is required.")
    .matches(/^[a-zA-Z_ ]*$/, "no special characters allowed.")
    .min(3, "Name must be between 3 and 16 characters.")
    .max(16, "Name must be between 3 and 16 characters."),
  email: Yup.string()
    .email("Invalid email address.")
    .required("Email address is required."),
});
export const loginSchema = Yup.object({
  username: Yup.string()
    .required("Username is required."),
  password: Yup.string()
    .required("Password in required.")
    .min(8, "Password must be at least 8 characters"),
});
