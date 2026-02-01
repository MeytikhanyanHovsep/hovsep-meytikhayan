"use client";
import React, { useState } from "react";
import Header from "./header";
import Main from "./main";
import About from "./about";
import Services from "./services";
import Projects from "./projects";

type Props = { children: React.ReactNode };

export default function Components({ children }: Props) {
    const [lang, setLang] = useState<string>("ru");

    return (
        <>
            <Header
                lang={lang == "eng"}
                changeLang={() =>
                    setLang((e: string) => (e == "ru" ? "eng" : "ru"))
                }
            />
            <Main lang={lang == "eng"} />
            <About lang={lang == "eng"} />
            <Projects lang={lang == "eng"} />
            <Services lang={lang == "eng"} />
        </>
    );
}
