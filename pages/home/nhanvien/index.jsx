import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import BannerHeader from "./Components/BannerHeader";
import Header from "./Components/Header";
import {useRouter} from "next/router";
import axios from "axios";
import Footer from "./Components/Footer";
import BodyCotent from "./list";
// import { LoadingPage } from "./Components/LoadingPage";

export const staffProvider = createContext();

const Staff = ({children}) => {
  console.log(children)
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState({
    id: "",
    user: {
      email: "",
      password: "",
      admin: "",
      name: "",
      idStaff: "",
    },
  });


  useEffect(() => {
    return axios
      .get(`https://611b1bf022020a00175a4341.mockapi.io/User/${localStorage.getItem("accessToken")}`)
      .then((res) =>{
        
        setUsers(res.data);
        setLoading(false);
      })
      .catch(function (err) {
        console.log(err)
      });
  },[]);

  const onDropDown = () => {
    var logout = document.querySelector(".user .logout");
    var user = document.querySelector(".user");
    var active = document.querySelector(".header-content .active");
    var log = document.querySelector(".log");

    if (!document.querySelector(".header-content").contains(active)) {
      log.style.display = "block";
      logout.style.top = "0px";
      logout.style.opacity = "1";
      user.classList.add("active");
      user.style.color = "black";
    } else {
      logout.style.top = "-45px";
      logout.style.opacity = "0";
      active.classList.remove("active");
      user.style.color = "white";
      log.style.display = "none";
    }
  };

  const onReturnLogin = () => {
    localStorage.removeItem("accessToken");
    router.push("/")
  };

  const data ={
    users
  }

  return (
    <>
    {loading ? (
      <LoadingPage />
      ) : (
        <>
            <Header
              key = {users.id}
              onDropDown={onDropDown}
              onReturnLogin={onReturnLogin}
              image=""
              name={users.user.name}
              id={users.id}
            />
            <BannerHeader />
            
              <staffProvider.Provider value={data}>
                {children}
              </staffProvider.Provider>

            <Footer image="" />
            </>
        )}
    </>
  );
};

export default Staff;

export function useStaffContext(){
  return useContext(staffProvider)
}
