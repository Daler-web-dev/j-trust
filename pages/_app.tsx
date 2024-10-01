import TranslateContext from "@/contexts/useTranslate";
import Layout from "@/layouts/Layout";
import { en } from "@/locales/en/en";
import { ru } from "@/locales/ru/ru";
import { uz } from "@/locales/uz/uz";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {


    const router = useRouter();
    const { locale } = router;

    const translation = locale === "uz" ? uz : locale === "ru" ? ru : en;    

    return (
        <TranslateContext.Provider value={translation}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </TranslateContext.Provider>
    )
}