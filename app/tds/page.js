"use client";

import React from "react";
import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { Preloader } from "@/app/components/Preloader/Preloader";
import { CardsListSection } from "@/app/components/CardsListSection/CardsListSection";

export default function Tds() {
    const tds = useGetDataByCategory(endpoints.games, "new");
    return (
        <main className="main-inner">
            {tds ? (
                <CardsListSection id="TDS" title="TDS" data={tds} />
            ) : (
                <Preloader />
            )}
        </main>
    );
}
