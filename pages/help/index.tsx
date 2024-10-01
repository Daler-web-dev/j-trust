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

const Index: React.FC<Props> = ({ className }) => {
    const { help } = useContext<{ help: any }>(TranslateContext);

    return (
        <Container className={cn("mt-10 mb-20", className)}>
            <TopText translation={help} /> {/* Pass the entire help object */}
            <br />
            <MiddleTable translation={help.middleTable} />
            <br />
            <BottomForm translation={help.bottomForm} />
        </Container>
    );
};

export default Index;
