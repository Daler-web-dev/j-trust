import React, { useContext } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/Container';
import TranslateContext from '@/contexts/useTranslate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

interface Props {
    className?: string;
}

const Index: React.FC<Props> = ({ className }) => {
    const { workPrinciples: translation } = useContext<{ workPrinciples: WorkPrinciples }>(TranslateContext);

    return (
        <Container className={cn("mt-10 mb-20", className)}>
            <Card className="w-full mx-auto md:p-6">
                <CardHeader>
                    <CardTitle>{translation.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Link href={"/work-principles/card"}>
                        <Card>
                            <CardHeader>
                                <span className="bg-gray-200 px-2 py-1 max-w-[200px] text-gray-600 rounded">
                                    {translation.card.date}
                                </span>
                                <CardTitle className="text-xl font-semibold mb-2">{translation.card.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700">{translation.card.description}</p>
                            </CardContent>
                        </Card>
                    </Link>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Index;
