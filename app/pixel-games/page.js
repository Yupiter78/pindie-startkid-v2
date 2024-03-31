"use client";

import React from "react";
import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { Preloader } from "@/app/components/Preloader/Preloader";
import { CardsListSection } from "@/app/components/CardsListSection/CardsListSection";

export default function PixelGames() {
    const pixelGames = useGetDataByCategory(endpoints.games, "pixel");
    return (
        <main className="main-inner">
            {pixelGames ? (
                <CardsListSection
                    id="pixel"
                    title="Пиксельные игры"
                    data={pixelGames}
                />
            ) : (
                <Preloader />
            )}
        </main>
    );
}
