import React from "react";

import { getGamesByCategory } from "@/app/data/data-utils";
import CardsList from "@/app/components/CardList/CardsList";

export default function Popular() {
    const popularGames = getGamesByCategory("popular");
    return (
        <main className="main">
            <CardsList id="popular" title="Популярное" data={popularGames} />
        </main>
    );
}
