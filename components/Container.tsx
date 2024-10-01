import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
    className?: string;
    children?: React.ReactNode;
}

export const Container: React.FC<Props> = ({ className, children }) => {
    return (
        <div className={cn("w-full max-w-[1800px] mx-auto px-5 md:px-8 lg:px-10 xl:px-20", className)}>
            {children}
        </div>
    );
};
