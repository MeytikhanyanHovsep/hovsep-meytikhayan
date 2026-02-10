import Image from "next/image";
import React, { useMemo, memo } from "react";

interface TechBlockProps {
    logoUrl: string;
    color: string;
    size?: number;
    style?: React.CSSProperties;
    isBottom: boolean;
}

const TechBlock = memo(
    ({ logoUrl, color, size = 70, style, isBottom }: TechBlockProps) => {
        return (
            <div
                style={{
                    width: size,
                    height: size,
                    ...style,
                }}
                className="absolute max-md:translate-x-[-100%] group hover:scale-110 duration-300 will-change-transform cursor-pointer"
            >
                <div
                    className="absolute z-10 w-[70%] h-[70%] left-1/2 top-[2%] -translate-1/2"
                    style={{ transform: "rotateX(60deg) rotateZ(45deg)" }}
                >
                    <Image
                        height={100}
                        width={100}
                        alt={logoUrl}
                        src={`/images/techs/${logoUrl}.png`}
                        className="w-full drop-shadow-xl h-full object-contain"
                    />
                </div>

                <div
                    className="absolute z-10 w-[68%] h-[68%] bottom-[-37%] -translate-1/2 left-[11%]"
                    style={{ transform: "rotateX(36deg) rotateY(40deg)" }}
                >
                    <Image
                        height={100}
                        width={100}
                        alt={logoUrl}
                        src={`/images/techs/${logoUrl}.png`}
                        className="w-full drop-shadow-xl h-full object-contain"
                    />
                </div>

                <div
                    className="absolute z-10 w-[65%] h-[65%] bottom-[-37%] -translate-1/2 right-[-57%]"
                    style={{ transform: "rotateX(-36deg) rotateY(40deg)" }}
                >
                    <Image
                        height={100}
                        width={100}
                        alt={logoUrl}
                        src={`/images/techs/${logoUrl}.png`}
                        className="w-full drop-shadow-xl h-full object-contain"
                    />
                </div>
                <div className="relative left-1/2 group-hover:opacity-100 transition-opacity duration-300 opacity-90  top-1/2 -translate-1/2 w-28 h-28">
                    <Image
                        width={200}
                        height={200}
                        src={
                            color.includes("#000")
                                ? "/images/techs/cube-black.png"
                                : "/images/techs/cube.png"
                        }
                        alt="Cube Base"
                        className="absolute inset-0 w-full h-full object-contain grayscale brightness-100"
                    />

                    {!color.includes("#000") && (
                        <>
                            {" "}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    backgroundColor: color,
                                    mixBlendMode: "color",
                                    WebkitMaskImage:
                                        "url(/images/techs/cube.png)",
                                    maskImage: "url(/images/techs/cube.png)",
                                    WebkitMaskSize: "contain",
                                    maskSize: "contain",
                                    WebkitMaskRepeat: "no-repeat",
                                    maskRepeat: "no-repeat",
                                }}
                            />
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    backgroundColor: color,
                                    mixBlendMode: "soft-light",
                                    opacity: 0.5,
                                    WebkitMaskImage:
                                        "url(/images/techs/cube.png)",
                                    maskImage: "url(/images/techs/cube.png)",
                                    WebkitMaskSize: "contain",
                                    maskSize: "contain",
                                    WebkitMaskRepeat: "no-repeat",
                                    maskRepeat: "no-repeat",
                                }}
                            />
                        </>
                    )}
                </div>
                <div
                    style={{
                        background: `radial-gradient(${color.includes("#000") ? "#26ffa5" : color}, transparent)`,
                        transform:
                            "translateZ(-50px) translateX(-50%) scale(10)",
                    }}
                    className={`absolute -bottom-[20%] left-1/2 w-[13%] h-[8%] rounded-full blur-[1px]  z-[-1] pointer-events-none will-change-transform ${isBottom ? "" : "hidden"} ${color.includes("#000") ? "opacity-50" : "opacity-90"}`}
                />
            </div>
        );
    },
);

TechBlock.displayName = "TechBlock";

export default TechBlock;
