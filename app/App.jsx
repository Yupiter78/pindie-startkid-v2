"use client";

import React, { useEffect, useState } from "react";
import { AuthContext } from "@/app/context/app-context";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { getJWT, getMe, removeJWT, setJWT } from "@/app/api/api-utils";
import { endpoints } from "@/app/api/config";
import PropTypes from "prop-types";

export const App = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState("");

    const login = (user, token) => {
        setIsAuth(true);
        setUser(user);
        setToken(token);
        setJWT(token);
    };

    const logout = () => {
        setIsAuth(false);
        setUser(null);
        setToken("");
        removeJWT();
    };

    const checkAuth = async () => {
        const token = getJWT();
        if (token) {
            const me = await getMe(endpoints.me, token);
            if (me) {
                login(me, token);
            } else {
                logout();
            }
        }
    };

    useEffect(() => {
        (async function check() {
            await checkAuth();
        })();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isAuth,
                user,
                token,
                login,
                logout
            }}
        >
            <Header />
            {children}
            <Footer />
        </AuthContext.Provider>
    );
};

App.propTypes = {
    children: PropTypes.object
};
