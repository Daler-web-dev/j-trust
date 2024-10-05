import React, { useContext } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/Container';
import TranslateContext from '@/contexts/useTranslate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


interface Props {
    className?: string;
}

const Index: React.FC<Props> = ({ className }) => {
    const { aboutCompanyPage } = useContext(TranslateContext);
    const { founders: translation } = aboutCompanyPage;

    console.log(translation);


    return (
        <Container className={cn("mt-10 mb-20", className)}>
            <Card>
                <CardHeader>
                    <CardTitle>
                        {translation?.title}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {translation?.name}: <br />
                    {translation?.description} <br />
                    {translation?.takingPart}:
                    <ul>
                        {translation.events.map((item: { date: string, description: string }, idx: number) => (
                            <li key={idx} className='list-disc ml-10'>{item.date} - {item.description}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Index;
