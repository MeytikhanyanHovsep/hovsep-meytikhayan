import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { memo } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import Item from "./item";
import Title from "../title";
type Props = { lang: boolean };

const Reviews = memo(function Reviews({ lang }: Props) {
    const reviews = [
        {
            name: "Mikhail",
            type: "u",
            desc: [
                "Excellent contractor! Did everything quickly and with high quality, took all my wishes into account, fixed the website revisions promptly, and was always in touch. Definitely recommend this contractor!",
                "Отличный исполнитель! Сделал все быстро и качественно, все мои пожелания учел, доработки по сайту исправил быстро, всегда был на связи. Однозначно рекомендую данного исполнителя! !",
            ],
            stars: 5,
            img: "mikhail.webp",
        },
        {
            name: "Alexander",
            type: "u",
            desc: [
                "The contractor approached the task responsibly, refined the website, and made their own positive adjustments in agreement with me! Definitely recommend working with them, and I’ll be reaching out to them again myself!",
                "Исполнитель ответсвенно отнесся к задаче, доработал сайт и внес свои положительные корректировки согласовав со мной! Однозначно рекомендую к сотрудничеству, и сам еще ни раз обращусь к нему!",
            ],
            stars: 5,
            img: "alexander.webp",
        },
        {
            name: "Innovatix",
            type: "c",
            desc: [
                "Satisfied with the cooperation, revisions were made promptly, thanks)",
                "Довольны с сотрудничеством, правки были сделаны оперативно, спасибо)",
            ],
            stars: 5,
            img: "innovatixdev.webp",
        },

        {
            name: "Alex",
            type: "u",
            desc: [
                "Laid out a large project very quickly. All comments were promptly fixed.",
                "Разверстал большой проект очень быстро. Все замечания оперативно правились.",
            ],
            stars: 5,
            img: "alex.webp",
        },
        {
            name: "Andrey",
            type: "u",
            desc: [
                "Быстро, качественно, в сроки, хорошо выполнен заказ",
                "Fast, high quality, on time — the order was well done.",
            ],
            stars: 5,
            img: "andrey.webp",
        },
        {
            name: "Andrey Bolonin",
            type: "u",
            desc: [
                "1) The task was to lay out a landing page according to the design \n 2) The contractor was always in touch \n 3) Promptly made all revisions — thank you! We’ll reach out again",
                "1) была задача сверстать лендинг по макету \n  2) исполнитель всегда был на связи \n 3) оперативно вносил все правки спасибо! будем обращаться",
            ],
            stars: 5,
            img: "andreybolinin.webp",
        },

        {
            name: "Mher",
            type: "u",
            desc: [
                "The specialist did everything well, responds quickly to all questions, and explains everything clearly. I really liked it — I’ll continue working with this freelancer.",
                "Специалист выполнил все хорошо, отвечает оперативно по всем вопросам отвечает понятным языком. Все очень понравилось, буду и дальше сотрудничать с этим фрилансером.",
            ],
            stars: 5,
            img: "mher.webp",
        },
    ];
    return (
        <>
            <section
                id="reviews"
                className="relative  py-30 max-md:py-10 max-2xl:py-20"
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 max-sm:w-[60%] -translate-y-1/2 w-[80%] h-[350px] -rotate-25 bg-radial from-primary/20 rounded-full blur-md via-transparent to-transparent   -z-10 pointer-events-none will-change-transform" />
                <div className="container z-20">
                    <Title index={3} dir="center">
                        {lang ? "Reviews" : "Отзывы"}
                    </Title>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={8}
                        slidesPerGroup={1}
                        loop={true}
                        modules={[Pagination, Navigation]}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            1440: {
                                spaceBetween: 24,
                            },

                            1024: {
                                slidesPerView: 3,
                            },
                            768: {
                                spaceBetween: 16,
                            },

                            576: {
                                slidesPerGroup: 2,
                            },
                            0: {
                                slidesPerView: 1,
                            },
                        }}
                        navigation={{
                            nextEl: ".custom-next",
                            prevEl: ".custom-prev",
                        }}
                        className="mySwiper max-2xl:pb-17! max-md:mb-0 pb-20!"
                        style={{
                            WebkitMaskImage:
                                "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                            maskImage:
                                "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                        }}
                    >
                        {reviews.map((e, i) => (
                            <SwiperSlide key={i}>
                                <Item lang={lang} {...e} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
});

export default Reviews;
