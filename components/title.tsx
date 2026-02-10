import React from "react";

type Props = {
    children: React.ReactNode;
    index?: number;
    dir?: "left" | "center" | "right";
};

export default function Title({ children, index = 1, dir = "left" }: Props) {
    const pos =
        dir == "center" ? "mx-auto" : dir == "right" ? "ml-auto" : "mr-auto";
    return (
        <h3
            className={
                "text-white max-md:text-[22px] max-w-max uppercase satoshi max-2xl:text-[25px] text-[32px] max-2xl:mb-5 mb-7 " +
                pos
            }
        >
            <span className="text-[38px] max-md:text-[25px] max-2xl:text-[28px]">
                [0<span className="text-primary">{index}</span>]
            </span>{" "}
            {children}
        </h3>
    );
}
