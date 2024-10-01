import { Container } from "@/components/Container";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import TranslateContext from "@/contexts/useTranslate";
import { useContext } from "react";

const ClientsComponent = () => {
    const { aboutCompanyPage } = useContext(TranslateContext);
    const { clients: translation } = aboutCompanyPage;

    return (
        <Container className="mt-10 mb-20">
            <Card className="w-full mx-auto p-4">
                <CardHeader>
                    <CardTitle>{translation.title}</CardTitle>
                    <CardDescription>{translation.description}</CardDescription>
                </CardHeader>

                <CardContent>
                    {/* Non-Profit Companies */}
                    <section className="mb-6">
                        <h2 className="text-lg font-bold">{translation.nonProfit.title}</h2>
                        <ul className="list-disc list-inside ml-4">;
                            {translation.nonProfit.companies.map((company:string, index:number) => (
                                <li key={index}>{company}</li>
                            ))}
                        </ul>
                    </section>

                    {/* Industrial Companies */}
                    <section className="mb-6">
                        <h2 className="text-lg font-bold">{translation.industrial.title}</h2>
                        <ul className="list-disc list-inside ml-4">
                            {translation.industrial.companies.map((company:string, index:number) => (
                                <li key={index}>{company}</li>
                            ))}
                        </ul>
                    </section>

                    {/* Foreign Investment Companies */}
                    <section className="mb-6">
                        <h2 className="text-lg font-bold">{translation.foreignInvestment.title}</h2>
                        <ul className="list-disc list-inside ml-4">
                            {translation.foreignInvestment.companies.map((company:string, index:number) => (
                                <li key={index}>{company}</li>
                            ))}
                        </ul>
                    </section>

                    {/* Unions and Leasing Companies */}
                    <section className="mb-6">
                        <h2 className="text-lg font-bold">{translation.unions.title}</h2>
                        <ul className="list-disc list-inside ml-4">
                            {translation.unions.companies.map((company:string, index:number) => (
                                <li key={index}>{company}</li>
                            ))}
                        </ul>
                    </section>

                    {/* Trading Companies */}
                    <section className="mb-6">
                        <h2 className="text-lg font-bold">{translation.trading.title}</h2>
                        <ul className="list-disc list-inside ml-4">
                            {translation.trading.companies.map((company:string, index:number) => (
                                <li key={index}>{company}</li>
                            ))}
                        </ul>
                    </section>
                </CardContent>
            </Card>
        </Container>
    );
};

export default ClientsComponent;
