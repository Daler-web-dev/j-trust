import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';
import { Menu } from 'lucide-react'; // Icons for mobile menu
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
    className?: string;
    translation: {
        home: string;
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
        auditReports: string;
        becameAClient: {
            title: string;
            p1: string;
        };
        links: {
            number_1: string;
            number_2: string;
            button_text: string;
        };
    };
}

export const NavBarSheet: React.FC<Props> = ({ className, translation }) => {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const { locale } = router;

    const handleLinkClick = () => {
        setOpen(false); // Close the sheet
    };

    return (
        <div className={cn(className)}>
            <div className="lg:hidden">
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <button className="text-gray-400 p-2">
                            <Menu size={28} />
                        </button>
                    </SheetTrigger>
                    <SheetContent side="left" className="p-4 w-[250px] bg-white flex flex-col justify-between items-start py-10">
                        <ul className="flex flex-col gap-2 w-full">
                            {/* Home Link */}
                            <li>
                                <Link href={`/${locale}`} onClick={handleLinkClick} className="text-base md:text-lg font-medium text-gray-700 hover:bg-gray-200 p-2 rounded-md">
                                    {translation?.home}
                                </Link>
                            </li>

                            {/* About Section Accordion */}
                            <Accordion type="single" collapsible>
                                <AccordionItem value="about">
                                    <AccordionTrigger className="text-base md:text-lg font-medium text-gray-700 hover:bg-gray-200 p-2 rounded-md flex justify-start items-center gap-5 hover:no-underline">
                                        {translation?.about?.title}
                                    </AccordionTrigger>
                                    <AccordionContent className="ml-4 flex flex-col">
                                        <Link href="/about" onClick={handleLinkClick} className="text-base md:text-lg hover:text-black hover:bg-gray-100 p-1 rounded-md">
                                            {translation?.about?.title}
                                        </Link>
                                        <Link href="/certificates" onClick={handleLinkClick} className="text-base md:text-lg hover:text-black hover:bg-gray-100 p-1 rounded-md">
                                            {translation?.about?.p1}
                                        </Link>
                                        <Link href="/audit-certificates" onClick={handleLinkClick} className="text-base md:text-lg hover:text-black hover:bg-gray-100 p-1 rounded-md">
                                            {translation?.about?.p2}
                                        </Link>
                                        <Link href="/about/vacancies" onClick={handleLinkClick} className="text-base md:text-lg hover:text-black hover:bg-gray-100 p-1 rounded-md">
                                            {translation?.about?.p3}
                                        </Link>
                                        {/* <Link href="/about/clients" onClick={handleLinkClick} className="text-base md:text-lg hover:text-black hover:bg-gray-100 p-1 rounded-md">
                                            {translation?.about?.p4}
                                        </Link> */}
                                        <Link href="/about/founders" onClick={handleLinkClick} className="text-base md:text-lg hover:text-black hover:bg-gray-100 p-1 rounded-md">
                                            {translation?.about?.p5}
                                        </Link>
                                        <Link href="/work-principles" onClick={handleLinkClick} className="text-base md:text-lg hover:text-black hover:bg-gray-100 p-1 rounded-md">
                                            {translation?.about?.p6}
                                        </Link>
                                        {/* <Link href="/about/our-specialists" onClick={handleLinkClick} className="text-base md:text-lg hover:text-black hover:bg-gray-100 p-1 rounded-md">
                                            {translation?.about?.p7}
                                        </Link> */}
                                        <Link href="/about/management" onClick={handleLinkClick} className="text-base md:text-lg hover:text-black hover:bg-gray-100 p-1 rounded-md">
                                            {translation?.about?.p8}
                                        </Link>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            {/* Services Section Accordion */}
                            <Accordion type="single" collapsible>
                                <AccordionItem value="services">
                                    <AccordionTrigger className="text-base md:text-lg font-medium text-gray-700 hover:bg-gray-200 p-2 rounded-md flex justify-start items-center gap-5 hover:no-underline">
                                        {translation?.services?.title}
                                    </AccordionTrigger>
                                    <AccordionContent className="ml-4 flex flex-col">
                                        <Link href="/services" onClick={handleLinkClick} className="text-base md:text-lg hover:text-black hover:bg-gray-100 p-1 rounded-md">
                                            {translation?.services?.title}
                                        </Link>
                                        <Link href="/services/general-information" onClick={handleLinkClick} className="text-base md:text-lg hover:text-black hover:bg-gray-100 p-1 rounded-md">
                                            {translation?.services?.p1}
                                        </Link>
                                        <Link href="/services/crisis-management" onClick={handleLinkClick} className="text-base md:text-lg hover:text-black hover:bg-gray-100 p-1 rounded-md">
                                            {translation?.services?.p2}
                                        </Link>
                                        <Link href="/services/procedure-due-diligence" onClick={handleLinkClick} className="text-base md:text-lg hover:text-black hover:bg-gray-100 p-1 rounded-md">
                                            {translation?.services?.p3}
                                        </Link>
                                        <Link href="/services/required-audit" onClick={handleLinkClick} className="text-base md:text-lg hover:text-black hover:bg-gray-100 p-1 rounded-md">
                                            {translation?.services?.p4}
                                        </Link>
                                        <Link href="/services/initiative-audit" onClick={handleLinkClick} className="text-base md:text-lg hover:text-black hover:bg-gray-100 p-1 rounded-md">
                                            {translation?.services?.p5}
                                        </Link>
                                        <Link href="/services/project-scholarship-audit" onClick={handleLinkClick} className="text-base md:text-lg hover:text-black hover:bg-gray-100 p-1 rounded-md">
                                            {translation?.services?.p6}
                                        </Link>
                                        <Link href="/services/consulting" onClick={handleLinkClick} className="text-base md:text-lg hover:text-black hover:bg-gray-100 p-1 rounded-md">
                                            {translation?.services?.p7}
                                        </Link>
                                        <Link href="/services/accounting-services" onClick={handleLinkClick} className="text-base md:text-lg hover:text-black hover:bg-gray-100 p-1 rounded-md">
                                            {translation?.services?.p8}
                                        </Link>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            {/* Became a Client Section Accordion */}
                            <Accordion type="single" collapsible>
                                <AccordionItem value="becameAClient">
                                    <AccordionTrigger className="text-base md:text-lg font-medium text-gray-700 hover:bg-gray-200 p-2 rounded-md flex justify-start items-center gap-5 hover:no-underline">
                                        {translation?.becameAClient?.title}
                                    </AccordionTrigger>
                                    <AccordionContent className="ml-4 flex flex-col">
                                        <Link href="/became-a-client" onClick={handleLinkClick} className="text-base md:text-lg hover:text-black hover:bg-gray-100 p-1 rounded-md">
                                            {translation?.becameAClient?.title}
                                        </Link>
                                        <Link href="/help" onClick={handleLinkClick} className="text-base md:text-lg hover:text-black hover:bg-gray-100 p-1 rounded-md">
                                            {translation?.becameAClient?.p1}
                                        </Link>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            {/* Audit Reports Link */}
                            <li>
                                <Link href="/audit-reports" onClick={handleLinkClick} className="text-base md:text-lg font-medium text-gray-700 hover:bg-gray-200 p-2 rounded-md">
                                    {translation?.auditReports}
                                </Link>
                            </li>
                        </ul>

                        {/* Contact Information */}
                        <div className='flex justify-center items-start gap-2 flex-col w-full'>
                            <div className="flex flex-col items-start mt-4">
                                <a href={`tel:${translation?.links?.number_1}`} className="text-gray-500 text-base md:text-lg">{translation?.links?.number_1}</a>
                                <a href={`tel:${translation?.links?.number_2}`} className="text-gray-500 text-base md:text-lg">{translation?.links?.number_2}</a>
                            </div>

                            {/* Contact Button */}
                            {/* <Button className="mt-5 w-full rounded-full bg-cblue hover:bg-blue-600 text-sm font-medium">
                                {translation?.links?.button_text}
                            </Button> */}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div >
    );
};
