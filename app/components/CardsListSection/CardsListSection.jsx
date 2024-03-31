import React from "react";
import Styles from "./CardsListSection.module.css";
import CardsList from "./CardsList";
import { CardsSlider } from "./CardsSlider";
import PropTypes from "prop-types";

export const CardsListSection = ({ title, id, type, data }) => {
    return (
        <section className={Styles["list-section"]}>
            <h2 className={Styles["list-section__title"]} id={id}>
                {title}
            </h2>
            {type === "slider" ? (
                <CardsSlider data={data} />
            ) : (
                <CardsList data={data} />
            )}
        </section>
    );
};

CardsListSection.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    data: PropTypes.array
};
