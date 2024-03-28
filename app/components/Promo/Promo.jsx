"use client";
import React, { useEffect, useState } from "react";
import styles from "./Promo.module.css";

const Promo = () => {
    const [codeIsVisible, setCodeIsVisible] = useState(false);
    useEffect(() => {
        let timeout;
        if (codeIsVisible) {
            timeout = setTimeout(() => {
                setCodeIsVisible(false);
            }, 5000);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [codeIsVisible]);
    const handleButtonClick = () => {
        setCodeIsVisible(
            (prevState) => !codeIsVisible && setCodeIsVisible(true)
        );
    };
    return (
        <section className={styles.promo}>
            <div className={styles["promo__description-block"]}>
                <h2 className={styles.promo__title}>Твой промокод</h2>
                <p className={styles.promo__description}>
                    Скидка на все курсы Яндекс Практикума для пользователей
                    нашего сайта!
                </p>
                <button
                    className={`button ${styles.promo__button}`}
                    onClick={handleButtonClick}
                >
                    {codeIsVisible ? (
                        <span className="promo-code">WEBTEENS10</span>
                    ) : (
                        "Получить код"
                    )}
                </button>
            </div>
            <img
                src="/images/promo-illustration.svg"
                alt="Собака"
                className={styles.promo__image}
            />
        </section>
    );
};

export default Promo;
