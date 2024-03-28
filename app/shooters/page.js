import React from "react";

import { getGamesByCategory } from "@/app/data/data-utils";
import CardsList from "@/app/components/CardList/CardsList";

export default function Shooters() {
    const shooters = getGamesByCategory("shooter");
    return (
        <main className="main">
            <CardsList id="shooters" title="Шутеры" data={shooters} />
        </main>
    );
}
