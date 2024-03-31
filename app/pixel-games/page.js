"use client";

import React from "react";
import CardsList from "@/app/components/CardList/CardsList";
import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function PixelGames() {
    const pixelGames = useGetDataByCategory(endpoints.games, "pixel");
    return (
        <main className="main-inner">
            {pixelGames ? (
                <CardsList
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
