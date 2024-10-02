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
            id: 2,
            name: "Emily Chen",
            occupation: "Marketing Manager",
            image: "/images/people/woman.jpg",
            quote: "I was skeptical about AI at first, but after using it for my company's financial reporting, I was blown away by how much time it saved me.",
        },
        {
            id: 3,
            name: "David Lee",
            occupation: "Financial Analyst",
            image: "/images/people/man_2.jpg",
            quote: "I was spending hours each week on financial analysis, but after implementing AI, I was able to free up 80% of my time.",
        },
        {
            id: 4,
            name: "Sophia Patel",
            occupation: "Business Owner",
            image: "/images/people/woman_2.webp",
            quote: "I was hesitant to trust AI with my business's financial data, but after seeing the results, I'm a believer. It's been a game-changer for me.",
        },
        {
            id: 5,
            name: "Michael Brown",
            occupation: "Accountant",
            image: "/images/people/man_3.jpg",
            quote: "I was spending so much time on data entry, but after implementing AI, I was able to automate the entire process.",
        },
        {
            id: 6,
            name: "Kevin White",
            occupation: "Financial Advisor",
            image: "/images/people/man_4.jpg",
            quote: "I was skeptical about AI at first, but after using it for my clients' financial planning, I was impressed by how accurate it was.",
        },
        {
            id: 7,
            name: "Olivia Davis",
            occupation: "Bookkeeper",
            image: "/images/people/woman.jpg",
            quote: "I was spending hours each week on bookkeeping, but after implementing AI, I was able to reduce my workload by 50%.",
        }
    ],
    ru: [
        {
            "id": 1,
            "name": "Джон Доу",
            "occupation": "Предприниматель",
            "image": "/images/people/man.jpg",
            "quote": "Время — мой самый ценный ресурс. Благодаря ИИ я вновь контролирую своё расписание, автоматизировав финансовые задачи."
        },
        {
            "id": 2,
            "name": "Эмили Чен",
            "occupation": "Менеджер по маркетингу",
            "image": "/images/people/woman.jpg",
            "quote": "Сначала я скептически относилась к ИИ, но после его использования для финансовой отчетности моей компании была поражена тем, сколько времени это сэкономило."
        },
        {
            "id": 3,
            "name": "Дэвид Ли",
            "occupation": "Финансовый аналитик",
            "image": "/images/people/man_2.jpg",
            "quote": "Я тратил часы каждую неделю на финансовый анализ, но после внедрения ИИ смог освободить 80% своего времени."
        },
        {
            "id": 4,
            "name": "София Патель",
            "occupation": "Владелец бизнеса",
            "image": "/images/people/woman_2.webp",
            "quote": "Я сомневалась в доверии к ИИ с финансовыми данными моего бизнеса, но увидев результаты, стала его сторонником. Это был прорыв для меня."
        },
        {
            "id": 5,
            "name": "Майкл Браун",
            "occupation": "Бухгалтер",
            "image": "/images/people/man_3.jpg",
            "quote": "Я тратил столько времени на ввод данных, но после внедрения ИИ смог автоматизировать весь процесс."
        },
        {
            "id": 6,
            "name": "Кевин Уайт",
            "occupation": "Финансовый консультант",
            "image": "/images/people/man_4.jpg",
            "quote": "Сначала я был скептически настроен по отношению к ИИ, но после его использования для финансового планирования клиентов был впечатлён его точностью."
        },
        {
            "id": 7,
            "name": "Оливия Дэвис",
            "occupation": "Бухгалтер",
            "image": "/images/people/woman.jpg",
            "quote": "Я тратила часы каждую неделю на ведение бухгалтерии, но после внедрения ИИ смогла сократить свою рабочую нагрузку на 50%."
        }
    ],
    uz: [
        {
            "id": 1,
            "name": "Jon Dou",
            "occupation": "Tadbirkor",
            "image": "/images/people/man.jpg",
            "quote": "Vaqt mening eng qimmatli resursim. Sun'iy intellekt tufayli moliyaviy vazifalarni avtomatlashtirib, jadvalim ustidan nazoratni qaytarib oldim."
        },
        {
            "id": 2,
            "name": "Emili Chen",
            "occupation": "Marketing menejeri",
            "image": "/images/people/woman.jpg",
            "quote": "Dastlab men sun'iy intellektga shubha bilan qarardim, ammo uni kompaniyamning moliyaviy hisobotlari uchun ishlatganimdan so'ng, qancha vaqt tejab qolganimdan hayratda qoldim."
        },
        {
            "id": 3,
            "name": "Devid Li",
            "occupation": "Moliyaviy tahlilchi",
            "image": "/images/people/man_2.jpg",
            "quote": "Men har hafta moliyaviy tahlilga soatlar sarflardim, lekin sun'iy intellektni joriy qilgandan keyin vaqtimning 80% ni bo'shatdim."
        },
        {
            "id": 4,
            "name": "Sofiya Patel",
            "occupation": "Biznes egasi",
            "image": "/images/people/woman_2.webp",
            "quote": "Men sun'iy intellektga biznesimning moliyaviy ma'lumotlarini ishonishdan qo'rqardim, lekin natijalarni ko'rib, bu men uchun muhim burilish bo'ldi."
        },
        {
            "id": 5,
            "name": "Maykl Braun",
            "occupation": "Buxgalter",
            "image": "/images/people/man_3.jpg",
            "quote": "Men ma'lumot kiritishga juda ko'p vaqt sarflardim, ammo sun'iy intellektni joriy qilgandan keyin butun jarayonni avtomatlashtira oldim."
        },
        {
            "id": 6,
            "name": "Kevin Uayt",
            "occupation": "Moliyaviy maslahatchi",
            "image": "/images/people/man_4.jpg",
            "quote": "Dastlab men sun'iy intellektga shubha bilan qarardim, lekin uni mijozlarimning moliyaviy rejalari uchun ishlatganimdan so'ng, uning qanchalik aniqligidan hayratda qoldim."
        },
        {
            "id": 7,
            "name": "Oliviya Devis",
            "occupation": "Buxgalter",
            "image": "/images/people/woman.jpg",
            "quote": "Har hafta buxgalteriyaga soatlab vaqt ajratardim, ammo sun'iy intellektni joriy qilgandan keyin ish yukimni 50% ga kamaytirdim."
        }
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
                                    <Avatar className="w-32 h-32 absolute -top-20 p-4 border-[1px] bg-white border-white">
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
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <div className="swiper-button-prev" />
                <div className="swiper-button-next" />
            </div>
        </div>
    );
}
