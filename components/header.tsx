"use client";
import Link from "next/link";
import React, { useEffect, useState, ReactNode, memo } from "react";
import Image from "next/image";

import {
    House,
    UserRound,
    Settings,
    Layers,
    Github,
    Send,
    Star,
    Globe,
    Phone,
} from "lucide-react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

type Props = {
    lang: boolean;
    changeLang: any;
    activeSection: string;
};

const navigation: any = {
    main: "Главная",
    about: "Кто я",
    projects: "Проекты",
    services: "Услуги",
    reviews: "Отзывы",
    contacts: "Контакты",
};

const iconStyles =
    "w-[20px] max-2xl:h-[16px] max-2xl:mt-[2px] max-2xl:w-[16px] h-[20px] mb-[3px]";

const Header = memo(function Header({
    lang,
    changeLang,
    activeSection,
}: Props) {
    const icons: ReactNode[] = [
        <House className={iconStyles} />,
        <UserRound className={iconStyles} />,
        <Layers className={iconStyles} />,
        <Settings className={iconStyles} />,
        <Star className={iconStyles} />,
        <Phone className={iconStyles} />,
    ];

    const handleScroll = (id: string): null => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

            window.history.pushState(null, "", window.location.pathname);
        }
        return null;
    };

    return (
        <motion.header className="container  z-200 fixed top-0 max-2xl:py-2 py-4 left-1/2 -translate-x-1/2">
            <div className=" px-10 relative flex z-20 justify-between max-2xl:px-6 bg-linear-to-t to-black/30 from-white/5 rounded-full gap-[30px] max-2xl:py-[10px] py-[13px] items-center backdrop-blur-lg ">
                <Link href="/" className="nunito flex items-center capitalize">
                    <Image
                        src="/images/icons/logo.svg"
                        className="object-contain max-2xl:max-w-[43px] max-w-[60px]"
                        width={100}
                        height={50}
                        alt="Hovsep"
                    />
                </Link>
                <nav className="relative ">
                    <ul className="flex max-lg:hidden justify-between items-center">
                        {Object.keys(navigation).map((e: string, i: number) => (
                            <li key={i}>
                                <button
                                    onClick={() => handleScroll(e)}
                                    className={`flex capitalize primary-hover transition-colors duration-300 ease-in-out px-[15px] py-2 max-2xl:py-[6px] rounded-full max-2xl:text-[14px] hover:text-primary max-2xl:px-[10px]  bg-linear-to-b cursor-pointer items-center gap-[5px] ${
                                        i == 0 ? "primary" : ""
                                    } ${
                                        activeSection == e
                                            ? "text-primary from-primary/7 via-primary/10 shadow-md shadow-white/3 to-dark/7"
                                            : "text-white "
                                    }`}
                                >
                                    {icons[i] || null}
                                    {lang ? e : navigation[e]}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex max-2xl:gap-[15px] gap-[20px] text transiton-colors duration-300 items-center">
                    <a href="https://github.com/MeytikhanyanHovsep">
                        <Github className="max-2xl:w-[18px] cursor-pointer hover:text-secondary transition-colors duration-300 h-[25px] " />
                    </a>

                    <a href="https://t.me/Meytikhanyan_Hovsep">
                        <Send className="max-2xl:w-[18px] cursor-pointer hover:text-secondary transition-colors duration-300 h-[25px] " />
                    </a>
                    <Globe
                        onClick={changeLang}
                        className="max-2xl:w-[18px] cursor-pointer hover:text-secondary transition-colors duration-300 h-[25px] "
                    />
                </div>
            </div>
        </motion.header>
    );
});
export default Header;
