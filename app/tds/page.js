import React from "react";

import CardsList from "@/app/components/CardList/CardsList";
import { getNormalizedGamesDataByCategory } from "@/app/api/api-utils";
import { endpoints } from "@/app/api/config";

export default async function Tds() {
    const tds = await getNormalizedGamesDataByCategory(endpoints.games, "TDS");
    return (
        <main className="main">
            <CardsList id="TDS" title="TDS" data={tds} />
        </main>
    );
}
