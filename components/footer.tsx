import Image from "next/image";
import { memo } from "react";
import { HugeiconsIcon } from "@hugeicons/react";

import {
    Mail02Icon,
    TelegramIcon,
    GithubIcon,
    Layout01Icon,
    SmartPhone02Icon,
    SourceCodeIcon,
    DatabaseIcon,
    GitMergeIcon,
    Timer01Icon,
    TestTube01Icon,
    Settings03Icon,
    SecurityCheckIcon,
} from "@hugeicons/core-free-icons";

import Link from "next/link";
import Wave from "react-wavify";
import "./style.css";

type Props = { lang: boolean };

const Footer = memo(function Footer({ lang }: Props) {
    const currentYear = new Date().getFullYear();
    const data = {
        services: [
            {
                name: ["Layout", "Верстка"],
                icon: (
                    <HugeiconsIcon
                        strokeWidth={2}
                        icon={Layout01Icon}
                        className="text-primary w-5 mb-[2px]"
                    />
                ),
                link: "layout",
            },
            {
                name: ["Responsivity", "Адаптивность"],
                icon: (
                    <HugeiconsIcon
                        strokeWidth={2}
                        icon={SmartPhone02Icon}
                        className="text-primary w-5 mb-[2px]"
                    />
                ),
                link: "responsivity",
            },
            {
                name: ["Frontend", "Фронтенд"],
                icon: (
                    <HugeiconsIcon
                        strokeWidth={2}
                        icon={SourceCodeIcon}
                        className="text-primary w-5 mb-[2px]"
                    />
                ),
                link: "front",
            },
            {
                name: ["Reliability", "Надежность"],
                icon: (
                    <HugeiconsIcon
                        strokeWidth={2}
                        icon={SecurityCheckIcon}
                        className="text-primary w-5 mb-[2px]"
                    />
                ),
                link: "reliability",
            },
            {
                name: ["Management", "Состояние"],
                icon: (
                    <HugeiconsIcon
                        strokeWidth={2}
                        icon={GitMergeIcon}
                        className="text-primary w-5 mb-[2px]"
                    />
                ),
                link: "control",
            },
            {
                name: ["Integration", "Интеграция"],
                icon: (
                    <HugeiconsIcon
                        strokeWidth={2}
                        icon={DatabaseIcon}
                        className="text-primary w-5 mb-[2px]"
                    />
                ),
                link: "database",
            },
            {
                name: ["SEO", "SEO"],
                icon: (
                    <HugeiconsIcon
                        strokeWidth={2}
                        icon={Timer01Icon}
                        className="text-primary w-5 mb-[2px]"
                    />
                ),
                link: "seo",
            },
            {
                name: ["Testing", "Тестирование"],
                icon: (
                    <HugeiconsIcon
                        strokeWidth={2}
                        icon={TestTube01Icon}
                        className="text-primary w-5 mb-[2px]"
                    />
                ),
                link: "test",
            },
            {
                name: ["Evolution", "Развитие"],
                icon: (
                    <HugeiconsIcon
                        strokeWidth={2}
                        icon={Settings03Icon}
                        className="text-primary w-5 mb-[2px]"
                    />
                ),
                link: "evolution",
            },
        ],
        contacts: [
            {
                name: "meytikhanyan.hovsep@gmail.com",
                link: "mailto:meytikhanyan.hovsep@gmail.com",
                icon: (
                    <HugeiconsIcon
                        strokeWidth={2}
                        icon={Mail02Icon}
                        className="w-5 text-primary mb-[2px]"
                    />
                ),
            },
            {
                name: "Meytikhanyan_Hovsep",
                link: "https://t.me/Meytikhanyan_Hovsep",
                icon: (
                    <HugeiconsIcon
                        strokeWidth={2}
                        icon={TelegramIcon}
                        className="w-5 text-primary mb-[2px]"
                    />
                ),
            },
            {
                name: "MeytikhanyanHovsep",
                link: "https://github.com/MeytikhanyanHovsep",
                icon: (
                    <HugeiconsIcon
                        strokeWidth={2}
                        icon={GithubIcon}
                        className="w-5 text-primary mb-[2px]"
                    />
                ),
            },
        ],
    };
    const handleScroll = (id: string): null => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });

            window.history.pushState(null, "", window.location.pathname);
        }
        return null;
    };
    return (
        <footer
            id="contacts"
            className="bg-linear-to-t relative overflow-hidden max-w-screen pb-20 from-dark to-transparent"
        >
            <div className="container max-md:grid-cols-1 max-lg:grid max-lg:grid-cols-2 flex gap-7 justify-between pt-22 max-lg:py-10 pb-14">
                <div className="flex flex-col gap-4">
                    <Link href="/">
                        <Image
                            width={50}
                            height={50}
                            src="/images/icons/logo.svg"
                            alt="x"
                            className="object-contain max-2xl:w-[45px]"
                        />{" "}
                    </Link>
                    <p
                        className={
                            "text-gray max-2xl:text-[12px] text-[14px] " +
                            (lang ? " max-w-[260px]" : " max-w-[270px]")
                        }
                    >
                        {lang
                            ? "I create high-quality interfaces and turnkey websites. Based in Armenia, I work effectively across time zones to deliver projects of any complexity."
                            : "Создаю качественные интерфейсы и сайты под ключ. Базируюсь в Армении, работаю с часовыми поясами и проектами любой сложности"}
                    </p>
                    <p className="text-gray max-2xl:text-[12px] text-[14px]">
                        © 2022-{currentYear} Hovsep Meytikhanyan
                    </p>
                </div>
                <ul className="flex flex-col gap-3 max-md:max-w-max">
                    <li className="text-[20px] text-primary max-2xl:text-[18px] max-2xl:mb-1 mb-2">
                        {lang ? "Contacts" : "Контакты"}
                    </li>

                    {data.contacts.map((e, i) => (
                        <li key={i}>
                            <a
                                href={e.link}
                                target="_blank"
                                className="flex hover:scale-103 transition-all duration-300 hover:text-white will-change-transform text-[14px] items-center gap-2 text-gray"
                            >
                                {e.icon}
                                {e.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-col lg:items-center gap-3 max-md:max-w-max">
                    <h4 className="text-[20px] text-primary max-2xl:text-[18px] max-2xl:mb-1 mb-2">
                        {lang ? "Services" : "Услуги"}
                    </h4>
                    <ul className="grid max-w-max max-md:grid-cols-3 max-xl:gap-4 gap-x-3 gap-y-3 grid-cols-2">
                        {data.services.map((e, i) => (
                            <li key={i}>
                                <button
                                    onClick={() => handleScroll(e.link)}
                                    className="flex cursor-pointer transition-all will-change-transform duration-300 hover:text-white text-[14px] items-center hover:scale-105 gap-2 text-gray max-md:gap-1"
                                >
                                    {e.icon}
                                    <span className="max-xl:hidden max-md:block max-sm:hidden">
                                        {lang ? e.name[0] : e.name[1]}
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>{" "}
                <ul
                    id="form"
                    className="flex flex-col lg:ml-2 gap-3 max-md:max-w-max"
                >
                    <li className="text-[20px] text-primary max-2xl:text-[18px] max-2xl:mb-1 mb-2">
                        {lang ? "Get in Touch" : "Оставить заявку"}
                    </li>
                    <li className="max-w-full">
                        <form className="flex max-w-full gap-2">
                            <input
                                className="px-5 py-3 max-2xl:max-w-[150px] w-full max-w-[180px] rounded-[20px] bg-white/10 max-sm:min-w-[200px] outline-0 text-[14px]"
                                placeholder={lang ? "Email" : "Почта"}
                                type="email"
                            />
                            <button
                                type="submit"
                                className="text-dark max-2xl:px-4 max-2xl:text-[14px] cursor-pointer hover:text-primary grid place-items-center transition-colors duration-300 hover:to-transparent hover:from-transparent  border-2 font-semibold border-primary rounded-[20px] px-5 from-primary to-secondary bg-linear-to-r"
                            >
                                {lang ? "Send" : "Отправить"}
                            </button>
                        </form>
                    </li>
                    <li>
                        <div className="pyramid-loader">
                            <div className="wrapper">
                                <span className="side side1"></span>
                                <span className="side side2"></span>
                                <span className="side side3"></span>
                                <span className="side side4"></span>
                                <span className="shadow"></span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <SmoothWaves />
        </footer>
    );
});

export default Footer;

const SmoothWaves = () => {
    return (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full aspect-4/2 min-h-[200px] max-h-[250px] overflow-hidden rounded-xl shadow-2xl -z-1 bg-transparent">
            <div className="absolute bottom-0 w-full h-full opacity-20">
                <Wave
                    fill="#36ff9a"
                    paused={false}
                    style={{ display: "flex", height: "100%" }}
                    options={{
                        height: 20,
                        amplitude: 20,
                        speed: 0.15,
                        points: 4,
                    }}
                />
            </div>

            <div className="absolute bottom-0 w-full h-[95%] opacity-30">
                <Wave
                    fill="#36ff9a"
                    paused={false}
                    style={{ display: "flex", height: "100%" }}
                    options={{
                        height: 40,
                        amplitude: 30,
                        speed: 0.2,
                        points: 4,
                    }}
                />
            </div>

            <div className="absolute bottom-0 w-full h-[90%] opacity-50">
                <Wave
                    fill="#36ff9a"
                    paused={false}
                    style={{ display: "flex", height: "100%" }}
                    options={{
                        height: 60,
                        amplitude: 40,
                        speed: 0.25,
                        points: 5,
                    }}
                />
            </div>
        </div>
    );
};
