import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ThumbsUp } from "lucide-react";

type Props = {
    img: string;
    link: string;
    likes: number;
    isLiked: boolean;
    lang: boolean;
};

export default function Item({ img, link, likes, isLiked, lang }: Props) {
    return (
        <div
            style={{ perspective: 1000 }}
            className="rounded-[20px]  shadow-2xl shadow-secondary/10 pb-4 flex flex-col gap-4 overflow-hidden"
        >
            <a
                target="_blank"
                href={link}
                className="w-full group relative ab max-h-[300px] overflow-hidden"
            >
                <Image
                    src={img}
                    className="w-full object-cover full transtion-transform duration-300 will-change-transform group-hover:scale-[1.03]"
                    width={400}
                    height={300}
                    alt="Preview"
                />
                <span className=" absolute group-hover:opacity-100 transition-all duration-300 opacity-0 -right-2 top-4  group-hover:right-4 z-100">
                    <ArrowUpRight className="w-10 h-10  p-1  object-contain color white bg-white/30 border border-white rounded-full" />
                </span>
            </a>
            <div className="flex justify-between items-center px-4">
                <button className="border-2 hover:scale-105 will-change-transform transition-transform duration-300 border-white/40 flex items-center gap-1 px-5 py-2 rounded-full text-white cursor-pointer">
                    <span className="mt-px">Demo </span>
                    <ArrowUpRight className="w-5 h-5   object-contain color text-white " />
                </button>
                <div className="flex items-center gap-2">
                    <ThumbsUp
                        className={
                            (isLiked ? " text-primary/70 " : "text-white/80 ") +
                            "w-[30px] h-[30px] hover:scale-110 will-change-transform transition-transform duration-300 cursor-pointer"
                        }
                    />
                    <span className="text-[20px] mt-1">{likes}</span>
                </div>
            </div>
        </div>
    );
}
