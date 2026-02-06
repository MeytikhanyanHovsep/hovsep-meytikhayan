"use client";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroTypewriter({ words }: { words: string[] }) {
    const [index, setIndex] = useState(0);
    const count = useMotionValue(0);

    // Безопасное получение текста (добавляем проверку на существование слова)
    const displayText = useTransform(count, (latest) => {
        const word = words[index] || "";
        return word.slice(0, Math.round(latest));
    });

    // Эффект 1: Сброс при смене языка
    useEffect(() => {
        setIndex(0);
        count.set(0);
    }, [words]); // Как только пришел новый массив слов — прыгаем в начало

    // Эффект 2: Сама анимация
    useEffect(() => {
        if (!words[index]) return; // Защита от пустых данных

        const controls = animate(count, words[index].length, {
            type: "tween",
            duration: 1.5,
            ease: "easeInOut",
            onComplete: () => {
                // Ждем 2 секунды перед удалением
                setTimeout(() => {
                    animate(count, 0, {
                        type: "tween",
                        duration: 1,
                        ease: "easeInOut",
                        onComplete: () => {
                            // Переход к следующему слову
                            setIndex((prev) => (prev + 1) % words.length);
                        },
                    });
                }, 2000);
            },
        });

        return () => controls.stop();
    }, [index, words]); // Зависим от индекса и массива слов

    return (
        <div className="flex items-center gap-[3px] uppercase min-h-[1.2em]">
            <motion.span className="rubik whitespace-nowrap text-[27px] text-white drop-shadow-md drop-shadow-secondary">
                {displayText}
            </motion.span>

            <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="w-[3px] ml-[5px] h-[80%] rounded-[10px] bg-secondary/80"
            />
            <motion.span className="rubik  text-[30px] text-shadow-none! text-transparent">
                {"."}
            </motion.span>
        </div>
    );
}
