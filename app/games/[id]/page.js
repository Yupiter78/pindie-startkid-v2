"use client";
import React, { useEffect, useState } from "react";
import { useStore } from "@/app/store/app-store";

import PropTypes from "prop-types";
import Styles from "./Game.module.css";
import NotFound from "@/app/components/NotFound/NotFound";
import { endpoints } from "@/app/api/config";
import {
    checkIfUserVoted,
    getNormalizedGameDataById,
    isResponseOk,
    vote
} from "@/app/api/api-utils";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function GamePage(props) {
    const { isAuth, user, token } = useStore();
    const [game, setGame] = useState(null);
    const [preloaderVisible, setPreloaderVisible] = useState(true);
    const [isVoted, setIsVoted] = useState(false);
    const { params } = props;
    const { id } = params;

    useEffect(() => {
        async function fetchData() {
            const game = await getNormalizedGameDataById(endpoints.games, id);
            isResponseOk(game) ? setGame(game) : setGame(null);
            setPreloaderVisible(false);
        }

        fetchData();
    }, []);

    useEffect(() => {
        user && !(user instanceof Error) && game
            ? setIsVoted(checkIfUserVoted(game, user.id))
            : setIsVoted(false);
    }, [user, game]);

    const handleVote = async () => {
        const jwt = token;
        const usersIdArray = game.users.length
            ? game.users.map(({ id }) => id)
            : [];
        usersIdArray.push(user.id);
        const response = await vote(
            `${endpoints.games}/${game.id}`,
            jwt,
            usersIdArray
        );
        if (isResponseOk(response)) {
            setIsVoted(true);
            setGame(() => {
                return {
                    ...game,
                    users: [...game.users, user]
                };
            });
        }
    };
    return game ? (
        <main className="main">
            <section className={Styles.game}>
                <iframe
                    className={Styles.game__iframe}
                    src={game.link}
                ></iframe>
            </section>
            <section className={Styles.about}>
                <h2 className={Styles.about__title}>{game.title}</h2>
                <div className={Styles.about__content}>
                    <p className={Styles.about__description}>
                        {game.description}
                    </p>
                    <div className={Styles.about__author}>
                        <p>
                            Автор:
                            <span className={Styles.about__accent}>
                                {game.developer}
                            </span>
                        </p>
                    </div>
                </div>
                <div className={Styles.about__vote}>
                    <p className={Styles["about__vote-amount"]}>
                        За игру уже проголосовали:
                        <span className={Styles.about__accent}>
                            {game.users.length}
                        </span>
                    </p>
                    <button
                        disabled={!isAuth || isVoted}
                        className={`button ${Styles["about__vote-button"]}`}
                        onClick={handleVote}
                    >
                        {isVoted ? "Голос учтён" : "Голосовать"}
                    </button>
                </div>
            </section>
        </main>
    ) : preloaderVisible ? (
        <Preloader />
    ) : (
        <NotFound />
    );
}

GamePage.propTypes = {
    params: PropTypes.object
};
