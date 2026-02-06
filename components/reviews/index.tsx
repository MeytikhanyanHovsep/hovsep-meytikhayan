import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Item from "./item";
import Title from "../title";
type Props = { lang: boolean };

export default function Reviews({ lang }: Props) {
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
            <section className="relative pt-30">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[10%] h-[40px] -rotate-25 bg-radial from-primary/20 rounded-full to-transparent blur-md scale-[10] -z-10 pointer-events-none will-change-transform" />
                <div className="container z-20">
                    <Title index={3} dir="center">
                        {lang ? "Reviews" : "Отзывы"}
                    </Title>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={24}
                        loop={true}
                        modules={[Pagination, Navigation]}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={{
                            nextEl: ".custom-next",
                            prevEl: ".custom-prev",
                        }}
                        className="mySwiper pb-20!"
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
}
