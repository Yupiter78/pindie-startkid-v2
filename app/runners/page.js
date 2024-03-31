"use client";

import React from "react";
import CardsList from "@/app/components/CardList/CardsList";
import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function Runners() {
    const runners = useGetDataByCategory(endpoints.games, "runner");
    return (
        <main className="main-inner">
            {runners ? (
                <CardsList id="runners" title="Раннеры" data={runners} />
            ) : (
                <Preloader />
            )}
        </main>
    );
}
