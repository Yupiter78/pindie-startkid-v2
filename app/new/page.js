"use client";

import React from "react";
import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { Preloader } from "@/app/components/Preloader/Preloader";
import { CardsListSection } from "@/app/components/CardsListSection/CardsListSection";

export default function New() {
    const newGames = useGetDataByCategory(endpoints.games, "new");
    return (
        <main className="main-inner">
            {newGames ? (
                <CardsListSection id="new" title="Новые" data={newGames} />
            ) : (
                <Preloader />
            )}
        </main>
    );
}
