import React, { useContext } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/Container';
import TranslateContext from '@/contexts/useTranslate';
import BecameAClientForm from './BecameAClientForm';
import { CardTitle } from '@/components/ui/card';

interface Props {
    className?: string;
}

export interface TranslationContextType {
    auditConclusions: {
        title: string;
        description: string;
    };
    becameAClient: {
        title: string;
        forma: FormData; // Adjust this type as needed for your form translations
    };
    // Add more translation sections as needed
}

const Index: React.FC<Props> = ({ className }) => {
    const { becameAClient } = useContext<TranslationContextType>(TranslateContext);
    const { title, forma } = becameAClient; // Destructure translations for clarity

    return (
        <Container className={cn("mt-10 mb-20", className)}>
            <CardTitle className='mb-10'>{title}</CardTitle>
            <BecameAClientForm translation={forma} />
        </Container>
    );
};

export default Index;
