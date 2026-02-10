"use client";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState, memo } from "react";

const HeroTypewriter = memo(function HeroTypewriter({
    words,
}: {
    words: string[];
}) {
    const [index, setIndex] = useState(0);
    const count = useMotionValue(0);

    const displayText = useTransform(count, (latest) => {
        const word = words[index] || "";
        return word.slice(0, Math.round(latest));
    });

    useEffect(() => {
        setIndex(0);
        count.set(0);
    }, [words]);

    useEffect(() => {
        if (!words[index]) return;

        const controls = animate(count, words[index].length, {
            type: "tween",
            duration: 1.5,
            ease: "easeInOut",
            onComplete: () => {
                setTimeout(() => {
                    animate(count, 0, {
                        type: "tween",
                        duration: 1,
                        ease: "easeInOut",
                        onComplete: () => {
                            setIndex((prev) => (prev + 1) % words.length);
                        },
                    });
                }, 3000);
            },
        });

        return () => controls.stop();
    }, [index, words]);

    return (
        <div className="flex items-center max-w-min  text-primary  whitespace-nowrap min-h-[1.2em]">
            <motion.span className="grotesk whitespace-nowrap max-md:text-[18px] max-2xl:text-[22px] text-[27px] text-primary">
                {displayText}
            </motion.span>

            <motion.span className="text-[30px] w-0 invisible text-shadow-none! text-transparent">
                {"."}
            </motion.span>
        </div>
    );
});

export default HeroTypewriter;
