import React from "react";
import Title from "../title";
import Item from "./item";
import { memo } from "react";

type Props = { lang: boolean };

const Projects = memo(function Projects({ lang }: Props) {
    const projects = [
        {
            img: "/work.png",
            link: "#",
            likes: 20,
            isLiked: false,
        },
        {
            img: "/work.png",
            link: "#",
            likes: 20,
            isLiked: true,
        },
        {
            img: "/work.png",
            link: "#",
            likes: 20,
            isLiked: false,
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

                <div className="grid max-2xl:gap-4 w-full  max-md:gap-2 gap-6 max-md:grid-cols-2 grid-cols-3">
                    {projects.map((e, i) => (
                        <Item key={i} {...e} lang={lang} />
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Projects;
