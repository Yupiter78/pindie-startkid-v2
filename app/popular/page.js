"use client";

import React from "react";
import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { Preloader } from "@/app/components/Preloader/Preloader";
import { CardsListSection } from "@/app/components/CardsListSection/CardsListSection";

export default function Popular() {
    const popularGames = useGetDataByCategory(endpoints.games, "popular");
    return (
        <main className="main-inner">
            {popularGames ? (
                <CardsListSection
                    id="popular"
                    title="Популярное"
                    data={popularGames}
                />
            ) : (
                <Preloader />
            )}
        </main>
    );
}
