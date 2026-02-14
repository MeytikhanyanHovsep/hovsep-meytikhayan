"use client";
import React from "react";
import Title from "../title";
import Item from "./item";
import { TProject } from "@/types";

type Props = { lang: boolean };

export default function Projects({ lang }: Props) {
    const projects: TProject[] = [
        { url: "https://apexhash.ru/", img: "apexhash.webp" },
        { url: "https://geographicawe.vercel.app/", img: "geographic.webp" },
        { url: "https://berikod.ru/", img: "berikodru.webp" },
        { url: "https://andreybolonin.com/", img: "andrey.webp" },
        { url: "https://puti-nn.ru/", img: "putinn.webp" },
        { url: "https://thejobgate.com/", img: "jobgate.webp" },
        {
            url: "https://hovsep-meytikhanyan.vercel.app/",
            img: "restaurant.webp",
        },
    ];

    return (
        <section
            id="projects"
            className="relative pt-30 max-md:pt-10 max-2xl:pt-20"
        >
            <div
                className="absolute top-1/2 left-[200px] -translate-x-1/2 -translate-y-1/2 
              w-[3%] h-[100px] 
              bg-linear-to-r from-primary/70 to-transparent 
              blur-[20px] scale-[10] 
              -z-1 opacity-60 pointer-events-none will-change-transform"
            />

            <div className="container">
                <Title dir="center" index={2}>
                    {lang ? "Projects" : "Проекты"}
                </Title>

                <div className="grid max-2xl:gap-4 w-full max-md:gap-2 gap-6 max-md:grid-cols-2 grid-cols-3">
                    {projects.map((proj: TProject, ind) => (
                        <Item key={ind} {...proj} />
                    ))}
                </div>
            </div>
        </section>
    );
}
