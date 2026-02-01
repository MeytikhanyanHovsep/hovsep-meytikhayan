import React, { useRef, useEffect } from "react";

interface GridProps {
    gap?: number;
    mouseRadius?: number;
    lineColor?: string;
}

const InteractiveGrid: React.FC<GridProps> = ({
    gap = 40,
    mouseRadius = 200,
    lineColor = "rgba(100, 150, 255, 0.1)",
}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const mouse = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas?.getBoundingClientRect();
            if (!rect) return;

            mouse.current.x = e.clientX - rect.left;
            mouse.current.y = e.clientY - rect.top;
        };

        const draw = () => {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 1;

            for (let x = 0; x <= canvas.width; x += gap) {
                ctx.beginPath();
                for (let y = 0; y <= canvas.height; y += 10) {
                    const dx = x - mouse.current.x;
                    const dy = y - mouse.current.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    let offsetX = 0;
                    if (dist < mouseRadius) {
                        const force = (mouseRadius - dist) / mouseRadius;
                        offsetX = dx * force * 0.4;
                    }

                    if (y === 0) ctx.moveTo(x + offsetX, y);
                    else ctx.lineTo(x + offsetX, y);
                }
                ctx.stroke();
            }

            for (let y = 0; y <= canvas.height; y += gap) {
                ctx.beginPath();
                for (let x = 0; x <= canvas.width; x += 10) {
                    const dx = x - mouse.current.x;
                    const dy = y - mouse.current.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    let offsetY = 0;
                    if (dist < mouseRadius) {
                        const force = (mouseRadius - dist) / mouseRadius;
                        offsetY = dy * force * 0.4;
                    }

                    if (x === 0) ctx.moveTo(x, y + offsetY);
                    else ctx.lineTo(x, y + offsetY);
                }
                ctx.stroke();
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);

        resize();
        draw();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [gap, mouseRadius, lineColor]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                WebkitMaskImage:
                    "linear-gradient(to top, transparent 0%, black 40%)",
                maskImage: "linear-gradient(to top, transparent 0%, black 40%)",
            }}
            className="absolute top-0 left-0 w-full h-full"
        />
    );
};

export default InteractiveGrid;
