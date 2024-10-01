import React, { useContext } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TranslateContext from '@/contexts/useTranslate';



interface Props {
    className?: string;
}

const Index: React.FC<Props> = ({ className }) => {
    const { aboutCompanyPage } = useContext(TranslateContext);
    const { management: translation } = aboutCompanyPage;

    return (
        <Container className={cn("mt-10 mb-20", className)}>
            <Card>
                <CardHeader>
                    <CardTitle>
                        {translation?.title}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {translation?.clientPrinciple} <br /><br />
                    {translation?.managementPrinciple}
                </CardContent>
            </Card>
        </Container>
    );
};

export default Index;
