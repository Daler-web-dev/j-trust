import React, { useContext } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import TranslateContext from '@/contexts/useTranslate';

interface Props {
    className?: string;
}

const Index: React.FC<Props> = ({ className }) => {
    const { aboutCompanyPage } = useContext(TranslateContext);
    const { certificates: translation } = aboutCompanyPage;

    return (
        <Container className={cn("mt-10 mb-20", className)}>
            {/* <Placeholder /> */}

            <Card>
                <CardHeader>
                    <CardTitle>{translation?.title}</CardTitle>
                </CardHeader>
                <CardContent className='grid grid-cols-4 justify-center items-center gap-5'>
                    <div className='w-full h-full border border-gray-200'>
                        <Image src={"/certificates/certificate_1.jpg"} alt="certificate" width={300} height={200} />
                    </div>
                    <div className='w-full h-full border border-gray-200'>
                        <Image src={"/certificates/certificate_2.png"} alt="certificate" width={300} height={200} />
                    </div>
                    <div className='w-full h-full border border-gray-200'>
                        <Image src={"/certificates/certificate_3.png"} alt="certificate" width={300} height={200} />
                    </div>
                    <div className='w-full h-full border border-gray-200'>
                        <Image src={"/certificates/certificate_4.png"} alt="certificate" width={300} height={200} />
                    </div>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Index