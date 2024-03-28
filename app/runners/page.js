import React from "react";

import CardsList from "@/app/components/CardList/CardsList";
import { getNormalizedGamesDataByCategory } from "@/app/api/api-utils";
import { endpoints } from "@/app/api/config";

export default async function Runners() {
    const runners = await getNormalizedGamesDataByCategory(endpoints.games, "runner");
    return (
        <main className="main">
            <CardsList id="runners" title="Раннеры" data={runners} />
        </main>
    );
}
