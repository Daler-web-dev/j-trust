import React, { useState } from 'react';
import { cn } from '@/lib/utils';

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

export const CustomNavBar: React.FC<Props> = ({ className, translation }) => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const menuItems = [
        { key: 'home', label: translation?.home, href: '/' },
        {
            key: 'about',
            label: translation?.about?.title,
            href: '/about',
            children: [
                { key: 'p1', label: translation?.about?.p1, href: '/certificates' },
                { key: 'p2', label: translation?.about?.p2, href: '/audit-certificates' },
                { key: 'p3', label: translation?.about?.p3, href: '/about/vacancies' },
                // { key: 'p4', label: translation?.about?.p4, href: '/about/clients' },
                { key: 'p5', label: translation?.about?.p5, href: '/about/founders' },
                { key: 'p6', label: translation?.about?.p6, href: '/work-principles' },
                { key: 'p7', label: translation?.about?.p7, href: '/about/our-specialists' },
                { key: 'p8', label: translation?.about?.p8, href: '/about/management' },
            ],
        },
        {
            key: 'services',
            label: translation?.services?.title,
            href: '/services',
            children: [
                { key: 'p1', label: translation?.services?.p1, href: '/services/general-information' },
                { key: 'p2', label: translation?.services?.p2, href: '/services/crisis-management' },
                { key: 'p3', label: translation?.services?.p3, href: '/services/procedure-due-diligence' },
                { key: 'p4', label: translation?.services?.p4, href: '/services/required-audit' },
                { key: 'p5', label: translation?.services?.p5, href: '/services/initiative-audit' },
                { key: 'p6', label: translation?.services?.p6, href: '/services/project-scholarship-audit' },
                { key: 'p7', label: translation?.services?.p7, href: '/services/consulting' },
                { key: 'p8', label: translation?.services?.p8, href: '/services/accounting-services' },
            ],
        },
        {
            key: 'becameAClient',
            label: translation?.becameAClient?.title,
            href: '/became-a-client',
            children: [
                { key: 'p1', label: translation?.becameAClient?.p1, href: '/help' },
            ],
        },
        { key: 'auditReports', label: translation?.auditReports, href: '/audit-reports' },
    ];

    const handleMouseEnter = (key: string) => {
        setActiveDropdown(key);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <nav className={cn("relative", className)}>
            <ul className="flex justify-center items-center space-x-4">
                {menuItems.map((item) => (
                    <li key={item.key} className="relative">
                        <a
                            href={item.href}
                            className="text-sm sm:text-lg lg:text-xl font-medium truncate text-gray-400 hover:text-black p-2 rounded-sm"
                            onMouseEnter={() => handleMouseEnter(item.key)}
                            onMouseLeave={handleMouseLeave}
                            tabIndex={0} // Support keyboard focus
                        >
                            {item.label}
                        </a>
                        {item.children && activeDropdown === item.key && (
                            <ul
                                className="absolute left-0 mt-0 w-[250px] bg-white border border-gray-200 rounded-md shadow-lg z-10"
                                onMouseEnter={() => handleMouseEnter(item.key)}
                                onMouseLeave={handleMouseLeave}
                                onFocus={() => handleMouseEnter(item.key)} // Handle keyboard focus
                                onBlur={handleMouseLeave} // Handle keyboard blur
                            >
                                {item.children.map((subItem) => (
                                    <li key={subItem.key}>
                                        <a
                                            href={subItem.href}
                                            className="block w-full truncate text-sm sm:text-base md:text-lg font-medium hover:bg-gray-50 p-2 rounded-sm"
                                            tabIndex={0} // Keyboard focus for sub-items
                                        >
                                            {subItem.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default function NavBar({ className, translation }: Props) {
    return (
        <div className={cn(className)}>
            <div className="hidden lg:block">
                <CustomNavBar translation={translation} />
            </div>
        </div>
    );
}