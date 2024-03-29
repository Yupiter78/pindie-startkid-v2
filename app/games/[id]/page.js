"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import Styles from "./Game.module.css";
import NotFound from "@/app/components/NotFound/NotFound";
import { endpoints } from "@/app/api/config";
import {
    getJWT,
    getMe,
    getNormalizedGameDataById,
    isResponseOk,
    removeJWT
} from "@/app/api/api-utils";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function GamePage(props) {
    const [game, setGame] = useState(null);
    const [preloaderVisible, setPreloaderVisible] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const { params } = props;
    const { id } = params;
    const history = useRouter();
    useEffect(() => {
        async function fetchData() {
            const game = await getNormalizedGameDataById(endpoints.games, id);
            isResponseOk(game) ? setGame(game) : setGame(null);
            setPreloaderVisible(false);
        }

        fetchData();
    }, []);

    useEffect(() => {
        const jwt = getJWT();
        if (jwt) {
            getMe(endpoints.me, jwt).then((userData) => {
                if (isResponseOk(userData)) {
                    setIsAuthorized(true);
                    setCurrentUser(userData);
                } else {
                    setIsAuthorized(false);
                    removeJWT();
                }
            });
        }
    }, []);
    const handleAddVoice = () => {
        history.replace("/login");
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
                        className={`button ${Styles["about__vote-button"]}`}
                        disabled={!isAuthorized}
                    >
                        Голосовать
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
