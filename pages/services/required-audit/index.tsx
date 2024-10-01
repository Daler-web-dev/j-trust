import React, { useContext } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/Container';
import TranslateContext from '@/contexts/useTranslate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
    className?: string;
}

const Index: React.FC<Props> = ({ className }) => {
    const { services } = useContext<{ services: Services }>(TranslateContext)
    const { requiredAudit: translation } = services
    return (
        <Container className={cn("mt-10 mb-20", className)}>
            <Card>
                <CardHeader>
                    <CardTitle>{translation.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{translation.introduction}</p>
                    <p>{translation.section_1}</p>
                    <p>{translation.section_2}</p>
                    <ul>
                        {translation.points.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                    <p>{translation.section_3}</p>
                    <p>{translation.section_4}</p>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Index