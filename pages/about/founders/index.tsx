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
    const { founders } = aboutCompanyPage;

    return (
        <Container className={cn("mt-10 mb-20", className)}>
            <Card>
                <CardHeader>
                    <CardTitle>
                        {founders?.title}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {founders?.name}: <br />
                    {founders?.description}
                </CardContent>
            </Card>
        </Container>
    );
};

export default Index;
