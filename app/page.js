import React from "react";
import Banner from "@/app/components/Banner/Banner";
import Promo from "@/app/components/Promo/Promo";

import { getNormalizedGamesDataByCategory } from "@/app/api/api-utils";
import { endpoints } from "@/app/api/config";
import { CardsListSection } from "@/app/components/CardsListSection/CardsListSection";

export default async function Home() {
    const popularGames = await getNormalizedGamesDataByCategory(
        endpoints.games,
        "popular"
    );
    const newGames = await getNormalizedGamesDataByCategory(
        endpoints.games,
        "new"
    );
    return (
        <main className="main">
            <Banner />
            <CardsListSection
                type="slider"
                id="popular"
                title="Популярное"
                data={popularGames}
            />
            <CardsListSection
                type="slider"
                id="new"
                title="Новинки"
                data={newGames}
            />
            <Promo />
        </main>
    );
}
