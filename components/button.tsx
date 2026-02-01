"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

type Props = {
    children: string;
};

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const Button = ({ children }: Props) => {
    const intervalRef = useRef<any>(null);

    // Инициализируем стейт входящим текстом
    const [text, setText] = useState(children);

    // СИНХРОНИЗАЦИЯ: Если пропс children изменился (например, смена языка),
    // мы немедленно обновляем отображаемый текст, не дожидаясь hover.
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

    return (
        <motion.button
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.975 }}
            onMouseEnter={scramble}
            onMouseLeave={stopScramble}
            className="group relative overflow-hidden rounded-[20px] py-[15px] px-[30px] border-2 cur-border border-primary text-primary cursor-pointer text-[20px] transition-all duration-300 flex items-center"
        >
            <div className="relative z-10 flex items-center">
                <span className="invisible overflow-hidden whitespace-nowrap">
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
                className="duration-300 absolute inset-0 z-0 scale-125 opacity-0 
                transition-opacity group-hover:opacity-100 bg-linear-to-t  from-transparent via-white/20 to-transparent"
            />
        </motion.button>
    );
};

export default Button;
