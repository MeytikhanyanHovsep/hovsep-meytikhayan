"use client";
import Link from "next/link";
import React, { useState } from "react";
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
};

const navigation: any = {
    main: "Главная",
    about: "Кто я",
    projects: "Проекты",
    services: "Услуги",
    reviews: "Отзывы",
    contacts: "Контакты",
};

const iconStyles = "w-[20px] h-[20px] mb-[3px]";

export default function Header({ lang, changeLang }: Props) {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState<number>(0);

    useMotionValueEvent(scrollY, "change", (latest: number) => {
        setIsScrolled(latest);
    });
    const icons = [
        <House className={iconStyles} />,
        <UserRound className={iconStyles} />,
        <Layers className={iconStyles} />,
        <Settings className={iconStyles} />,
        <Star className={iconStyles} />,
        <Phone className={iconStyles} />,
    ];

    return (
        <motion.header className="container  z-200 fixed top-0 py-4 left-1/2 -translate-x-1/2">
            <div className=" px-5 relative flex z-20 justify-between bg-dark/50 rounded-full gap-[30px] py-[10px] items-center backdrop-blur-md ">
                <Link
                    href="/"
                    className="nunito flex items-center w-[90px] capitalize"
                >
                    <Image
                        src="/images/icons/logo.svg"
                        className="object-contain"
                        width={100}
                        height={50}
                        alt="Hovsep"
                    />
                </Link>
                <nav className="relative">
                    <ul className="flex justify-between gap-[30px] items-center">
                        {Object.keys(navigation).map((e: string, i: number) => (
                            <li key={i}>
                                <Link
                                    href="#"
                                    className={`flex capitalize primary-hover transition-colos duration-300 max-2xl:text-[14px] hover:text-primary cursor-pointer items-center gap-[5px] ${
                                        i == 0 ? "primary" : ""
                                    }`}
                                >
                                    {icons[i] || null}
                                    {lang ? e : navigation[e]}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex gap-[20px] text transiton-colors duration-300 items-center">
                    <a href="#">
                        <Github className="max-2xl:w-[22px] cursor-pointer hover:text-secondary transition-colors duration-300 h-[25px] " />
                    </a>

                    <a href="https://t.me/Meytikhanyan_Hovsep">
                        <Send className="max-2xl:w-[22px] cursor-pointer hover:text-secondary transition-colors duration-300 h-[25px] " />
                    </a>
                    <Globe
                        onClick={changeLang}
                        className="max-2xl:w-[22px] cursor-pointer hover:text-secondary transition-colors duration-300 h-[25px] "
                    />
                </div>
            </div>
        </motion.header>
    );
}
