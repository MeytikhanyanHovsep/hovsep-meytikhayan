"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { CircleArrowUpRightIcon } from "@hugeicons/core-free-icons";
import { memo } from "react";

type Props = {
    img: string;
    url: string;
};
const Item = memo(function Item({ img, url }: Props) {
    return (
        <div className="rounded-[20px] h-max max-md:rounded-[16px] shadow-2xl shadow-secondary/10 flex flex-col gap-4 overflow-hidden ">
            <a
                target="_blank"
                href={url}
                className="w-full group relative h-max overflow-hidden"
            >
                <Image
                    src={`/images/projects/${img}`}
                    className="w-full object-cover full transtion-transform duration-300 will-change-transform group-hover:scale-[1.03]"
                    width={400}
                    height={300}
                    alt="Preview"
                />
                <span className=" ">
                    <HugeiconsIcon
                        icon={CircleArrowUpRightIcon}
                        className="absolute group-hover:opacity-100 transition-all duration-300 opacity-0 -right-2 top-4 text-white group-hover:right-4 z-20 w-10 max-2xl:h-9 max-2xl:w-9 h-10  rounded-full"
                    />
                </span>
            </a>
        </div>
    );
});

export default Item;
