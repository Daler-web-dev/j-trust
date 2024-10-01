import React, { useContext } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/Container';
import TranslateContext from '@/contexts/useTranslate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
    className?: string;
}

const Index: React.FC<Props> = ({ className }) => {
    const { auditConclusions: translation } = useContext(TranslateContext);

    return (
        <Container className={cn("mt-10 mb-20", className)}>
            <Card>
                <CardHeader>
                    <CardTitle>{translation?.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{translation?.description}</p>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Index;
