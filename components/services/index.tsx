"use client";
import Image from "next/image";
import Title from "../title";
import Item from "./item";
import { memo } from "react";

type Props = { lang: boolean };

type ServiceItem = {
    title: string[];
    description: string[];
    name: string;
};

const services: ServiceItem[] = [
    {
        title: ["Веб-верстка по дизайну", "Web Layout from Design"],
        description: [
            "Адаптивная вёрстка сайтов по макетам Figma. Точное соблюдение структуры, отступов и типографики. Чистый, понятный код с использованием современных технологий.",
            "Responsive website layout based on Figma designs. Precise structure, spacing, and typography. Clean and readable code using modern technologies.",
        ],
        name: "layout",
    },
    {
        title: ["Адаптивность и UI", "Responsive UI/UX"],
        description: [
            "Корректное отображение на всех типах устройств. Продуманные интерфейсы, обеспечивающие удобство пользователя на мобильных телефонах, планшетах и десктопах.",
            "Flawless display across all devices. Thoughtful interfaces ensuring a seamless user experience on mobile, tablet, and desktop screens.",
        ],
        name: "responsivity",
    },
    {
        title: ["Frontend-разработка", "Frontend Development"],
        description: [
            "Создание динамических приложений на React и Next.js. Использование серверного рендеринга (SSR) и статической генерации для максимальной производительности.",
            "Building dynamic applications with React and Next.js. Utilizing SSR and Static Generation for top-tier performance and scalability.",
        ],
        name: "front",
    },
    {
        title: ["TypeScript и Надежность", "TypeScript & Reliability"],
        description: [
            "Разработка на TypeScript для обеспечения стабильности кода. Строгая типизация данных, минимизация ошибок на этапе написания кода и легкая поддержка.",
            "Development with TypeScript to ensure code stability. Strong typing, minimizing runtime errors, and making the codebase easy to maintain and scale.",
        ],
        name: "reliability",
    },
    {
        title: ["Управление состоянием", "State Management"],
        description: [
            "Архитектура данных с использованием Redux Toolkit, Zustand или Context API. Эффективная синхронизация состояния между компонентами приложения.",
            "Data architecture using Redux Toolkit, Zustand, or Context API. Efficient state synchronization across complex application components.",
        ],
        name: "control",
    },
    {
        title: ["Интеграция с API", "API Integration"],
        description: [
            "Связывание фронтенда с бэкендом и сторонними сервисами. Безопасная работа с данными, обработка запросов и кэширование для мгновенного отклика.",
            "Connecting frontend with backend and third-party services. Secure data handling, request processing, and caching for instant response.",
        ],
        name: "database",
    },
    {
        title: ["Скорость и SEO", "Performance & SEO"],
        description: [
            "Оптимизация Core Web Vitals для высоких позиций в поиске. Быстрая загрузка контента, оптимизация изображений и правильная семантическая структура.",
            "Optimizing Core Web Vitals for high search rankings. Fast content delivery, image optimization, and proper semantic structure.",
        ],
        name: "seo",
    },
    {
        title: ["Тестирование и QA", "Testing & QA"],
        description: [
            "Проверка работоспособности интерфейса и логики. Написание Unit-тестов и интеграционных тестов для предотвращения багов при обновлении функционала.",
            "Ensuring interface and logic reliability. Writing Unit and Integration tests to prevent regressions and bugs when adding new features.",
        ],
        name: "test",
    },
    {
        title: ["Поддержка и Развитие", "Maintenance & Evolution"],
        description: [
            "Аудит и рефакторинг существующего кода. Исправление ошибок, обновление зависимостей и внедрение нового функционала в работающие проекты.",
            "Auditing and refactoring existing code. Bug fixing, dependency updates, and implementing new features into production projects.",
        ],
        name: "evolution",
    },
];
const Services = memo(function Services({ lang }: Props) {
    return (
        <section
            id="services"
            className="relative pt-30 max-2xl:pt-20 max-md:pt-10"
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-lg:w-[150px] w-[100px] aspect-square bg-radial max-lg:h-[50%] max-lg:scale-[2] from-primary/20 to-transparent blur-xs scale-[10] -z-1 pointer-events-none will-change-transform" />

            <div className="container">
                <Title index={3}>{lang ? "Services" : "Услуги"}</Title>

                <div className="grid lg:[&:has(div:hover)>div]:blur-[2px] max-2xl:gap-4 max-md:gap-2 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((e: ServiceItem, i) => (
                        <Item
                            name={e.name}
                            key={i}
                            title={lang ? e.title[1] : e.title[0]}
                            description={
                                lang ? e.description[1] : e.description[0]
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Services;
