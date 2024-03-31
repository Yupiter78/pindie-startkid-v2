"use client";

import React from "react";
import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { Preloader } from "@/app/components/Preloader/Preloader";
import { CardsListSection } from "@/app/components/CardsListSection/CardsListSection";

export default function Runners() {
    const runners = useGetDataByCategory(endpoints.games, "runner");
    return (
        <main className="main-inner">
            {runners ? (
                <CardsListSection id="runners" title="Раннеры" data={runners} />
            ) : (
                <Preloader />
            )}
        </main>
    );
}
