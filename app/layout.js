import React from "react";
import "./globals.css";
import { App } from "./App";
import PropTypes from "prop-types";

export const metadata = {
    title: "Pindie",
    description: "Портал инди-игр от студентов Яндекс Практикума"
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body>
                <App>{children}</App>
            </body>
        </html>
    );
}

RootLayout.propTypes = {
    children: PropTypes.node.isRequired
};
