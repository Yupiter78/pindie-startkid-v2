import React from "react";

import CardsList from "@/app/components/CardList/CardsList";
import { getNormalizedGamesDataByCategory } from "@/app/api/api-utils";
import { endpoints } from "@/app/api/config";

export default async function Shooters() {
    const shooters = await getNormalizedGamesDataByCategory(endpoints.games, "shooter");
    return (
        <main className="main">
            <CardsList id="shooters" title="Шутеры" data={shooters} />
        </main>
    );
}
