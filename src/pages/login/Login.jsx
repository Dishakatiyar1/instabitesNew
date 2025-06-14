import React from "react";
import "./login.css";
import {LeftCircleOutlined} from "@ant-design/icons";
import banner from "../../assets/images/bg.jpg";
import {Link} from "react-router-dom";
import {LOGO_URL} from "../../utils/constant";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useSelector, useDispatch} from "react-redux";
import {message} from "antd";
import {useNavigate} from "react-router-dom";
import {setCurrentUser} from "../../redux/slices/userslice";

const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user_data = useSelector(state => state.userslice.userdata);

  const loginSchema = Yup.object({
    email: Yup.string()
      .trim()
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Please enter valid email"
      )
      .required("Please enter email"),
    password: Yup.string().min(8).required("Please enter password"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const {values, handleChange, handleBlur, handleSubmit, touched, errors} =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, {resetForm}) => {
        const isUser = user_data.findIndex(
          user =>
            user?.email === values?.email && user?.password === values?.password
        );
        if (isUser === -1) {
          messageApi.open({
            type: "error",
            content: "Account not found",
            duration: 2,
          });
        } else {
          dispatch(setCurrentUser(values));
          navigate("/");
        }
        resetForm({values: ""});
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
              <label className="input-label">Email:</label>
              <input
                className="form-input"
                placeholder="Enter your email"
                type="email"
                name="email"
                autoComplete="off"
                value={values?.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors?.email && touched?.email && (
                <span className="form-error">{errors?.email}</span>
              )}
            </div>
            <div className="input-block">
              <label className="input-label">Password:</label>
              <input
                className="form-input"
                type="password"
                autoComplete="off"
                placeholder="Enter your password"
                name="password"
                value={values?.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors?.password && touched?.password && (
                <span className="form-error">{errors?.password}</span>
              )}
            </div>
            <button type="submit" className="login-submit-btn">
              Submit
            </button>
            <p className="form-bottom">
              Dont have an account?{" "}
              <Link to="/register">Create your account</Link>
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

export default Login;
