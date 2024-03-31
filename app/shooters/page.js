"use client";

import React from "react";
import CardsList from "@/app/components/CardList/CardsList";
import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function Shooters() {
    const shooters = useGetDataByCategory(endpoints.games, "shooter");
    return (
        <main className="main-inner">
            {shooters ? (
                <CardsList id="shooters" title="Шутеры" data={shooters} />
            ) : (
                <Preloader />
            )}
        </main>
    );
}
