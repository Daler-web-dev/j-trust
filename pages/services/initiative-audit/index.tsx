import React, { useContext } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/Container';
import TranslateContext from '@/contexts/useTranslate';
import { Card } from '@/components/ui/card';

interface Props {
    className?: string;
}

const Index: React.FC<Props> = ({ className }) => {
    const { services } = useContext(TranslateContext);
    const { initiativeAudit: translation } = services;

    return (
        <Container className={cn("mt-10 mb-20", className)}>
            <Card className="mx-auto my-4 p-6 shadow-md bg-white rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{translation.title}</h2>
                <p className="text-gray-600 mb-2">{translation.description}</p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">{translation.conditions.title}</h3>
                <div className="space-y-2">
                    <p className="font-medium text-gray-700">{translation.conditions.subject}</p>
                    <p className="font-medium text-gray-700">{translation.conditions.terms}</p>
                    <p className="font-medium text-gray-700">{translation.conditions.responsibility}</p>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">{translation.goals.title}</h3>
                <p className="text-gray-600 mb-2">{translation.goals.text}</p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">{translation.purposeO.title}</h3>
                <p className="text-gray-600 mb-2">{translation.purposeO.text}</p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">Can Be Conducted:</h3>
                <ul className="list-disc pl-6 text-gray-600">
                    {translation.initiativeAuditCanBeConducted.map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">{translation.opportunities.title}</h3>
                <p className="text-gray-600 mb-2">{translation.opportunities.text}</p>
            </Card>
        </Container>
    );
};

export default Index;
