import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from "next/router";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";

// Define the type for locales
type Locale = "en" | "ru" | "uz";

// Ensure reviews object matches Locale type
const reviews: Record<Locale, { id: number; name: string; occupation: string; image: string; quote: string }[]> = {
    en: [
        {
            id: 1,
            name: "John Doe",
            occupation: "Entrepreneur",
            image: "/images/people/man.jpg",
            quote: "Time is my most valuable asset. Thanks to AI, I've regained control of my schedule by automating financial tasks.",
        },
        {
            id: 1,
            name: "John Doe",
            occupation: "Entrepreneur",
            image: "/images/people/man.jpg",
            quote: "Time is my most valuable asset. Thanks to AI, I've regained control of my schedule by automating financial tasks.",
        },
        {
            id: 1,
            name: "John Doe",
            occupation: "Entrepreneur",
            image: "/images/people/man.jpg",
            quote: "Time is my most valuable asset. Thanks to AI, I've regained control of my schedule by automating financial tasks.",
        },
        {
            id: 1,
            name: "John Doe",
            occupation: "Entrepreneur",
            image: "/images/people/man.jpg",
            quote: "Time is my most valuable asset. Thanks to AI, I've regained control of my schedule by automating financial tasks.",
        },
        {
            id: 1,
            name: "John Doe",
            occupation: "Entrepreneur",
            image: "/images/people/man.jpg",
            quote: "Time is my most valuable asset. Thanks to AI, I've regained control of my schedule by automating financial tasks.",
        },
        {
            id: 1,
            name: "John Doe",
            occupation: "Entrepreneur",
            image: "/images/people/man.jpg",
            quote: "Time is my most valuable asset. Thanks to AI, I've regained control of my schedule by automating financial tasks.",
        },
        // ... more reviews
    ],
    ru: [
        {
            id: 1,
            name: "Джон Доу",
            occupation: "Предприниматель",
            image: "/images/people/man.jpg",
            quote: "Время — мой самый ценный ресурс. Благодаря ИИ, я снова контролирую свое расписание.",
        },
        {
            id: 1,
            name: "Джон Доу",
            occupation: "Предприниматель",
            image: "/images/people/man.jpg",
            quote: "Время — мой самый ценный ресурс. Благодаря ИИ, я снова контролирую свое расписание.",
        },
        {
            id: 1,
            name: "Джон Доу",
            occupation: "Предприниматель",
            image: "/images/people/man.jpg",
            quote: "Время — мой самый ценный ресурс. Благодаря ИИ, я снова контролирую свое расписание.",
        },
        {
            id: 1,
            name: "Джон Доу",
            occupation: "Предприниматель",
            image: "/images/people/man.jpg",
            quote: "Время — мой самый ценный ресурс. Благодаря ИИ, я снова контролирую свое расписание.",
        },
        {
            id: 1,
            name: "Джон Доу",
            occupation: "Предприниматель",
            image: "/images/people/man.jpg",
            quote: "Время — мой самый ценный ресурс. Благодаря ИИ, я снова контролирую свое расписание.",
        },
        {
            id: 1,
            name: "Джон Доу",
            occupation: "Предприниматель",
            image: "/images/people/man.jpg",
            quote: "Время — мой самый ценный ресурс. Благодаря ИИ, я снова контролирую свое расписание.",
        },
        {
            id: 1,
            name: "Джон Доу",
            occupation: "Предприниматель",
            image: "/images/people/man.jpg",
            quote: "Время — мой самый ценный ресурс. Благодаря ИИ, я снова контролирую свое расписание.",
        },
        {
            id: 1,
            name: "Джон Доу",
            occupation: "Предприниматель",
            image: "/images/people/man.jpg",
            quote: "Время — мой самый ценный ресурс. Благодаря ИИ, я снова контролирую свое расписание.",
        },
        // ... more reviews
    ],
    uz: [
        {
            id: 1,
            name: "Jon Do",
            occupation: "Tadbirkor",
            image: "/images/people/man.jpg",
            quote: "Vaqt — mening eng qadrli boyligim. Sun'iy intellekt tufayli nazoratni qayta tikladim.",
        },
        {
            id: 1,
            name: "Jon Do",
            occupation: "Tadbirkor",
            image: "/images/people/man.jpg",
            quote: "Vaqt — mening eng qadrli boyligim. Sun'iy intellekt tufayli nazoratni qayta tikladim.",
        },
        {
            id: 1,
            name: "Jon Do",
            occupation: "Tadbirkor",
            image: "/images/people/man.jpg",
            quote: "Vaqt — mening eng qadrli boyligim. Sun'iy intellekt tufayli nazoratni qayta tikladim.",
        },
        {
            id: 1,
            name: "Jon Do",
            occupation: "Tadbirkor",
            image: "/images/people/man.jpg",
            quote: "Vaqt — mening eng qadrli boyligim. Sun'iy intellekt tufayli nazoratni qayta tikladim.",
        },
        {
            id: 1,
            name: "Jon Do",
            occupation: "Tadbirkor",
            image: "/images/people/man.jpg",
            quote: "Vaqt — mening eng qadrli boyligim. Sun'iy intellekt tufayli nazoratni qayta tikladim.",
        },
        {
            id: 1,
            name: "Jon Do",
            occupation: "Tadbirkor",
            image: "/images/people/man.jpg",
            quote: "Vaqt — mening eng qadrli boyligim. Sun'iy intellekt tufayli nazoratni qayta tikladim.",
        },
        {
            id: 1,
            name: "Jon Do",
            occupation: "Tadbirkor",
            image: "/images/people/man.jpg",
            quote: "Vaqt — mening eng qadrli boyligim. Sun'iy intellekt tufayli nazoratni qayta tikladim.",
        },
        {
            id: 1,
            name: "Jon Do",
            occupation: "Tadbirkor",
            image: "/images/people/man.jpg",
            quote: "Vaqt — mening eng qadrli boyligim. Sun'iy intellekt tufayli nazoratni qayta tikladim.",
        },
        // ... more reviews
    ],
};

export default function ReviewSwiper() {
    const router = useRouter();
    const locale = (router.locale as Locale) || "ru"; // Default to 'ru'
    const localeReviews = reviews[locale] || []; // Get reviews for the current locale

    return (
        <div className="relative px-4 py-8 my-20">
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={3}
                navigation={{
                    prevEl: ".swiper-button-next",
                    nextEl: ".swiper-button-prev",
                }}
                loop={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                {localeReviews.map((review) => (
                    <SwiperSlide key={review.id} className="py-10">
                        <Card className="bg-background/50 backdrop-blur-lg mb-6 select-none bg-gray-50 rounded-2xl flex flex-col justify-between" style={{ width: '100%', height: '300px' }}>
                            <CardContent className="p-6 flex flex-col justify-between" style={{ flexGrow: 1 }}>
                                <div className="flex flex-col items-center text-center space-y-4 relative pt-20 md:pt-24 ">
                                    <Avatar className="w-32 h-32 absolute -top-20 !z-10 border-[10px] border-white">
                                        <AvatarImage
                                            src={review.image}
                                            alt={review.name}
                                            loading="lazy"
                                            className="object-cover border border-gray-200 rounded-full"
                                        />
                                    </Avatar>
                                    <blockquote className="text-lg text-muted-foreground">
                                        {review.quote.length < 100
                                            ? `"${review.quote}"`
                                            : `${review.quote.substring(0, 100)}...`}
                                    </blockquote>
                                    <div>
                                        <h3 className="font-semibold">{review.name}</h3>
                                        <p className="text-sm text-muted-foreground">
                                            {review.occupation}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Navigation Buttons */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <div className="swiper-button-prev" />
                <div className="swiper-button-next" />
            </div>
        </div>
    );
}
