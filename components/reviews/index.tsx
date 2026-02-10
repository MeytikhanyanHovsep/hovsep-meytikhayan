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
            name: "Jordidsx",
            type: "company",
            desc: " Разверстал большой проект очень быстро. Все замечания оперативно правились.",
            stars: 5,
            img: "https://cdn-edge.kwork.ru/files/avatar/medium/08/4365832-1.jpg",
        },
        {
            name: "Jordidsx",
            type: "company",
            desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat culpa officiis earum odit ullam atque, natus",
            stars: 3,
            img: "https://cdn-edge.kwork.ru/files/avatar/medium/08/4365832-1.jpg",
        },
        {
            name: "Jordidsx",
            type: "company",
            desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat culpa officiis earum odit ullam atque, natus",
            stars: 3,
            img: "https://cdn-edge.kwork.ru/files/avatar/medium/08/4365832-1.jpg",
        },
        {
            name: "Jordidsx",
            type: "company",
            desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat culpa officiis earum odit ullam atque, natus",
            stars: 3,
            img: "https://cdn-edge.kwork.ru/files/avatar/medium/08/4365832-1.jpg",
        },
        {
            name: "Jordidsx",
            type: "company",
            desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat culpa officiis earum odit ullam atque, natus",
            stars: 3,
            img: "https://cdn-edge.kwork.ru/files/avatar/medium/08/4365832-1.jpg",
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
                        slidesPerView={1}
                        spaceBetween={8}
                        loop={true}
                        modules={[Pagination, Navigation]}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            576: {
                                slidesPerView: 2,
                            },
                            768: {
                                spaceBetween: 16,
                            },

                            1024: {
                                slidesPerView: 3,
                            },
                            1440: {
                                spaceBetween: 24,
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
                                <Item {...e} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
});

export default Reviews;
