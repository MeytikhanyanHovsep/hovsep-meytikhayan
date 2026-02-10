import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ThumbsUp } from "lucide-react";
import { memo } from "react";

type Props = {
    img: string;
    link: string;
    likes: number;
    isLiked: boolean;
    lang: boolean;
};
const Item = memo(function Item({ img, link, likes, isLiked, lang }: Props) {
    return (
        <div
            style={{ perspective: 1000 }}
            className="rounded-[20px] max-md:rounded-[16px] shadow-2xl shadow-secondary/10 flex flex-col gap-4 overflow-hidden "
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
                    <ArrowUpRight className="w-10 max-2xl:h-9 max-2xl:w-9 h-10  p-1  object-contain color white bg-white/30 border border-white rounded-full" />
                </span>
            </a>

            <div className=" bg-dark rounded-tl-[10px] absolute right-0 bottom-0 ">
                <div className="flex items-center max-md:gap-1 relative max-2xl:px-4 max-md:px-3 max-md:py-1  px-5 gap-2 py-2">
                    <ThumbsUp
                        className={
                            (isLiked ? " text-primary/70 " : "text-white/80 ") +
                            "w-[30px] max-md:w-[20px] h-[30px] max-2xl:w-[25px] hover:scale-110 will-change-transform transition-transform duration-300 cursor-pointer"
                        }
                    />
                    <span className="text-[20px] max-md:text-[16px] max-md:mt-[2px] max-2xl:text-[18px] md:mt-1">
                        {likes}
                    </span>
                </div>
            </div>
        </div>
    );
});

export default Item;
