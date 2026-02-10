"use client";
import React, { useState, memo } from "react";
import HeroTypewriter from "./heroTypewriter";
import Button from "../button";
import FloatingLines from "./bg";

type Props = { lang: boolean };

const Main = memo(function Main({ lang }: Props) {
    const [text, setText] = useState<string>("View services");

    return (
        <>
            <main
                id="main"
                className="h-screen grid place-items-center relative w-full "
            >
                <FloatingLines
                    linesGradient={["#7effdc", "#36ff9a", "#7effdc"]}
                    enabledWaves={["top", "middle", "bottom"]}
                    lineCount={3}
                    lineDistance={30}
                    bendRadius={100}
                    bendStrength={-0.5}
                    interactive={true}
                    parallax={true}
                />
                <div className="container">
                    <div className="h-full max-w-[900px]  text-balance items-center flex gap-3 flex-col justify-center z-50 relative ">
                        <div className="text-[25px] max-md:text-[18px] max-2xl:text-[20px] flex items-center mb-[-10px]">
                            {lang ? "I am" : "Я"}
                            <span className="invisible">{"-"}</span>
                            <HeroTypewriter
                                words={
                                    lang
                                        ? [
                                              "Hovsep Meytikhanyan",
                                              "FrontEnd-Engineer",
                                              "UI-Architect",
                                          ]
                                        : [
                                              "Овсеп Мейтиханян",
                                              "Фронтенд-Инженер",
                                              "Архитектор-Интерфейсов",
                                          ]
                                }
                            />
                        </div>
                        <h2 className="font-black max-md:text-[25px] max-2xl:text-[43px] text-white text-center leading-tight mb-2 text-[50px] block">
                            {lang
                                ? "Developing digital solutions to scale your business to the next level."
                                : "Создаю цифровые продукты, которые масштабируют ваш бизнес"}
                        </h2>
                        <p className="text-white/90 max-2xl:text-[14px] max-md:text-[12px] text-center max-w-[700px] text-balance leading-relaxed  mb-10 max-2xl:mb-5 mt-[-10px]">
                            {lang
                                ? "From architecture to launch: I build intuitive web applications with a focus on performance and user experience."
                                : "От архитектуры до запуска: создаю интуитивно понятные веб-приложения с упором на производительность и пользовательский опыт."}
                        </p>
                        <div className="flex max-md:gap-3  gap-5">
                            <Button section="form" filled={true}>
                                {lang ? "Contact me" : "Связываться со мной"}
                            </Button>
                            <Button section="services">
                                {lang ? "Explore services" : "Изучить услуги"}
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
});
export default Main;
