import React from "react";

import CardsList from "@/app/components/CardList/CardsList";
import { getNormalizedGamesDataByCategory } from "@/app/api/api-utils";
import { endpoints } from "@/app/api/config";

export default async function Popular() {
    const popularGames = await getNormalizedGamesDataByCategory(endpoints.games, "popular");
    return (
        <main className="main">
            <CardsList id="popular" title="Популярное" data={popularGames}/>
        </main>
    );
}
