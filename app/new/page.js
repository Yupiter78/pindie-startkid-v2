import React from "react";

import { getGamesByCategory } from "@/app/data/data-utils";
import CardsList from "@/app/components/CardList/CardsList";

export default function New() {
    const newGames = getGamesByCategory("new");
    return (
        <main className="main-inner">
            <CardsList id="new" title="Новинки" data={newGames} />
        </main>
    );
}
