import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useRouter } from 'next/router';

interface Props {
    className?: string;
}

export const Translation: React.FC<Props> = () => {
    const router = useRouter();
    const { locale } = router;
    const [localeValue, setLocaleValue] = useState<string | undefined>(locale);

    const changeLang = (e: string) => {
        const newLocale = e;
        router.push(
            { pathname: router.pathname, query: router.query },
            router.asPath,
            { locale: newLocale }
        );
        setLocaleValue(newLocale);
    };

    return (
        <Select onValueChange={changeLang}>
            <SelectTrigger className="w-[70px]">
                <SelectValue placeholder={localeValue?.toUpperCase()} />
            </SelectTrigger>
            <SelectContent className='w-[75px]'>
                <SelectItem value="ru">RU</SelectItem>
                <SelectItem value="en">EN</SelectItem>
                <SelectItem value="uz">UZ</SelectItem>
            </SelectContent>
        </Select>
    );
};
