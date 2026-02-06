import Image from "next/image";
import React from "react";
import { Star } from "lucide-react";

type Props = {
    name: string;
    type: string;
    desc: string;
    stars: number;
    img: string;
};

export default function Item({ desc, img, name, type, stars }: Props) {
    return (
        <div className=" z-10 h-full rounded-[16px] flex flex-col bg-linear-to-b from-dark/50 to-dark/80 backdrop-blur-md p-4 gap-6 cursor-grab">
            <p className="text-gray">{desc}</p>
            <div className="flex gap-3 items-center min-w-full">
                <Image
                    width={50}
                    height={50}
                    src={img}
                    className="rounded-full "
                    unoptimized
                    alt="User"
                />
                <div className="flex flex-col">
                    <p className="text-[20px] text-white">{name}</p>
                    <p className="capitalize text-[14px] mt-[-3px] text-gray">
                        {type}
                    </p>
                </div>
                <div className="gap-1 max-w-min ml-auto flex items-center justify-self-end">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                            key={i}
                            className={`${i < stars ? "fill-primary" : ""} text-primary`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
