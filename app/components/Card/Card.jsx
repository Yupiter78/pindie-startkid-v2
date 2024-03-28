import React from "react";
import styles from "./Card.module.css";
import PropTypes from "prop-types";

const Card = ({ image, title, description, developer, users }) => {
    return (
        <article className={styles.card}>
            <img src={image} alt="" className={styles.card__image} />
            <div className={styles["card__content-block"]}>
                <h3 className={styles.card__title}>{title}</h3>
                <p className={styles.card__description}>{description}</p>
                <div className={styles["card__info-container"]}>
                    <p className={styles.card__author}>
                        Автор:{" "}
                        <span className={styles.card__accent}>{developer}</span>
                    </p>
                    <p className={styles.card__votes}>
                        Голосов на сайте:{" "}
                        <span className={styles.card__accent}>
                            {users.length}
                        </span>
                    </p>
                </div>
            </div>
        </article>
    );
};
Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    developer: PropTypes.string,
    users: PropTypes.array
};

export default Card;
