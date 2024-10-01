// components/JobListing.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
interface Props {
    translation: JobListingTranslation;
}

const JobListing: React.FC<Props> = ({ translation }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{translation.careerTitle}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{translation.careerDescription}</p>
                <h3>{translation.locationHeader}</h3>
                <ul>
                    {translation.positions.map((item, index) => (
                        <li key={index}>
                            {item.position} - {item.location}
                        </li>
                    ))}
                </ul>
                <h3>{translation.requirements}</h3>
                <ul>
                    {translation.requirementsList.map((req, index) => (
                        <li key={index}>{req}</li>
                    ))}
                </ul>
                <p>{translation.registrationNotice}</p>
            </CardContent>
        </Card>
    );
};

export default JobListing;
