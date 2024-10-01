import { Container } from "@/components/Container";
import Placeholder from "@/components/Placeholder";
import { Card, CardContent } from "@/components/ui/card";
import TranslateContext from "@/contexts/useTranslate";
import { useContext } from "react";


const Index: React.FC = () => {
    const { aboutCompanyPage } = useContext(TranslateContext);
    const { specialists: translation } = aboutCompanyPage;

    return (
        <Container className="mt-10 mb-20">
            <Card className="mx-auto mb-8 shadow-lg">
                <Placeholder />
                <CardContent className="mt-10">
                    <section>
                        <h2 className="text-lg font-medium mb-2">{translation.sectionTitles.ourSpecialists}</h2>
                        <ul className="list-disc list-inside ml-4">
                            {translation.ourSpecialists.map((point: string, index: number) => (
                                <li key={index} className="mb-2">{point}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="mt-4">
                        <h2 className="text-lg font-medium mb-2">{translation.sectionTitles.qualificationRequirements}</h2>
                        <div>
                            <h3 className="font-semibold">{translation.sectionTitles.mainRequirements}</h3>
                            <ul className="list-disc list-inside ml-4">
                                {translation.qualificationRequirementsForSpecialists.mainRequirements.map((req: string, index: number) => (
                                    <li key={index} className="mb-2">{req}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-4">
                            <h3 className="font-semibold">{translation.sectionTitles.requirementsForAuditorAssistants}</h3>
                            <ul className="list-disc list-inside ml-4">
                                {translation.qualificationRequirementsForSpecialists.requirementsForAuditorAssistants.map((req: string, index: number) => (
                                    <li key={index} className="mb-2">{req}</li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section className="mt-4">
                        <h2 className="text-lg font-medium mb-2">{translation.sectionTitles.complianceWithAuditorEthics}</h2>
                        <p>{translation.complianceWithAuditorEthics.description}</p>
                    </section>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Index;
