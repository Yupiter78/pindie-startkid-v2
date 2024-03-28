import React from "react";
import Banner from "@/app/components/Banner/Banner";
import Promo from "@/app/components/Promo/Promo";

import CardsList from "@/app/components/CardList/CardsList";
import { getNormalizedGamesDataByCategory } from "@/app/api/api-utils";
import { endpoints } from "@/app/api/config";

export default async function Home() {
    const popularGames = await getNormalizedGamesDataByCategory(endpoints.games, "popular");
    const newGames = await getNormalizedGamesDataByCategory(endpoints.games, "new");
    return (
        <main className="main">
            <Banner />
            <CardsList id="popular" title="Популярное" data={popularGames} />
            <CardsList id="new" title="Новинки" data={newGames} />
            <Promo />
        </main>
    );
}
