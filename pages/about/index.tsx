import React, { useContext } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/Container';
import TranslateContext from '@/contexts/useTranslate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Props = {
    className?: string;
};

const Page: React.FC<Props> = ({ className }) => {
    const { aboutPage: translation } = useContext(TranslateContext);

    return (
        <Container className={cn("pt-5", className)}>
            <Card className='my-5 sm:my-10'>
                <CardHeader>
                    <CardTitle className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium'>{translation?.title}</CardTitle>
                </CardHeader>
                <CardContent className='text-sm sm:text-base'>
                    {translation?.description_1}
                    <br /><br />
                    {translation?.description_2}
                    <br /><br />
                    {translation?.description_3}
                </CardContent>
            </Card>

            <Card className="rounded-lg border-gray-200">
                <CardHeader className="px-6 py-4 rounded-t-lg">
                    <CardTitle className="text-2xl font-bold text-gray-800">
                        {translation.services.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4 text-gray-700">

                    {/* Подход к аудиту */}
                    <p className="text-lg leading-relaxed">
                        {translation.services.approach.description}
                    </p>

                    {/* Основные характеристики подхода */}
                    <ul className="list-disc pl-5 space-y-2">
                        {translation.services.approach.keyFeatures.map((feature: string, index: number) => (
                            <li key={index} className="text-lg">
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <p>{translation.services.approach.uniqueApproach}</p>
                    <p>{translation.services.approach.riskAssessment}</p>

                    {/* Этапы методологии */}
                    <h3 className="text-xl font-semibold text-gray-900 mt-6">
                        Этапы методологии
                    </h3>

                    {translation.services.stages.map((stage: {
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

            {/* <Card>
                <CardHeader>
                    <CardTitle className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium'>{aboutPage?.clients?.title}</CardTitle>
                </CardHeader>
                <CardContent className='text-sm sm:text-base'>
                    {aboutPage?.clients?.companies && aboutPage?.clients?.companies.length > 0 ? (
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5' style={{ gridAutoRows: '200px' }}>
                            {aboutPage.clients.companies.map((company: { title: string; description: string }, index: number) => (
                                <div key={index} className='rounded-lg border border-gray-200 p-4 flex justify-start items-start gap-2 flex-col'>
                                    <h3 className='text-base font-medium'>{company.title}</h3>
                                    <p className='text-sm'>{company.description.length < 120 ? company.description : company.description.substring(0, 120) + '...'}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No data available.</p>
                    )}
                </CardContent>
            </Card> */}
        </Container>
    );
};

export default Page;
