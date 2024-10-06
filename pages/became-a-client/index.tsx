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
        forma: {
            warning: string;
            number_warning: string;
            name: string;
            surname: string;
            email: string;
            phone: string;
            company: string;
            role: string;
            typeAudit: string;
            typeAudit_1: string;
            typeAudit_2: string;
            typeAudit_3: string;
            mainJob: string;
            mainJob_1: string;
            mainJob_2: string;
            mainJob_3: string;
            status: string;
            status_placeholder: string;
            time: string;
            time_1: string;
            time_2: string;
            time_3: string;
            tax: string;
            tax_1: string;
            tax_2: string;
            currency: string;
            currency_1: string;
            currency_2: string;
            method: string;
            method_1: string;
            method_2: string;
            employees: string;
            accounting: string;
            banks: string;
            invoices: string;
            revenue: string;
            turnover: string;
            date: string;
            assets: string;
            branches: string;
            additional: string;
            submit: string;
            writeCount: string;
            writePrice: string;
            additionalPlaceholder: string;
            toast: {
                title: string;
                description: string;
            }
            error_toast: {
                title: string;
                description: string;
            }
        };
    };
}

const Index: React.FC<Props> = ({ className }) => {
    const { becameAClient } = useContext<TranslationContextType>(TranslateContext);
    const { title, forma } = becameAClient;

    return (
        <Container className={cn("mt-10 mb-20", className)}>
            <CardTitle className='mb-10'>{title}</CardTitle>
            <BecameAClientForm translation={forma} />
        </Container>
    );
};

export default Index;
