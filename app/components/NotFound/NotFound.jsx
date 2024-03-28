import React from "react";
import Styles from "./NotFound.module.css";

const NotFound = () => {
    return (
        <div className={Styles.container}>
            <section className={Styles.box_image}>
                <div className={Styles.background_image}></div>
                <img
                    src="/images/error-404-page-not-found.jpg"
                    alt="image_404"
                    className={Styles.image}
                />
            </section>
        </div>
    );
};

export default NotFound;
