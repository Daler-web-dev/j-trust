import React, { useContext } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/Container';
import TopText from './TopText';
import MiddleTable from './MiddleTable';
import BottomForm from './BottomForm';
import TranslateContext from '@/contexts/useTranslate';

interface Props {
    className?: string;
}

interface TableRow {
    number: string;
    info: string;
    criteria: string;
    score: string;
}

interface Section {
    sectionTitle: string;
    rows: TableRow[];
}

interface MiddleTable {
    title: string;
    sections: Section[];
    responsibleNote: string;
}

interface BottomForm {
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    requiredMessage: string;
    maxLengthMessage: string;
    submitButton: string;
}

const Index: React.FC<Props> = ({ className }) => {
    const { help } = useContext(TranslateContext);

    return (
        <Container className={cn("mt-10 mb-20", className)}>
            <TopText translation={help.topText} />
            <br />
            <MiddleTable translation={help.middleTable} />
            <br />
            <BottomForm translation={help.bottomForm} />
        </Container>
    );
};

export default Index;
