import React from "react";
import Styles from "./Overlay.module.css";
import PropTypes from "prop-types";

export const Overlay = ({ isOpened, close }) => {
    return (
        isOpened && (
            <div
                className={`${Styles.overlay} ${Styles["overlay_is-opened"]}`}
                onClick={close}
            ></div>
        )
    );
};

Overlay.propTypes = {
    isOpened: PropTypes.bool,
    close: PropTypes.func
};
