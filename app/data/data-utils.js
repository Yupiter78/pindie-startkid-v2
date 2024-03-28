import { data } from "./data";

export const getGamesByCategory = (category) => {
    return data.filter((game) =>
        game.category.find(({ name }) => name === category)
    );
};

export const getGameById = (gameId) =>
    data.find((game) => game.id === Number(gameId));
