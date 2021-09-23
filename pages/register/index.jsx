import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from 'next/link'

const Register = () => {
  const [redirect, setRedirect] = useState(false);
  const [disable, setDisable] = useState(false);
  function guidGenerator() {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4();
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      noteTravel: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Không được để trống!"),
      email: Yup.string().email("Invalid email format").required("Không được để trống!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Không được để trống!"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password")], "Password's not match")
        .required("Không được để trống!"),
    }),
    onSubmit: async (values) => {
      setDisable(true);
      let user = {
        name: values.name,
        email: values.email,
        password: values.password,
        admin: false,
        noteTravel: "Bạn chưa được cấp phép",
        idFb: '',
        idStaff: guidGenerator(),
      };
      await fetch("https://611b1bf022020a00175a4341.mockapi.io/User", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({user}),
      })
        .then((res) => res.json())
        .then(() => {
          toast.success("Đăng kí thành công !!", {
            hideProgressBar: true,
          });
          setTimeout(() => {
            setRedirect(true);
          }, 1500);
        })
        .catch(() => {
          toast.error("Please try again !!", {
            hideProgressBar: true,
          });
          setDisable(false);
        });
      // setRedirect(true);
    },
  });

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div className="body-login">
      <ToastContainer />
      <div className="bg-light body-login-content">
        <div className="forms-container">
          <div className="signin-signup">
            <form className="sign-in-form" onSubmit={formik.handleSubmit}>
              <div className='back-to-login' >
                <Link href="/">
                  <i className="fas fa-arrow-left"></i>
                </Link>
              </div>
              <h2 className="title text-center">Sign up</h2>
              <div className="input-field mt-5">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.name && formik.touched.name && (
                <div className="errormess text-danger">
                  <span>{formik.errors.name}</span>{" "}
                </div>
              )}
              <div className="input-field mt-3">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.email && formik.touched.email ? (
                <div className="errormess text-danger">
                  <span>{formik.errors.email}</span>{" "}
                </div>
              ): null}
              <div className="input-field mt-3">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </div>
              {formik.errors.password && formik.touched.password && (
                <div className="errormess text-danger">
                  <span>{formik.errors.password} </span>{" "}
                </div>
              )}
              <div className="input-field mt-3">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirm_password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </div>
              {formik.errors.confirm_password &&
                formik.touched.confirm_password && (
                  <div className="errormess text-danger">
                    <span>{formik.errors.confirm_password} </span>{" "}
                  </div>
                )}
              {/* <input type="submit" className="btn" value="Sign up" /> */}
              <div className="d-flex justify-content-center">
                {!disable ? (
                  <button type="submit" className="btn btn-outline-success btn-login mt-4">
                    Đăng kí
                  </button>
                ) : (
                  <button
                  className="btn btn-primary btn-success btn-login mt-4"
                    type="button"
                    disabled
                  >
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Loading...</span>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default register;
