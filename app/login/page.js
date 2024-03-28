"use client";

import React from "react";
import Styles from "./Login.module.css";
import { AuthForm } from "@/app/components/AuthForm/AuthForm";

const Login = () => {
    return (
        <div className={Styles.container}>
            <AuthForm />
        </div>
    );
};

export default Login;
