import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "./ui/card";

const about_company_links = ["/certificates", "/audit-certificates", "/about/vacancies", "/about/clients", "/about/founders", "/work-principles", "/about/our-specialists", "/about/management"];
const services_links = ["/services/general-information", "/services/audit-technology", "/services/methodology-of-provided-services", "/services/required-audit", "/services/initiative-audit", "/services/project-scholarship-audit", "/services/consulting", "/services/accounting-services"];
const more_links = ["/audit-reports", "/became-a-client", "/help"]

export default function Footer({ translation }: {
    translation: {
        address: {
            title: string;
            street: string;
            street2: string;
        };
        about: {
            title: string;
            p1: string;
            p2: string;
            p3: string;
            p4: string;
            p5: string;
            p6: string;
            p7: string;
            p8: string;
        };
        services: {
            title: string;
            p1: string;
            p2: string;
            p3: string;
            p4: string;
            p5: string;
            p6: string;
            p7: string;
            p8: string;
        };
        more: {
            title: string;
            auditReports: string;
            becameAClient: {
                title: string;
                p1: string;
            };
        };
        contacts: {
            title: string;
            email: string;
            number_1: string;
            number_2: string;
        };
        company: {
            title: string;
            termsAndConditions: string;
            privacyPolicy: string;
        };
    }
}) {
    return (
        <Card className="w-full mx-auto my-20" id="footer">
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
                <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                    <div className="flex items-center mb-4">
                        <Link href="/">
                            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold'>J-<span className='text-cblue'>TRUST</span></h2>
                        </Link>
                    </div>
                    <address className="not-italic">
                        <h3 className="font-semibold text-base lg:text-lg mb-2 text-gray-500">{translation?.address?.title}</h3>
                        <p className="font-normal text-sm lg:text-base text-gray-500 mb-2">{translation?.address?.street}</p>
                        <p className="font-normal text-sm lg:text-base text-gray-500">{translation?.address?.street2}</p>
                    </address>
                </div>

                <div>
                    <Link href="/about">
                        <Button variant="link" className="p-0 h-auto">
                            <h3 className="font-semibold text-base lg:text-lg mb-4">{translation?.about?.title}</h3>
                        </Button>
                    </Link>
                    <ul className="space-y-2">
                        {/* translation?.about?.p4 , translation?.about?.p7*/}
                        {[translation?.about?.p1, translation?.about?.p2, translation?.about?.p3, , translation?.about?.p5, translation?.about?.p6, translation?.about?.p8].map((item, idx) => (
                            <li key={item}>
                                <Link href={about_company_links[idx]}>
                                    <Button variant="link" className="text-sm lg:text-base p-0 h-auto text-gray-500">{item}</Button>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <Link href="/services">
                        <Button variant="link" className="p-0 h-auto">
                            <h3 className="font-semibold text-base lg:text-lg mb-4">{translation?.services?.title}</h3>
                        </Button>
                    </Link>
                    <ul className="space-y-2">
                        {[translation?.services?.p1, translation?.services?.p2, translation?.services?.p3, translation?.services?.p4, translation?.services?.p5, translation?.services?.p6, translation?.services?.p7, translation?.services?.p8].map((item, idx) => (
                            <li key={item}>
                                <Link href={services_links[idx]}>
                                    <Button variant="link" className="text-sm lg:text-base p-0 h-auto text-gray-500">{item}</Button>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-base lg:text-lg mb-4">{translation?.more?.title}</h3>
                    <ul className="space-y-2">
                        {[translation?.more?.auditReports, translation?.more?.becameAClient?.title, translation?.more?.becameAClient?.p1].map((item, idx) => (
                            <Link href={more_links[idx]} key={item}>
                                <li>
                                    <Button variant="link" className="text-sm lg:text-base p-0 h-auto text-gray-500">{item}</Button>
                                </li>
                            </Link>
                        ))}
                    </ul>

                    <h3 className="font-semibold text-base lg:text-lg mt-6 mb-2">{translation?.contacts?.title}</h3>
                    <a href={`mailto:${translation?.contacts?.email}`} className="text-sm lg:text-base block hover:underline text-gray-500">{translation?.contacts?.email}</a>
                    <a href={`tel:${translation?.contacts?.number_1}`} className="text-sm lg:text-base block hover:underline text-gray-500">{translation?.contacts?.number_1}</a>
                    <a href={`tel:${translation?.contacts?.number_2}`} className="text-sm lg:text-base block hover:underline text-gray-500">{translation?.contacts?.number_2}</a>
                </div>
            </CardContent>

            <Separator />

            <CardFooter className="flex flex-col sm:flex-row justify-between items-center sm:py-6 lg:py-8 space-y-4 sm:space-y-0">
                <p className="text-muted-foreground text-sm lg:text-base order-3 sm:order-1">© 2024 {translation?.company?.title}</p>
                <div className="flex space-x-2 order-1 sm:order-2">
                    <Button variant="outline" size="icon">
                        <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                        <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                        <Facebook className="h-4 w-4" />
                    </Button>
                </div>
                <div className="flex space-x-4 order-2 sm:order-3 flex-col md:flex-row">
                    <Button variant="link" className="text-muted-foreground text-sm lg:text-base p-0 h-auto">{translation?.company?.termsAndConditions}</Button>
                    <Button variant="link" className="text-muted-foreground text-sm lg:text-base p-0 h-auto">{translation?.company?.privacyPolicy}</Button>
                </div>
            </CardFooter>
        </Card>
    );
}