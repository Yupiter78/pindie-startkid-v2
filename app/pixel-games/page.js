import React from "react";

import CardsList from "@/app/components/CardList/CardsList";
import { getNormalizedGamesDataByCategory } from "@/app/api/api-utils";
import { endpoints } from "@/app/api/config";

export default async function PixelGames() {
    const pixelGames = await getNormalizedGamesDataByCategory(endpoints.games, "pixel");
    return (
        <main className="main-inner">
            <CardsList id="pixel" title="Пиксельные игры" data={pixelGames} />
        </main>
    );
}
