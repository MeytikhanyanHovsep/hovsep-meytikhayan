"use client";
import Image from "next/image";
import Title from "./title";

type Props = { lang: boolean };

const services = [
    {
        title: ["Веб-верстка по дизайну", "Web Layout from Design"],
        description: [
            "Адаптивная вёрстка сайтов по макетам Figma. Точное соблюдение структуры, отступов и типографики. Чистый, понятный код с использованием современных технологий.",
            "Responsive website layout based on Figma designs. Precise structure, spacing, and typography. Clean and readable code using modern technologies.",
        ],
        img: "app",
    },
    {
        title: ["Адаптивные сайты", "Responsive Websites"],
        description: [
            "Корректное отображение сайта на мобильных, планшетах и десктопах. Продуманная структура под разные экраны. Удобство для пользователя без потери дизайна.",
            "Proper display on mobile, tablet, and desktop devices. Well-structured layouts for different screen sizes. User-friendly experience without design loss.",
        ],
        img: "devices",
    },
    {
        title: ["Frontend-разработка", "Frontend Development"],
        description: [
            "Разработка клиентской части сайта на React и Next.js. Компонентный подход и логичная архитектура. Подготовка проекта к реальному использованию.",
            "Client-side development using React and Next.js. Component-based approach and clean architecture. Production-ready implementation.",
        ],
        img: "brush",
    },
    {
        title: ["Интеграция с API", "API Integration"],
        description: [
            "Подключение сайта к backend и внешним сервисам. Получение и отображение данных без перезагрузки страницы. Корректная обработка загрузки и ошибок.",
            "Connecting websites to backend and external services. Data fetching and rendering without page reloads. Proper loading and error handling.",
        ],
        img: "database",
    },
    {
        title: ["Оптимизация и доработка", "Optimization & Improvements"],
        description: [
            "Исправление ошибок и улучшение существующих проектов. Повышение скорости загрузки и стабильности. Приведение кода в поддерживаемый вид.",
            "Fixing issues and improving existing websites. Faster load times and better stability. Clean and maintainable codebase.",
        ],
        img: "speedometer",
    },
    {
        title: ["Верстка лендингов", "Landing Page Development"],
        description: [
            "Создание одностраничных сайтов под продукт или услугу. Чёткая структура и логика подачи контента. Готовность к продвижению и рекламе.",
            "Single-page websites for products or services. Clear structure and content flow. Ready for marketing and advertising.",
        ],
        img: "landing",
    },
];

export default function Services({ lang }: Props) {
    return (
        <section className="relative pt-30">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] aspect-square bg-radial from-primary/20 to-transparent blur-[4px] scale-[10] -z-1 pointer-events-none will-change-transform" />

            <div className="container">
                <Title index={3}>{lang ? "Services" : "Услуги"}</Title>
            </div>

            <div className="container grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {services.map((e, i) => (
                    <div
                        key={i}
                        className="group rounded-[20px] relative p-[4px] overflow-hidden transform-gpu"
                    >
                        <div className="absolute z-[-1] w-full aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 scale-[1.3] opacity-0 group-hover:opacity-100 border-4 bg-linear-to-l from-primary/50 via-transparent to-transparent animate-spin-custom will-change-transform" />

                        <div className="z-10 h-full rounded-[19px] flex flex-col bg-linear-to-b from-dark/70 to-dark backdrop-blur-lg p-4 gap-5 backface-hidden">
                            <Image
                                alt={e.img}
                                src={`/images/icons/${e.img}.png`}
                                width={60}
                                height={60}
                                className="h-[60px] mb-2 object-contain"
                            />
                            <h2 className="text-2xl text-white">
                                {lang ? e.title[1] : e.title[0]}
                            </h2>
                            <p className="text-gray leading-relaxed">
                                {lang ? e.description[1] : e.description[0]}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
