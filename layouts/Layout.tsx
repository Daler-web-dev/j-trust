import { Header } from "@/components/Header";
import { Container } from "@/components/Container";
import Footer from "@/components/Footer";
import { useContext } from "react";
import TranslateContext from "@/contexts/useTranslate";
import { Toaster } from "@/components/ui/toaster";


type Layout = {
    children: React.ReactNode;
};

const Layout = ({ children }: Layout) => {
    const translation: any = useContext(TranslateContext);

    return (
        <>
            <Container>
                <Header translation={translation?.header} />
            </Container>
            <main>{children}</main>
            <Footer translation={translation?.footer} />
            <Toaster />
        </>
    );
};

export default Layout;
