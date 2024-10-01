import React, { useContext } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/Container';
import TranslateContext from '@/contexts/useTranslate';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
    className?: string;
}

const Index: React.FC<Props> = ({ className }) => {
    const { services } = useContext<{ services: Services }>(TranslateContext)
    const { consulting: translation } = services

    return (
        <Container className={cn("mt-10 mb-20", className)}>
            <Card>
                <CardHeader>
                    <CardTitle>{translation.title}</CardTitle>
                    <CardDescription>{translation.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <h3 className="font-bold">{translation.questions_title}</h3>
                    <ul className="list-disc pl-5">
                        {translation.questions.map((question, index) => (
                            <li key={index}>{question}</li>
                        ))}
                    </ul>
                    <h3 className="font-bold mt-4">{translation.offer}</h3>
                    <h3 className="font-bold mt-4">{translation.consultationAreas_title}</h3>
                    <ul className="list-disc pl-5">
                        {translation.consultationAreas.map((area, index) => (
                            <li key={index}>{area}</li>
                        ))}
                    </ul>
                    <h3 className="font-bold mt-4">{translation.consultationTypes_title}</h3>
                    {Object.keys(translation.consultationTypes).map((type) => (
                        <div key={type} className="mt-2">
                            <h4 className="font-bold">{translation.consultationTypes[type].title}</h4>
                            <p>{translation.consultationTypes[type].description}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </Container>
    );
};

export default Index