"use client";

import React from "react";
import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { Preloader } from "@/app/components/Preloader/Preloader";
import { CardsListSection } from "@/app/components/CardsListSection/CardsListSection";

export default function Shooters() {
    const shooters = useGetDataByCategory(endpoints.games, "shooter");
    return (
        <main className="main-inner">
            {shooters ? (
                <CardsListSection
                    id="shooters"
                    title="Шутеры"
                    data={shooters}
                />
            ) : (
                <Preloader />
            )}
        </main>
    );
}
