import React, { useEffect, useState } from "react";
import Styles from "./AuthForm.module.css";
import PropTypes from "prop-types";

export const AuthForm = ({ close, setAuth }) => {
    const [authData, setAuthData] = useState({
        identifier: "",
        password: ""
    });
    const [userData, setUserData] = useState(null);
    const [message, setMessage] = useState({
        status: null,
        text: null
    });

    useEffect(() => {
        console.log("authData: ", authData);
    }, [authData]);

    const handleInput = ({ target }) => {
        setAuthData((prevAuthData) => ({
            ...prevAuthData,
            [target.name]: target.value
        }));
    };
    return (
        <form className={Styles.form}>
            <h2 className={Styles.form__title}>Авторизация</h2>
            <div className={Styles.form__fields}>
                <label className={Styles.form__field}>
                    <span className={Styles["form__field-title"]}>Email</span>
                    <input
                        onInput={handleInput}
                        className={Styles["form__field-input"]}
                        name="identifier"
                        type="email"
                        placeholder="hello@world.com"
                    />
                </label>
                <label className={Styles.form__field}>
                    <span className={Styles["form__field-title"]}>Пароль</span>
                    <input
                        onInput={handleInput}
                        className={Styles["form__field-input"]}
                        name="password"
                        type="password"
                        placeholder="***********"
                    />
                </label>
            </div>
            <div className={Styles.form__actions}>
                <button className={Styles.form__reset} type="reset">
                    Очистить
                </button>
                <button className={Styles.form__submit} type="submit">
                    Войти
                </button>
            </div>
        </form>
    );
};

AuthForm.propTypes = {
    close: PropTypes.func,
    setAuth: PropTypes.func
};
