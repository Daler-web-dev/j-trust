import React, { useContext } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/Container';
import TranslateContext from '@/contexts/useTranslate';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface Props {
    className?: string;
}

const Index: React.FC<Props> = ({ className }) => {
    const { services } = useContext(TranslateContext)
    const { projectGrandsAudit: translation } = services
    return (
        <Container className={cn("mt-10 mb-20", className)}>
            <Card>
                <CardHeader>
                    <h2 className="text-lg font-bold">{translation.title}</h2>
                </CardHeader>
                <CardContent>
                    <p>{translation.description}</p><br />
                    <p>{translation.conducting}</p><br />
                    <p>{translation.auditPlan}</p><br />
                    <p>{translation.documentationCheck}</p>
                    <ul className="list-disc pl-5">
                        {translation.documentationPoints.map((point: string, index: number) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul> <br />
                    {/* <p>{translation.company}</p>
                    <ul className="list-disc pl-5">
                        {translation.projects.map((project: { name: string }, index: number) => (
                            <li key={index}>{project.name}</li>
                        ))}
                    </ul> */}
                </CardContent>
                {/* <CardFooter>
                    <p className="text-sm text-gray-500">Audit Information</p>
                </CardFooter> */}
            </Card>
        </Container>
    );
};

export default Index