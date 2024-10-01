// components/JobListing.tsx
import React, { useContext } from 'react';
import TranslateContext from '@/contexts/useTranslate';
import { Container } from '@/components/Container';
import VacanciesForm from './VacanciesForm';
import JobListing from './JobListing';


const Index = () => {
    const { aboutCompanyPage } = useContext(TranslateContext);
    const { vacancies: translation } = aboutCompanyPage;

    console.log(translation);

    return (
        <Container className="mt-10 mb-20">
            <JobListing translation={translation.jobListing} />
            <VacanciesForm translation={translation.forma} />
        </Container>
    );
};

export default Index;
