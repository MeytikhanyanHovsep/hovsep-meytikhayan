"use client";
import React, { useEffect, useRef, useState } from "react";
import HeroTypewriter from "./heroTypewriter";
import Globe from "./globe";
import Button from "../button";
import Image from "next/image";
import FloatingLines from "./bg";

type Props = { lang: boolean };

export default function Main({ lang }: Props) {
    const [text, setText] = useState<string>("View services");

    return (
        <>
            <main className="h-screen relative w-full ">
                <FloatingLines
                    linesGradient={["#26ffa5", "#26ffff", "#26ffa5"]}
                    enabledWaves={["top", "middle", "bottom"]}
                    lineCount={3}
                    lineDistance={30}
                    bendRadius={100}
                    bendStrength={-0.5}
                    interactive={true}
                    parallax={true}
                />

                <div className="container grid grid-cols-2 h-full">
                    <div className="h-full items-start flex gap-3 flex-col max-w-min justify-center z-50 relative ">
                        <div className="text-[25px] mb-[-10px]">
                            {lang ? "I am " : "Я "}

                            <h1 className=" inline text-primary  whitespace-nowrap">
                                {lang ? (
                                    <>Hovsep Meytikhanyan</>
                                ) : (
                                    <>Овсеп Мейтиханян</>
                                )}
                            </h1>
                        </div>
                        <p className="text-white text-[60px] whitespace-nowrap">
                            {lang ? "Web Developer" : "Веб Разработчик"}
                        </p>
                        <HeroTypewriter
                            words={
                                lang
                                    ? [
                                          "Creative-Developer",
                                          "FrontEnd-Engineer",
                                          "Problem-Solver",
                                      ]
                                    : [
                                          "Креативный-разработчик",
                                          "Фронтенд-инженер",
                                          "Мастер-решений",
                                      ]
                            }
                        />
                        <p className="text-gray my-[25px]">
                            {lang
                                ? "I develop websites and web applications with a focus on usability, speed, and clean code."
                                : "Занимаюсь разработкой сайтов и веб-приложений с упором на удобство, скорость и чистый код."}
                        </p>
                        <div className="flex gap-5">
                            <Button filled={true}>
                                {lang ? "Contact me" : "Связываться со мной"}
                            </Button>
                            <Button>
                                {lang ? "Explore services" : "Изучить услуги"}
                            </Button>
                            {/* <Button>{text }</Button> */}
                        </div>
                        {/* <input
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        /> */}
                    </div>

                    <div className="h-full  max-w-full justify-end relative flex items-center">
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] aspect-square bg-radial from-primary/20 to-transparent blur-[20px] scale-[4] 
                        pointer-events-none will-change-transform"
                        ></div>
                    </div>
                </div>
            </main>
        </>
    );
}
