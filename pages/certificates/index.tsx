import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/Container';
import Placeholder from '@/components/Placeholder';

interface Props {
    className?: string;
}

const Index: React.FC<Props> = ({ className }) => {
    return (
        <Container className={cn("mt-10 mb-20", className)}>
            <Placeholder />
        </Container>
    );
};

export default Index