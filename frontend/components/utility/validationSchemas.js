import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const registerSchema = Yup.object().shape({
  nickname: Yup.string().required("Nickname is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  checkbox: Yup.bool().oneOf([true], "Agree to the terms and privacy required"),
});

export const feedbackSchema = Yup.object().shape({
  nickname: Yup.string().required("Nickname is required"),
  review: Yup.string(),
  rate: Yup.number(),
  courseid: Yup.string(),
});
