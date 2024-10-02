import { Container } from "@/components/Container";
import FinancialAILayout from "@/components/FinancialLayoutsInfo";
import Forma from "@/components/Forma";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import TranslateContext from "@/contexts/useTranslate";
import localFont from "next/font/local";
import Link from "next/link";
import { useContext } from "react";


const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default function Home() {
    const translation = useContext(TranslateContext)
    return (
        <div className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
            <Separator />
            <Hero translation={translation.hero} />
            {/* <Container className="py-20">
                <QuickStart />
            </Container> */}
            <Container>
                <FinancialAILayout translation={translation.financial} />
            </Container>
            <Separator />
            {/* <ReviewSwiper /> */}
            <Container className="flex flex-col md:flex-row justify-center items-start gap-5 my-10 px-4">
                <Card className="w-full md:w-[80%] lg:w-[60%]">
                    <CardHeader>
                        <CardTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 md:mb-10">
                            {translation.servicesWeOffer.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                            {translation.servicesWeOffer.text_1}
                        </p>
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-4">
                            {translation.servicesWeOffer.text_2}
                        </p>
                    </CardContent>
                    <CardFooter className="mt-4">
                        <Link href="/">
                            <Button size="lg" className="w-full sm:w-auto bg-cblue hover:bg-blue-600 text-white text-lg py-4 sm:px-16 sm:py-5">
                                {translation.servicesWeOffer.button}
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
                <Forma translation={translation.forma} />
            </Container>
        </div>
    );
}
