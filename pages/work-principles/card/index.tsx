import { Container } from '@/components/Container';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import TranslateContext from '@/contexts/useTranslate';
import React, { useContext } from 'react';

const Index = () => {
    const { workPrinciples } = useContext<{ workPrinciples: WorkPrinciples }>(TranslateContext);
    const { partnerAuditorControl: translation } = workPrinciples;

    return (
        <Container className='mt-10 mb-20'>
            <Card className="mb-4">
                <CardHeader>
                    <h2 className="text-xl font-semibold">{translation.title}</h2>
                </CardHeader>
                <CardContent>
                    {translation.description.map((desc: string, index: number) => (
                        <p key={index} className="mb-2">{desc}</p>
                    ))}
                </CardContent>
            </Card>
        </Container>
    );
};

export default Index;
