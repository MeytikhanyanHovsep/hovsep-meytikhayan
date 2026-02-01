import React from "react";
import Title from "../title";
import Item from "./item";

type Props = { lang: boolean };

export default function Projects({ lang }: Props) {
    const projects = [
        {
            img: "/work.png",
            link: "#",
            name: "Website",
        },
        {
            img: "/work.png",
            link: "#",
            name: "Website",
        },
        {
            img: "/work.png",
            link: "#",
            name: "Website",
        },
    ];

    return (
        <section className="relative pt-30">
            <div
                className="absolute top-1/2 left-[200px] -translate-x-1/2 -translate-y-1/2 
             w-[50px] h-[100px] 
             bg-linear-to-r from-primary/70 to-transparent 
             blur-[20px] scale-[10] 
             -z-1 opacity-60 pointer-events-none will-change-transform"
            ></div>
            <div className="container">
                <Title dir="center" index={2}>
                    {lang ? "Projects" : "Проекты"}
                </Title>

                <div className="grid w-full gap-[30px] grid-cols-3">
                    {projects.map((e, i) => (
                        <Item key={i} {...e} />
                    ))}
                </div>
            </div>
        </section>
    );
}
