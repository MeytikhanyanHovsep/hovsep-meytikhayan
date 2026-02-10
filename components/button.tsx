"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

type Props = {
    filled?: boolean;
    children: string;
    section: string;
    styles?: string;
};

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const Button = ({ children, filled = false, section, styles = "" }: Props) => {
    const intervalRef = useRef<any>(null);

    const [text, setText] = useState(children);

    useEffect(() => {
        setText(children);
    }, [children]);

    const scramble = () => {
        let pos = 0;
        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            const scrambled = children
                .split("")
                .map((char, index) => {
                    if (pos / CYCLES_PER_LETTER > index) return char;
                    const randomCharIndex = Math.floor(
                        Math.random() * CHARS.length,
                    );
                    return CHARS[randomCharIndex];
                })
                .join("");

            setText(scrambled);
            pos++;

            if (pos >= children.length * CYCLES_PER_LETTER) stopScramble();
        }, SHUFFLE_TIME);
    };

    const stopScramble = () => {
        clearInterval(intervalRef.current);
        setText(children);
    };

    const handleScroll = (): null => {
        const element = document.getElementById(section);
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
        <motion.button
            onClick={handleScroll}
            whileTap={{ scale: 0.975 }}
            onMouseEnter={scramble}
            onMouseLeave={stopScramble}
            className={`group relative max-md:mx-auto overflow-hidden  rounded-[30px] max-2xl:py-[13px] py-[15px] max-md:px-[15px] max-md:py-[13px] px-[30px]   cursor-pointer  transition-all duration-300 max-2xl:text-[14px] max-md:text-[12px]  ${filled ? "text-black border-primary shadow-primary/40 bg-linear-to-r to-secondary via-primary from-primary" : "text-white border-3 border-white/20 bg-transparent"} ${children.length < 16 ? "min-w-[200px] max-2xl:min-w-[160px] max-md:min-w-[140px] max-w-max" : "min-w-[250px] max-w-max max-md:min-w-[160px] max-2xl:min-w-[220px]"} ${styles}`}
        >
            <motion.div className="flex mx-auto items-center w-min">
                <div className="relative font-bold z-10 flex w-min items-center">
                    <span className="invisible  overflow-hidden whitespace-nowrap">
                        {children}
                    </span>

                    <span className="absolute left-0 whitespace-nowrap">
                        {text}
                    </span>
                </div>

                <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 1,
                        ease: "linear",
                    }}
                    className={`duration-300 absolute inset-0 z-0 scale-125 opacity-0 
                transition-opacity group-hover:opacity-100 bg-linear-to-t  from-transparent  to-transparent hidden group-hover:block ${filled ? "via-black/40" : "via-white/20"}`}
                />
            </motion.div>
        </motion.button>
    );
};

export default Button;
