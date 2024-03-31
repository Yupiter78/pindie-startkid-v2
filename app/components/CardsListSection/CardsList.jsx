"use client";
import React from "react";
import Styles from "./CardsListSection.module.css";
import Card from "@/app/components/Card/Card";
import PropTypes from "prop-types";
import Link from "next/link";

const CardsList = ({ data }) => {
    return (
        <ul className={Styles["cards-list"]}>
            {data.map((item) => {
                return (
                    <li className={Styles["cards-list__item"]} key={item.id}>
                        <Link
                            href={`/games/${item.id}`}
                            className={Styles["card-list__link"]}
                        >
                            <Card {...item} />
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

CardsList.propTypes = {
    data: PropTypes.array
};

export default CardsList;
