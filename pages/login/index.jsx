import Head from 'next/head'
import React, { useState, useEffect, useRef} from 'react'
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from 'axios';

import Router from "next/router";

const Login = () => {
    const [list, setList] = useState([]);
    const [redirect, setRedirect] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    let history = useHistory();
    const [error, setError] = useState(null);
    const [countList, setCountList] = useState(0)
    // call API
    useEffect(() => {
        fetch('https://611b1bf022020a00175a4341.mockapi.io/User')
            .then(res => res.json())
            .then(data => {
                setList(data);
            })

        setIsLogin(false)
    }, [])

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",

        },
        validationSchema: Yup.object({
            email: Yup.string().email("'Không đúng định dạng Email !").required('Không được để trống !'),
            password: Yup.string()
                .min(3, 'Tối thiểu 3 ký tự !')
                .required('Không được để trống !'),

        }),
        onSubmit: (values) => {
            let count = 0;
            list.forEach((items, index) => {
                if (formik.values.email === items.user.email && formik.values.password === items.user.password && items.user.admin === true) {
                    localStorage.setItem("accessToken", items.id)
                    setRedirect(true);
                    Router.push(`/home/admin/danhsachnhanvien`)
                } else if (formik.values.email === items.user.email && formik.values.password === items.user.password && items.user.admin === false) {
                    localStorage.setItem("accessToken", items.id)
                    setRedirect(true);
                    Router.push(`/home/nhanvien/list`)
                }
                else {
                    count++;
                }
            })
            console.log(count)
            if (count === list.length) {
                alert("Vui long nhap lai tai khoan mat khau")
                setError("Tài Khoản hoặc  Mật Khẩu không đúng !");
            }


        }
    });


    const responseFacebook = (response) => {
        console.log(response);

        var count = 0;
        var i = 0;

        list.map(
            (li,index) => {
                if(li.user.idFb == response.id){
                    count +=1;
                    console.log(li.id)
                    i = li.id;
                }
            }
        )
        console.log(i)
        console.log(count)
        if(count == 0){
            const user = {
                name : response.name,
                email : response.email,
                password: '',
                admin: false,
                noteTravel: "Bạn chưa được cấp phép",
                idFb : response.id,
                idStaff : '',
            }

            axios.post("https://611b1bf022020a00175a4341.mockapi.io/User", { user})
        }
        localStorage.setItem('accessToken', true);
        history.push(`/home/nhanvien/${i}`);
    }
  
    const responseGoogle = (response) => {
        console.log(response);
    }

    return (
        <div className="body-login">
            <div className="bg-light body-login-content">
                <div className="forms-container">
                    <div className="signin-signup">
                        <form className="sign-in-form" onSubmit={formik.handleSubmit}>
                            <h2 className="title text-center mt-2">Sign in</h2>
                            <div className="input-field mt-5">
                                <i className="fas fa-user mr-2"></i>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            {formik.errors.email && formik.touched.email && (
                            <div className="errormess text-danger"><span> {formik.errors.email}</span> </div>) }

                            <div className="input-field mt-3">
                                <i className="fas fa-lock mr-2"></i>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            {formik.errors.password && formik.touched.password ? (
                                <div className="errormess text-danger"><span>{formik.errors.password}</span></div>
                            ): null}

                            <div className="errormess text-danger"><span>{error ? error : ""}</span></div>
                            
                            <button type="submit" value="Login" className="btn btn-outline-secondary mt-4 btn-login">Login</button>
                            
                            <div className="register-forgot mt-4 text-center">
                                <a className='mt-2' href="/register">Not a member yet? Sign up </a>
                            </div>

                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
