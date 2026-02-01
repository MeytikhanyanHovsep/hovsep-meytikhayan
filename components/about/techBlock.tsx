import React, { useMemo, memo } from "react";

interface TechBlockProps {
    logoUrl?: string;
    color: string;
    size?: number;
    style?: React.CSSProperties;
    isBottom: boolean;
}

const adjustColor = (hex: string, percent: number) => {
    const num = parseInt(hex.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = ((num >> 8) & 0x00ff) + amt;
    const B = (num & 0x00ff) + amt;
    return (
        "#" +
        (
            0x1000000 +
            (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
            (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
            (B < 255 ? (B < 1 ? 0 : B) : 255)
        )
            .toString(16)
            .slice(1)
    );
};

const TechBlock = memo(
    ({ logoUrl, color, size = 70, style, isBottom }: TechBlockProps) => {
        const {
            offset,
            borderRadius,
            lighterColor,
            darkerColor,
            darkestColor,
        } = useMemo(() => {
            return {
                offset: size / 2 - 1,
                borderRadius: size * 0.15,
                lighterColor: adjustColor(color, 25),
                darkerColor: adjustColor(color, -15),
                darkestColor: adjustColor(color, -35),
            };
        }, [color, size]);

        // 3. Статичные стили выносим, динамические мемоизируем
        const faceStyle: React.CSSProperties = useMemo(
            () => ({
                position: "absolute",
                width: size,
                height: size,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: `${borderRadius}px`,
                // Добавляем backface-visibility для производительности, чтобы браузер не рисовал невидимые грани лишний раз
                backfaceVisibility: "hidden",
            }),
            [size, borderRadius],
        );

        // Путь к картинке тоже мемоизируем
        const imgSrc = useMemo(
            () => (logoUrl ? `/images/techs/${logoUrl}.png` : null),
            [logoUrl],
        );

        return (
            <div
                style={{
                    width: size,
                    height: size,
                    perspective: "1000px",
                    ...style,
                }}
                // Добавили will-change-transform для подсказки браузеру
                className="absolute hover:scale-110 transition-transform duration-500 will-change-transform cursor-pointer"
            >
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transformStyle: "preserve-3d",
                        transform: "rotateX(-35deg) rotateY(45deg)",
                        transition: "transform 0.5s ease",
                    }}
                >
                    {/* ВНУТРЕННЯЯ ЗАЛИВКА (Optimization: remove if not seen, but kept for 1:1 match) */}
                    <div
                        style={{
                            position: "absolute",
                            width: size,
                            height: size,
                            backgroundColor: color,
                            transform:
                                "translateZ(0) translateX(1px) translateY(1px)",
                        }}
                    />

                    {/* ВЕРХНЯЯ ГРАНЬ (Светлая + Лого) */}
                    <div
                        style={{
                            ...faceStyle,
                            background: `linear-gradient(135deg, ${lighterColor}, ${color})`,
                            transform: `rotateX(90deg) translateZ(${offset}px)`,
                        }}
                    >
                        {imgSrc && (
                            <img
                                src={imgSrc}
                                alt={logoUrl}
                                loading="lazy" // Ленивая загрузка
                                decoding="async" // Асинхронное декодирование
                                style={{
                                    width: "70%",
                                    height: "70%",
                                    objectFit: "contain",
                                    opacity: 0.95,
                                }}
                                className="z-30 drop-shadow-lg"
                            />
                        )}
                    </div>

                    {/* ПРАВАЯ ГРАНЬ (Основной цвет + Лого) */}
                    <div
                        style={{
                            ...faceStyle,
                            backgroundColor: color,
                            transform: `rotateY(0deg) translateZ(${offset}px)`,
                        }}
                    >
                        {imgSrc && (
                            <img
                                src={imgSrc}
                                alt={logoUrl}
                                loading="lazy"
                                decoding="async"
                                style={{
                                    width: "70%",
                                    height: "70%",
                                    objectFit: "contain",
                                    opacity: 0.9,
                                }}
                                className="z-30 drop-shadow-lg"
                            />
                        )}
                    </div>

                    {/* ЛЕВАЯ ГРАНЬ (Тёмная + Лого) */}
                    <div
                        style={{
                            ...faceStyle,
                            backgroundColor: darkerColor,
                            transform: `rotateY(-90deg) translateZ(${offset}px)`,
                        }}
                    >
                        {imgSrc && (
                            <img
                                src={imgSrc}
                                alt={logoUrl}
                                loading="lazy"
                                decoding="async"
                                style={{
                                    width: "70%",
                                    height: "70%",
                                    objectFit: "contain",
                                    opacity: 0.8,
                                }}
                                className="z-30 drop-shadow-lg"
                            />
                        )}
                    </div>

                    {/* ЗАДНИЕ/НИЖНИЕ ГРАНИ (Оставляем для целостности куба) */}
                    <div
                        style={{
                            ...faceStyle,
                            backgroundColor: darkestColor,
                            transform: `rotateX(-90deg) translateZ(${offset}px)`,
                        }}
                    />

                    <div
                        style={{
                            ...faceStyle,
                            backgroundColor: darkerColor,
                            transform: `rotateY(180deg) translateZ(${offset}px)`,
                        }}
                    />

                    <div
                        style={{
                            ...faceStyle,
                            backgroundColor: color,
                            transform: `rotateY(90deg) translateZ(${offset}px)`,
                        }}
                    />
                </div>

                <div
                    style={{
                        background: `radial-gradient(${color}, transparent)`,
                        transform:
                            "translateZ(-50px) translateX(-50%) scale(10)",
                    }}
                    className={`absolute -bottom-[50%] left-1/2 w-[13%] h-[8%] rounded-full blur-[1px] opacity-60 z-[-1] pointer-events-none will-change-transform ${isBottom ? "" : "hidden"}`}
                />
            </div>
        );
    },
);

TechBlock.displayName = "TechBlock";

export default TechBlock;
