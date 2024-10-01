import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Translation } from './Translation';
import Link from 'next/link';
import { NavBarSheet } from './NavBarSheet';
import NavBar from './NavBar';

interface Props {
    className?: string;
    translation: {
        nav: {
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
}

export const Header: React.FC<Props> = ({ className, translation }) => {
    return (
        <div className={cn("flex justify-between items-center gap-5 py-5 md:py-8 lg:py-10", className)}>
            <Link href='/'>
                {/* <Image src={"/images/logo.png"} width={200} height={200} alt={"logo"} /> */}
                <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold'>J-<span className='text-cblue'>TRUST</span></h2>
            </Link>

            <NavBar translation={translation.nav} />

            <div className='flex justify-center items-center gap-5'>
                <Translation />

                <NavBarSheet translation={translation.nav} />

                <div className='max-h-[50px] flex flex-col justify-center items-center max-xl:hidden'>
                    <a href={`tel:${translation?.nav?.links?.number_1}`} target='_blank' className='text-sm sm:text-base md:text-lg font-medium text-gray-500 cursor-pointer truncate'>{translation?.nav?.links?.number_1}</a>
                    <a href={`tel:${translation?.nav?.links?.number_2}`} target='_blank' className='text-sm sm:text-base md:text-lg font-medium text-gray-500 cursor-pointer truncate'>{translation?.nav?.links?.number_2}</a>
                </div>

                <Button className='max-lg:hidden h-[50px] w-[100px] sm:w-[120px] md:w-[150px] lg:w-[200px] rounded-full bg-cblue hover:bg-blue-600 text-sm sm:text-base md:text-lg font-medium cursor-pointer truncate'>
                    {translation?.nav?.links?.button_text}
                </Button>
            </div>
        </div>
    );
};
