import { memo } from "react";
import Title from "../title";
import TechBlock from "./techBlock";
import Button from "../button";

type Props = { lang: boolean };

const About = memo(function About({ lang }: Props) {
    const cubes = [
        { logo: "github", color: "#ffffff", x: 2, y: 0, z: 0, ind: 9 },
        { logo: "docker", color: "#0033CC", x: 2, y: 1, z: 0, ind: 7 },
        { logo: "bootstrap", color: "#4B0082", x: 1, y: 1, z: 0, ind: 8 },
        { logo: "tailwind", color: "#005F87", x: 0, y: 2, z: 0, ind: 7 },
        { logo: "figma", color: "#991F00", x: 1, y: 2, z: 0, ind: 6 },
        { logo: "framer", color: "#000000", x: 2, y: 2, z: 0, ind: 4 },
        { logo: "nest", color: "#8B0000", x: 3, y: 2, z: 0, ind: 2 },
        { logo: "node", color: "#1A4D1A", x: 2, y: 2, z: 1, ind: 4 },
        { logo: "react", color: "#007A99", x: 3, y: 1, z: 3, ind: 4 },
        { logo: "next", color: "#000", x: 3, y: 2, z: 3, ind: 3 },
        { logo: "js", color: "#998500", x: 0, y: 2, z: 3, ind: 4 },
        { logo: "html", color: "#992E00", x: 0, y: 2, z: 2, ind: 3 },
        { logo: "css", color: "#002BB8", x: 1, y: 2, z: 3, ind: 3 },
        { logo: "ts", color: "#004B99", x: 3, y: 2, z: 2, ind: 2 },
    ];

    const getStyles = (item: any) => {
        const { x, y, z, ind, logo } = item;
        let left = x * 70 + z * 70;
        let top = y * 80 - 35 * x + z * 35;

        return {
            isBottom: y == 2,
            styles: { top: top + "px", left: left + "px", zIndex: ind },
        };
    };

    const tags = [
        ["Clean Architecture", "Чистая архитектура"],
        ["SEO & Performance", "SEO и скорость"],
        ["Type-Safe Code", "Безопасный код"],
        ["Next.js Expert", "Эксперт по Next.js"],
        ["State Management", "Управление состоянием"],
    ];
    return (
        <section
            id="about"
            className="pt-30 -mt-30 max-2xl:pt-20 max-2xl:-mt-20 max-md:pt-10 max-md:-mt-10"
        >
            <div className="container max-lg:grid-cols-1 max-md:gap-5 grid grid-cols-2 gap-10 items-center">
                <div className="relative max-lg:left-1/2 max-lg:-translate-x-1/2 max-2xl:scale-85 max-md:scale-60 max-[365px]:scale-53 max-md:ml-[2%]  max-[400px]:ml-[-1%]! max-[415px]:ml-[-1%]! max-[365px]:ml-[-5%] max-md:max-w-full max-md:w-full lg:ml-6 max-lg:h-[300px] h-[200px]">
                    {cubes.map((e, i) => (
                        <TechBlock
                            key={i}
                            color={e.color}
                            style={getStyles(e)["styles"]}
                            isBottom={getStyles(e)["isBottom"]}
                            logoUrl={e.logo}
                        />
                    ))}
                </div>
                <div className="flex  flex-col">
                    <Title index={1}>{lang ? "About me" : "О себе"}</Title>
                    <div className="flex items-start flex-col max-2xl:gap-3 gap-5">
                        <p className="text-gray max-2xl:max-w-[85%] max-md:max-w-full max-md:max-min-full max-2xl:text-[13px]">
                            {lang
                                ? "I am a web developer specializing in website development and the client side of web applications. I work with modern technologies, creating responsive interfaces and clear project structures."
                                : "Я веб-разработчик, специализируюсь на разработке сайтов и клиентской части веб-приложений. Работаю с современными технологиями, делаю адаптивные интерфейсы и понятную структуру проекта."}
                        </p>
                        <p className="text-gray max-2xl:max-w-[85%] max-2xl:text-[13px]">
                            {lang
                                ? "In my work, I focus on logic, performance, and user experience. I try not to complicate solutions unnecessarily and always focus on the task at hand and the result that the client needs."
                                : "В процессе работы уделяю внимание логике, производительности и удобству пользователя. Стараюсь не усложнять решения без необходимости и всегда ориентируюсь на задачу и результат, который нужен клиенту."}
                        </p>
                        <div className="flex  flex-wrap gap-x-3 max-md:gap-x-2 max-md:gap-y-3 gap-y-4 ">
                            {tags.map((e, i) => (
                                <p
                                    key={i}
                                    className="bg-white/10 px-4 py-1 border border-transparent transition-colors max-2xl:text-[12px] duration-300 hover:border-white rounded-2xl"
                                >
                                    {"[" + e[lang ? 0 : 1] + "]"}
                                </p>
                            ))}
                        </div>
                        <div className="grid max-w-[700px] w-full my-2 grid-cols-3">
                            <div className=" flex flex-col capitalize items-center pb-2 pt-3 max-2xl:pt-2 max-2xl:pb-1 relative ">
                                <span className="text-primary leading-[100%]  flex items-center gap-2  relative text-[38px] max-2xl:text-[30px] max-md:text-[25px]">
                                    10
                                    <span className="text-secondary absolute top-[42%] -translate-1/2 left-[calc(132%)]">
                                        +
                                    </span>
                                </span>
                                <p className="text-[22px] max-2xl:text-[18px] max-md:text-[16px]">
                                    {lang ? "Clients" : "Клиентов"}
                                </p>
                            </div>
                            <div className=" flex flex-col capitalize items-center pb-2 pt-3 max-2xl:pt-2 max-2xl:pb-1 relative after:h-full after:content-[] after:top-0 after:right-0 after:absolute after:bg-secondary/50 after:rounded-[3px] md:before:w-[2px] md:after:w-[2px] after:w-[3px] before:h-full before:content-[] before:top-0 before:left-0 before:absolute before:bg-secondary/50 before:rounded-[3px] before:w-[3px]">
                                <span className="text-primary leading-[100%]  flex items-center gap-2  relative text-[38px] max-2xl:text-[30px] max-md:text-[25px]">
                                    20
                                    <span className="text-secondary absolute top-[42%] -translate-1/2 left-[calc(132%)]">
                                        +
                                    </span>
                                </span>
                                <p className="text-[22px] max-2xl:text-[18px] max-md:text-[16px]">
                                    {lang ? "Projects" : "Проектов"}
                                </p>
                            </div>
                            <div className=" flex flex-col capitalize items-center pb-2 pt-3 max-2xl:pt-2 max-2xl:pb-1">
                                <span className="text-primary leading-[100%]  flex items-center gap-2  relative text-[38px] max-2xl:text-[30px] max-md:text-[25px]">
                                    04{" "}
                                    <span className="text-secondary absolute top-[42%] -translate-1/2 left-[calc(132%)]">
                                        +
                                    </span>
                                </span>
                                <p className="text-[22px] max-2xl:text-[18px] max-md:text-[16px]">
                                    {lang ? "years" : "лет опыта"}
                                </p>
                            </div>
                        </div>

                        <Button
                            section="contacts"
                            styles=" max-sm:min-w-full max-md:min-w-[200px]"
                            filled={true}
                        >
                            {lang ? "My contacts" : "Мои контакты"}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default About;
