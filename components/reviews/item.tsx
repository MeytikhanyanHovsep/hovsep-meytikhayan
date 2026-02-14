import Image from "next/image";
import React from "react";
import { memo } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { StarIcon } from "@hugeicons/core-free-icons";
type Props = {
    name: string;
    type: string;
    desc: string[];
    stars: number;
    img: string;
    lang: boolean;
};

const Item = memo(function Item({ desc, img, name, type, stars, lang }: Props) {
    return (
        <div className=" transition-all z-10 h-full rounded-[16px] flex flex-col duration-300 bg-dark/50 hover:bg-dark/90 backdrop-blur-md p-4 gap-6 cursor-grab">
            <p className="text-gray max-2xl:text-[14px]">
                {desc[lang ? 0 : 1]}
            </p>
            <div className="flex gap-3 items-center min-w-full">
                <Image
                    width={50}
                    height={50}
                    src={"/images/reviews/" + img}
                    className="rounded-full max-2xl:w-[45px] object-cover"
                    unoptimized
                    alt="User"
                />
                <div className="flex flex-col">
                    <p className="text-[20px] max-2xl:text-[18px] max-lg:text-[16px] text-white">
                        {name}
                    </p>
                    <p className="capitalize max-2xl:text-[12px] text-[14px] mt-[-3px] text-gray">
                        {type == "c"
                            ? lang
                                ? "Company"
                                : "Компания"
                            : lang
                              ? "Customer"
                              : "Клиент"}
                    </p>
                </div>
                <div className="gap-1 px-3 py-2 max-2xl:px-2 max-md:gap-[3px] max-md:py-1 max-2xl:py-1 bg-white/5 rounded-[20px] max-w-min ml-auto flex items-center self-end justify-self-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <HugeiconsIcon
                            icon={StarIcon}
                            key={i}
                            strokeWidth={2}
                            className={`${i < stars ? "fill-primary" : ""} text-primary max-md:w-[14px] max-2xl:w-[16px] w-[20px]`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
});

export default Item;
