"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { Overlay } from "../Overlay/Overlay";
import { Popup } from "../Popup/Popup";
import { AuthForm } from "../AuthForm/AuthForm";
import Link from "next/link";
import { getJWT, getMe, isResponseOk, removeJWT } from "@/app/api/api-utils";
import { endpoints } from "@/app/api/config";

const Header = () => {
    const [popupIsOpened, setPopupIsOpened] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const pathname = usePathname();
    useEffect(() => {
        const jwt = getJWT();
        if (jwt) {
            getMe(endpoints.me, jwt).then((userData) => {
                if (isResponseOk(userData)) {
                    setIsAuthorized(true);
                } else {
                    setIsAuthorized(false);
                    removeJWT();
                }
            });
        }
    }, []);
    const openPopup = () => {
        setPopupIsOpened(true);
    };
    const closePopup = () => {
        setPopupIsOpened(false);
    };

    const logoContent = (
        <img
            className={styles.logo__image}
            src="/images/logo.svg"
            alt="Логотип Pindie"
        />
    );

    const handleLogOut = () => {
        setIsAuthorized(false);
        removeJWT();
    };

    return (
        <header className={styles.header}>
            {pathname === "/" ? (
                <div className={styles.logo}>{logoContent}</div>
            ) : (
                <Link href="/" className={styles.logo}>
                    {logoContent}
                </Link>
            )}
            <nav className={styles.menu}>
                <ul className={styles.menu__list}>
                    <li className={styles.menu__item}>
                        <Link
                            href="/new"
                            className={`${styles.menu__link} ${
                                pathname === "/new"
                                    ? styles.menu__link_active
                                    : ""
                            }`}
                        >
                            Новинки
                        </Link>
                    </li>
                    <li className={styles.menu__item}>
                        <Link
                            href="/popular"
                            className={`${styles.menu__link} ${
                                pathname === "/popular"
                                    ? styles.menu__link_active
                                    : ""
                            }`}
                        >
                            Популярные
                        </Link>
                    </li>
                    <li className={styles.menu__item}>
                        <Link
                            href="/shooters"
                            className={`${styles.menu__link} ${
                                pathname === "/shooters"
                                    ? styles.menu__link_active
                                    : ""
                            }`}
                        >
                            Шутеры
                        </Link>
                    </li>
                    <li className={styles.menu__item}>
                        <Link
                            href="/runners"
                            className={`${styles.menu__link} ${
                                pathname === "/runners"
                                    ? styles.menu__link_active
                                    : ""
                            }`}
                        >
                            Раннеры
                        </Link>
                    </li>
                    <li className={styles.menu__item}>
                        <Link
                            href="/pixel-games"
                            className={`${styles.menu__link} ${
                                pathname === "/pixel-games"
                                    ? styles.menu__link_active
                                    : ""
                            }`}
                        >
                            Пиксельные
                        </Link>
                    </li>
                    <li className={styles.menu__item}>
                        <Link
                            href="/tds"
                            className={`${styles.menu__link} ${
                                pathname === "/tds"
                                    ? styles.menu__link_active
                                    : ""
                            }`}
                        >
                            TDS
                        </Link>
                    </li>
                </ul>
                <div className={styles.auth}>
                    {isAuthorized ? (
                        <button
                            className={styles.auth__button}
                            onClick={handleLogOut}
                        >
                            Выйти
                        </button>
                    ) : (
                        <button
                            className={styles.auth__button}
                            onClick={openPopup}
                        >
                            Войти
                        </button>
                    )}
                </div>
            </nav>
            <Overlay isOpened={popupIsOpened} close={closePopup} />
            <Popup isOpened={popupIsOpened} close={closePopup}>
                <AuthForm close={closePopup} setAuth={setIsAuthorized} />
            </Popup>
        </header>
    );
};

export default Header;
