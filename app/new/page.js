import React from "react";

import CardsList from "@/app/components/CardList/CardsList";
import { getNormalizedGamesDataByCategory } from "@/app/api/api-utils";
import { endpoints } from "@/app/api/config";

export default async function New() {
    const newGames = await getNormalizedGamesDataByCategory(endpoints.games, "new");
    return (
        <main className="main-inner">
            <CardsList id="new" title="Новинки" data={newGames} />
        </main>
    );
}
