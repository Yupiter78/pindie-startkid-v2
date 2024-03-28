import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.banner__description}>
                <h1 className={styles.banner__title}>
                    Портал инди-игр от&nbsp;студентов Яндекс Практикума
                </h1>
                <div className={styles["banner__text-block"]}>
                    <p className={styles.banner__text}>
                        Студенты курсов разрабатывают свои игры на Unity, здесь
                        мы их публикуем. Вы можете играть прямо на сайте. А если
                        у вас есть аккаунт пользователя — получаете возможность
                        голосовать за игры.
                    </p>
                </div>
                <a href="#popular" className={`button ${styles.banner__link}`}>
                    Смотреть игры
                </a>
            </div>
            <img
                src="/images/banner-illustration.jpg"
                alt="Рука, утопленная в желтом фоне"
                className={styles.banner__image}
            />
        </section>
    );
};

export default Banner;
