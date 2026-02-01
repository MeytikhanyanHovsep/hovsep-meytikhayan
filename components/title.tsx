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
        <h3 className={"text-white uppercase satoshi text-[32px] mb-7 " + pos}>
            <span className="text-[38px]">
                [0<span className="text-primary">{index}</span>]
            </span>{" "}
            {children}
        </h3>
    );
}
