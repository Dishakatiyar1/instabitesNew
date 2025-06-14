import React from "react";
import "./register.css";
import banner from "../../assets/images/bg.jpg";
import {Link, useNavigate} from "react-router-dom";
import {LeftCircleOutlined} from "@ant-design/icons";
import {LOGO_URL} from "../../utils/constant";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useSelector, useDispatch} from "react-redux";
import {message} from "antd";
import {addUser} from "../../redux/slices/userslice";
import {v4 as uuidv4} from "uuid";

const Register = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const user_data = useSelector(state => state.userslice.userdata);
  const formUniqueID = uuidv4();
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const registerSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name contain much more than 2 character")
      .required("Please enter name"),
    email: Yup.string()
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Please enter valid email"
      )
      .required("Please enter email"),
    password: Yup.string()
      .trim()
      .matches(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
        "Password contain minimum eight characters, at least one letter and one number"
      )
      .required("Please enter password"),
    confirm_password: Yup.string()
      .trim()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please enter confirm password"),
  });

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
    useFormik({
      initialValues: initialValues,
      validationSchema: registerSchema,
      onSubmit: (values, {resetForm}) => {
        const isUser = user_data.findIndex(
          user =>
            user?.email === values?.email && user?.password === values?.password
        );
        if (isUser === -1) {
          dispatch(addUser({...values, id: formUniqueID}));
          resetForm({values: ""});
          navigate("/login");
        } else {
          messageApi.open({
            type: "error",
            content: "Email already has been taken",
            duration: 2,
          });
        }
      },
    });

  return (
    <>
      {contextHolder}
      <div className="form-container">
        <Link to="/" className="back-icon">
          <LeftCircleOutlined />
          <span>Back</span>
        </Link>
        <div className="form-block">
          <form className="login-form" onSubmit={handleSubmit}>
            <img
              src={LOGO_URL}
              alt="logo"
              className="login-logo"
              style={{
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            />
            <div className="input-block">
              <label className="input-label">Name :</label>
              <input
                className="form-input"
                placeholder="Enter your name"
                type="text"
                name="name"
                value={values?.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors?.name && touched?.name && (
                <span className="form-error">{errors?.name}</span>
              )}
            </div>
            <div className="input-block">
              <label className="input-label">Email :</label>
              <input
                className="form-input"
                placeholder="Enter your email"
                type="text"
                name="email"
                value={values?.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors?.email && touched?.email && (
                <span className="form-error">{errors?.email}</span>
              )}
            </div>
            <div className="input-block">
              <label className="input-label">Password :</label>
              <input
                className="form-input"
                placeholder="Enter your password"
                type="password"
                name="password"
                value={values?.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors?.password && touched?.password && (
                <span className="form-error">{errors?.password}</span>
              )}
            </div>
            <div className="input-block">
              <label className="input-label">Confirm Password :</label>
              <input
                className="form-input"
                placeholder="Enter your confirm password"
                type="password"
                name="confirm_password"
                value={values?.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors?.confirm_password && touched?.confirm_password && (
                <span className="form-error">{errors?.confirm_password}</span>
              )}
            </div>
            <button type="submit" className="login-submit-btn">
              Submit
            </button>
            <p className="form-bottom">
              Already have account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
        <div className="banner-block">
          <img src={banner} alt="banner-image" />
        </div>
      </div>
    </>
  );
};

export default Register;
