import { Container } from "@/components/Container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import TranslateContext from "@/contexts/useTranslate"
import { FaRegHandshake, FaRegNewspaper } from "react-icons/fa"
import { FiPaperclip } from "react-icons/fi"
import { GiDiscussion } from "react-icons/gi"
import { RiFilePaper2Line } from "react-icons/ri"
import { TbHandClick } from "react-icons/tb"
import Link from "next/link"
import { useContext } from "react"
import { Calculator, Newspaper } from "lucide-react"

export default function ServicesGrid() {
    const { services } = useContext(TranslateContext)
    const { main: translation } = services

    return (
        <Container className="mx-auto py-6 space-y-6 mt-10 mb-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-10"><span className="text-cblue">{translation?.title}</span> {translation?.subtitle}</h1>
            <div className="flex flex-wrap gap-6">
                <Link href={'/services/general-information'} className="flex-grow">
                    <Card className="flex flex-col h-full">
                        <CardHeader>
                            <CardTitle className="flex items-center justify-start gap-5">
                                <div className="rounded-full border border-gray-200 p-5 flex items-center justify-center">
                                    <GiDiscussion width={40} height={40} color="gray" />
                                </div>
                                {translation?.generalInformation?.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            {translation?.generalInformation?.description}
                        </CardContent>
                    </Card>
                </Link>

                <Link href={"/services/audit-technology"} className="flex-grow">
                    <Card className="flex flex-col h-full">
                        <CardHeader>
                            <CardTitle className="flex items-center justify-start gap-5">
                                <div className="rounded-full border border-gray-200 p-5 flex items-center justify-center">
                                    <TbHandClick width={40} height={40} color="gray" />
                                </div>
                                {translation?.antiCrisisManagement?.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            {translation?.antiCrisisManagement?.description}
                        </CardContent>
                    </Card>
                </Link>

                <Link href={"/services/methodology-of-provided-services"} className="flex-grow">
                    <Card className="flex flex-col h-full">
                        <CardHeader>
                            <CardTitle className="flex items-center justify-start gap-5">
                                <div className="rounded-full border border-gray-200 p-5 flex items-center justify-center">
                                    <FaRegHandshake width={40} height={40} color="gray" />
                                </div>
                                {translation?.dueDiligence?.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            {translation?.dueDiligence?.description}
                        </CardContent>
                    </Card>
                </Link>

                <Link href={"/services/required-audit"} className="flex-grow">
                    <Card className="flex flex-col h-full">
                        <CardHeader>
                            <CardTitle className="flex items-center justify-start gap-5">
                                <div className="rounded-full border border-gray-200 p-5 flex items-center justify-center">
                                    <FiPaperclip width={40} height={40} color="gray" />
                                </div>
                                {translation?.mandatoryAudit?.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">{translation?.mandatoryAudit?.description}</CardContent>
                    </Card>
                </Link>

                <Link href={"/services/initiative-audit"} className="flex-grow">
                    <Card className="flex flex-col h-full">
                        <CardHeader>
                            <CardTitle className="flex items-center justify-start gap-5">
                                <div className="rounded-full border border-gray-200 p-5 flex items-center justify-center">
                                    <FaRegNewspaper width={40} height={40} color="gray" />
                                </div>
                                {translation?.initiativeAudit?.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            {translation?.initiativeAudit?.description}
                        </CardContent>
                    </Card>
                </Link>

                <Link href={"/services/project-scholarship-audit"} className="flex-grow">
                    <Card className="flex flex-col h-full">
                        <CardHeader>
                            <CardTitle className="flex items-center justify-start gap-5">
                                <div className="rounded-full border border-gray-200 p-5 flex items-center justify-center">
                                    <RiFilePaper2Line width={40} height={40} color="gray" />
                                </div>
                                {translation?.auditOfProjects?.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            {translation?.auditOfProjects?.description}
                        </CardContent>
                    </Card>
                </Link>

                <Link href={"/services/consulting"} className="flex-grow">
                    <Card className="flex flex-col h-full">
                        <CardHeader>
                            <CardTitle className="flex items-center justify-start gap-5">
                                <div className="rounded-full border border-gray-200 p-5 flex items-center justify-center">
                                    <Newspaper width={30} height={30} color="gray" />
                                </div>
                                {translation?.consulting?.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            {translation?.consulting?.description}
                        </CardContent>
                    </Card>
                </Link>


                <Link href={"/services/accounting-services"} className="flex-grow">
                    <Card className="flex flex-col h-full">
                        <CardHeader>
                            <CardTitle className="flex items-center justify-start gap-5">
                                <div className="rounded-full border border-gray-200 p-5 flex items-center justify-center">
                                    <Calculator width={30} height={30} color="gray" />
                                </div>
                                {translation?.accounting?.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            {translation?.accounting?.description}
                        </CardContent>
                    </Card>
                </Link>
            </div>

            {/* <Card>
            <CardHeader>
                <CardTitle>Additional Information</CardTitle>
            </CardHeader>
            <CardContent>

            </CardContent>
        </Card> */}
        </Container>
    )
}