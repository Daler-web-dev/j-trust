import React, { useContext } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/Container';
import TranslateContext from '@/contexts/useTranslate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
    className?: string;
}

const Index: React.FC<Props> = ({ className }) => {
    const { services } = useContext(TranslateContext);
    const { methodologyOfProvidedServices: translation } = services;

    return (
        <Container className={cn('mt-10 mb-20', className)}>
            <Card className="rounded-lg border-gray-200">
                <CardHeader className="px-6 py-4 rounded-t-lg">
                    <CardTitle className="text-2xl font-bold text-gray-800">
                        {translation.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4 text-gray-700">

                    {/* Подход к аудиту */}
                    <p className="text-lg leading-relaxed">
                        {translation.approach.description}
                    </p>

                    {/* Основные характеристики подхода */}
                    <ul className="list-disc pl-5 space-y-2">
                        {translation.approach.keyFeatures.map((feature: string, index: number) => (
                            <li key={index} className="text-lg">
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <p>{translation.approach.uniqueApproach}</p>
                    <p>{translation.approach.riskAssessment}</p>

                    {/* Этапы методологии */}
                    <h3 className="text-xl font-semibold text-gray-900 mt-6">
                        Этапы методологии
                    </h3>

                    {translation.stages.map((stage: {
                        stage: number;
                        title: string;
                        description: string;
                        steps: {
                            title: string;
                            factors?: string[];
                            description?: string;
                            steps?: string[];
                            result?: string;
                        }[];
                    }, index: number) => (
                        <div key={index} className="mt-4">
                            {/* Заголовок этапа */}
                            <h4 className="text-lg font-bold text-gray-900">
                                {stage.stage}. {stage.title}
                            </h4>

                            {/* Описание этапа */}
                            <p>{stage.description}</p>

                            {/* Шаги этапа */}
                            {stage.steps && stage.steps.length > 0 && (
                                <ul className="list-disc pl-5 mt-2">
                                    {stage.steps.map((step: {
                                        title: string;
                                        factors?: string[];
                                        description?: string;
                                        steps?: string[];
                                        result?: string;
                                    }, stepIndex: number) => (
                                        <li key={stepIndex}>
                                            {typeof step === 'string' ? step : (
                                                <>
                                                    <strong>{step.title}</strong>
                                                    <ul className="list-disc pl-5">
                                                        {step.factors?.map((factor: string, factorIndex: number) => (
                                                            <li key={factorIndex}>{factor}</li>
                                                        ))}
                                                    </ul>
                                                    <p>{step.description}</p>
                                                    {step.steps && (
                                                        <ul className="list-disc pl-5 mt-2">
                                                            {step.steps.map((subStep: string, subStepIndex: number) => (
                                                                <li key={subStepIndex}>{subStep}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                    <p>{step.result}</p>
                                                </>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </CardContent>
            </Card>
        </Container>
    );
};

export default Index;
