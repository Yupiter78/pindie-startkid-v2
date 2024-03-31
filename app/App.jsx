"use client";

import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useStore } from "@/app/store/app-store";
import PropTypes from "prop-types";

export const App = ({ children }) => {
    const { checkAuth } = useStore();

    useEffect(() => {
        checkAuth();
    }, []);

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

App.propTypes = {
    children: PropTypes.object
};
