import React from "react";

import { getGamesByCategory } from "@/app/data/data-utils";
import CardsList from "@/app/components/CardList/CardsList";

export default function Tds() {
    const tds = getGamesByCategory("TDS");
    return (
        <main className="main">
            <CardsList id="TDS" title="TDS" data={tds} />
        </main>
    );
}
