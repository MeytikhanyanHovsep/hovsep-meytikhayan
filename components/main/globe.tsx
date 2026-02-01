"use client";
import React, { useMemo, useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Динамический импорт для предотвращения ошибок SSR в Next.js
const Globe = dynamic(() => import("react-globe.gl"), {
    ssr: false,
    loading: () => (
        <div>
            {/* <span className="text-white opacity-50">Загрузка глобуса...</span> */}
        </div>
    ),
});

const GLOBE_CONFIG = {
    LabelSize: 2.5,
    ArcStroke: 0.1,
    MaxConnections: 3,
    AutoRotateSpeed: 0.8,
};

const TAGS = [
    "HTML",
    "CSS",
    "React",
    "TypeScript",
    "NextJS",
    "NodeJS",
    "GraphQL",
    "Prisma",
    "Docker",
    "AWS",
    "Figma",
    "ThreeJS",
    "Tailwind",
    "Redux",
    "Python",
    "Git",
    "Sass",
    "Webpack",
    "Vite",
    "SQL",
    "Mongo",
];

export default function InteractiveGlobe() {
    const globeEl = useRef<any>(undefined);
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    // 1. Адаптивность: Следим за размером контейнера
    useEffect(() => {
        if (!containerRef.current) return;

        const updateSize = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.offsetWidth,
                    height: containerRef.current.offsetHeight,
                });
            }
        };

        const resizeObserver = new ResizeObserver(updateSize);
        resizeObserver.observe(containerRef.current);
        updateSize();

        return () => resizeObserver.disconnect();
    }, []);

    // 2. Расчет данных (Точки и Дуги)
    const { points, arcs } = useMemo(() => {
        const numPoints = TAGS.length;
        const phi = Math.PI * (3 - Math.sqrt(5));

        const generatedPoints = TAGS.map((tag, i) => {
            const y = 1 - (i / (numPoints - 1)) * 2;
            const radiusAtY = Math.sqrt(1 - y * y);
            const theta = phi * i;
            const lat = Math.asin(y) * (180 / Math.PI);
            const lng =
                Math.atan2(
                    Math.sin(theta) * radiusAtY,
                    Math.cos(theta) * radiusAtY,
                ) *
                (180 / Math.PI);
            return { id: i, tag, lat, lng };
        });

        let finalArcs: any[] = [];
        const connectionCounts = new Map();

        generatedPoints.forEach((p1, i) => {
            generatedPoints.slice(i + 1).forEach((p2) => {
                const c1 = {
                    x:
                        Math.cos(p1.lat * (Math.PI / 180)) *
                        Math.cos(p1.lng * (Math.PI / 180)),
                    y: Math.sin(p1.lat * (Math.PI / 180)),
                    z:
                        Math.cos(p1.lat * (Math.PI / 180)) *
                        Math.sin(p1.lng * (Math.PI / 180)),
                };
                const c2 = {
                    x:
                        Math.cos(p2.lat * (Math.PI / 180)) *
                        Math.cos(p2.lng * (Math.PI / 180)),
                    y: Math.sin(p2.lat * (Math.PI / 180)),
                    z:
                        Math.cos(p2.lat * (Math.PI / 180)) *
                        Math.sin(p2.lng * (Math.PI / 180)),
                };
                const dist = Math.sqrt(
                    (c1.x - c2.x) ** 2 +
                        (c1.y - c2.y) ** 2 +
                        (c1.z - c2.z) ** 2,
                );

                if (dist < 1.0) {
                    const cnt1 = connectionCounts.get(p1.id) || 0,
                        cnt2 = connectionCounts.get(p2.id) || 0;
                    if (
                        cnt1 < GLOBE_CONFIG.MaxConnections &&
                        cnt2 < GLOBE_CONFIG.MaxConnections
                    ) {
                        finalArcs.push({
                            startLat: p1.lat,
                            startLng: p1.lng,
                            endLat: p2.lat,
                            endLng: p2.lng,
                        });
                        connectionCounts.set(p1.id, cnt1 + 1);
                        connectionCounts.set(p2.id, cnt2 + 1);
                    }
                }
            });
        });
        return { points: generatedPoints, arcs: finalArcs };
    }, []);

    useEffect(() => {
        const lockZoom = () => {
            if (globeEl.current) {
                const controls = globeEl.current.controls();
                const camera = globeEl.current.camera();

                if (controls && camera) {
                    controls.enableZoom = false;
                    controls.enablePan = false;
                    controls.enableDamping = false;

                    const currentDist = camera.position.length();
                    controls.minDistance = currentDist;
                    controls.maxDistance = currentDist;
                    controls.zoomSpeed = 0;
                    controls.autoRotate = true;
                    controls.autoRotateSpeed = GLOBE_CONFIG.AutoRotateSpeed;

                    controls.update();
                }
            }
        };

        const timer = setTimeout(lockZoom, 200);
        return () => clearTimeout(timer);
    }, [dimensions.width]);

    return (
        <div
            ref={containerRef}
            className="w-full h-[700px] scale-[1.2] my-auto relative overflow-hidden"
            onWheelCapture={(e) => {
                e.preventDefault();
                e.stopPropagation();
            }}
        >
            <Globe
                ref={globeEl}
                width={dimensions.width}
                height={dimensions.height}
                backgroundColor="rgba(0,0,0,0)"
                showGlobe={false}
                showAtmosphere={false}
                labelsData={points}
                labelLat={(d: any) => d.lat}
                labelLng={(d: any) => d.lng}
                labelText={(d: any) => d.tag}
                labelSize={GLOBE_CONFIG.LabelSize}
                labelColor={() => "#f5faff"}
                labelAltitude={0.01}
                labelDotRadius={0.4}
                arcsData={arcs}
                arcColor={() => "#01a26a"}
                arcStroke={GLOBE_CONFIG.ArcStroke}
                arcDashLength={0.4}
                arcDashGap={1}
                arcDashAnimateTime={2500}
                arcAltitude={0}
                onGlobeReady={() => {
                    const controls = globeEl.current.controls();
                    if (controls) {
                        controls.autoRotate = true;
                        controls.autoRotateSpeed = GLOBE_CONFIG.AutoRotateSpeed;
                    }
                }}
            />
        </div>
    );
}
