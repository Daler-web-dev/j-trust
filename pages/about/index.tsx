import React, { useContext } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/Container';
import TranslateContext from '@/contexts/useTranslate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dot } from 'lucide-react';

type Props = {
    className?: string;
};

const Page: React.FC<Props> = ({ className }) => {
    const { aboutPage } = useContext(TranslateContext);

    return (
        <Container className={cn("pt-5", className)}>
            <Card className='my-5 sm:my-10'>
                <CardHeader>
                    <CardTitle className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium'>{aboutPage?.title}</CardTitle>
                </CardHeader>
                <CardContent className='text-sm sm:text-base'>
                    {aboutPage?.description_1}
                    <br /><br />
                    {aboutPage?.description_2}
                    <br /><br />
                    {aboutPage?.description_3}
                </CardContent>
            </Card>

            <Card className='my-5 sm:my-10'>
                <CardHeader>
                    <CardTitle className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium'>{aboutPage?.services?.title}</CardTitle>
                </CardHeader>
                <CardContent className='text-sm sm:text-base'>
                    {aboutPage?.services?.opt && aboutPage?.services?.opt.length > 0 ? (
                        <ul className='list-disc pl-5'>
                            {aboutPage.services.opt.map((opt: string, index: number) => (
                                <li key={index} className='flex justify-start items-center gap-1'>
                                    <Dot width={10} height={10} className="text-primary" />
                                    <span>{opt}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No data available.</p>
                    )}
                </CardContent>
            </Card>

            <Card>
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
            </Card>
        </Container>
    );
};

export default Page;
