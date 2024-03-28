import React from "react";
import Banner from "@/app/components/Banner/Banner";
import Promo from "@/app/components/Promo/Promo";

import { getGamesByCategory } from "@/app/data/data-utils";
import CardsList from "@/app/components/CardList/CardsList";

export default function Home() {
    const popularGames = getGamesByCategory("popular");
    const newGames = getGamesByCategory("new");
    return (
        <main className="main">
            <Banner />
            <CardsList id="popular" title="Популярное" data={popularGames} />
            <CardsList id="new" title="Новинки" data={newGames} />
            <Promo />
        </main>
    );
}
