import React, { useContext } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/Container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import TranslateContext from '@/contexts/useTranslate';

interface Props {
    className?: string;
}

const Index: React.FC<Props> = ({ className }) => {
    const { aboutCompanyPage } = useContext(TranslateContext);
    const { auditorCertificates: translation } = aboutCompanyPage;

    return (
        <Container className={cn("mt-10 mb-20", className)}>
            {/* <Placeholder /> */}

            <Card>
                <CardHeader>
                    <CardTitle>{translation?.title}</CardTitle>
                    <CardDescription className='mt-2 text-base lg:text-lg'>{translation?.description}</CardDescription>
                </CardHeader>
                <CardContent className='grid grid-cols-4 justify-center items-center gap-5'>
                    <div className='w-full h-full border border-gray-200'>
                        <Image src={"/auditor_certificates/auditor_7.png"} alt="certificate" width={300} height={200} />
                    </div>
                    <div className='w-full h-full border border-gray-200'>
                        <Image src={"/auditor_certificates/auditor_5.png"} alt="certificate" width={300} height={200} />
                    </div>
                    <div className='w-full h-full border border-gray-200'>
                        <Image src={"/auditor_certificates/auditor_1.png"} alt="certificate" width={300} height={200} />
                    </div>
                    <div className='w-full h-full border border-gray-200'>
                        <Image src={"/auditor_certificates/auditor_8.png"} alt="certificate" width={300} height={200} />
                    </div>
                    <div className='w-full h-full border border-gray-200'>
                        <Image src={"/auditor_certificates/auditor_2.png"} alt="certificate" width={300} height={200} />
                    </div>
                    <div className='w-full h-full border border-gray-200'>
                        <Image src={"/auditor_certificates/auditor_3.png"} alt="certificate" width={300} height={200} />
                    </div>
                    <div className='w-full h-full border border-gray-200'>
                        <Image src={"/auditor_certificates/auditor_10.png"} alt="certificate" width={300} height={200} />
                    </div>
                    <div className='w-full h-full border border-gray-200'>
                        <Image src={"/auditor_certificates/auditor_11.png"} alt="certificate" width={300} height={200} />
                    </div>
                    <div className='w-full h-full border border-gray-200'>
                        <Image src={"/auditor_certificates/auditor_9.jpg"} alt="certificate" width={300} height={200} />
                    </div>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Index