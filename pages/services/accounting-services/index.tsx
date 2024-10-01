import React, { useContext } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/Container';
import TranslateContext from '@/contexts/useTranslate';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
    className?: string;
}

const Index: React.FC<Props> = ({ className }) => {
    const { services } = useContext(TranslateContext);
    const { accounting: translation } = services;

    return (
        <Container className={cn("mt-10 mb-20", className)}>
            <Card>
                <CardHeader>
                    <CardTitle>{translation.title}</CardTitle>
                    <CardDescription>{translation.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <h3 className="font-bold">{translation.points_title}</h3>
                    <ul className="list-disc pl-5">
                        {translation.points.map((point: string, index: number) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                    <h3 className="font-bold mt-4">{translation.importance_title}</h3>
                    <p>{translation.importance}</p>
                    <h3 className="font-bold mt-4">{translation.service_offer_title}</h3>
                    <p>{translation.service_offer}</p>
                    <h3 className="font-bold mt-4">{translation.contract_benefits_title}</h3>
                    <p>{translation.contract_benefits}</p>
                    <h3 className="font-bold mt-4">{translation.quality_assurance_title}</h3>
                    <p>{translation.quality_assurance}</p>
                    <h3 className="font-bold mt-4">{translation.service_includes_title}</h3>
                    <ul className="list-disc pl-5">
                        {translation.service_includes.map((service: string, index: number) => (
                            <li key={index}>{service}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Index;
