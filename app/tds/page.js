"use client";

import React from "react";
import CardsList from "@/app/components/CardList/CardsList";
import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function Tds() {
    const tds = useGetDataByCategory(endpoints.games, "new");
    return (
        <main className="main-inner">
            {tds ? (
                <CardsList id="TDS" title="TDS" data={tds} />
            ) : (
                <Preloader />
            )}
        </main>
    );
}
