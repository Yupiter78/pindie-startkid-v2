import React from "react";

import { getGamesByCategory } from "@/app/data/data-utils";
import CardsList from "@/app/components/CardList/CardsList";

export default function Runners() {
    const runners = getGamesByCategory("runner");
    return (
        <main className="main">
            <CardsList id="runners" title="Раннеры" data={runners} />
        </main>
    );
}
