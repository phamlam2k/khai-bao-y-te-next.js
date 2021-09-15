import Head from 'next/head'
import React, { useState, useEffect, useRef} from 'react'
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from 'axios';

import Router from "next/router";
import Login from './login';


function Home() {
    return (
        <Login />
    )
}

export default Home;
