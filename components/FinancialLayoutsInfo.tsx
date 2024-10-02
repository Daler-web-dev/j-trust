import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { FaRegHandshake, FaRegNewspaper } from "react-icons/fa"
import { FiPaperclip } from "react-icons/fi"
import { GiDiscussion } from "react-icons/gi"
import { RiFilePaper2Line } from "react-icons/ri"
import { TbHandClick } from "react-icons/tb"

export default function FinancialLayoutsInfo({ translation }: {
    translation: {
        title: string;
        subtitle: string;
        generalInformation: {
            title: string;
            description: string;
        };
        antiCrisisManagement: {
            title: string;
            description: string;
        };
        dueDiligence: {
            title: string;
            description: string;
        };
        mandatoryAudit: {
            title: string;
            description: string;
        };
        initiativeAudit: {
            title: string;
            description: string;
        };
        auditOfProjects: {
            title: string;
            description: string;
        };
    }
}) {
    return (
        <div className="container mx-auto py-6 space-y-6 mb-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-10"><span className="text-cblue">{translation?.title}</span> {translation?.subtitle}</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href={'/services/general-information'}>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center justify-start gap-5">
                                <div className="rounded-full border border-gray-200 p-5 flex items-center justify-center">
                                    <GiDiscussion width={40} height={40} color="gray" />
                                </div>
                                {translation?.generalInformation?.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {translation?.generalInformation?.description}
                        </CardContent>
                    </Card>
                </Link>
                <Link href={"/services/crisis-management"}>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center justify-start gap-5">
                                <div className="rounded-full border border-gray-200 p-5 flex items-center justify-center">
                                    <TbHandClick width={40} height={40} color="gray" />
                                </div>
                                {translation?.antiCrisisManagement?.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {translation?.antiCrisisManagement?.description}
                        </CardContent>
                    </Card>
                </Link>
                <Link href={"/services/procedure-due-diligence"}>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center justify-start gap-5">
                                <div className="rounded-full border border-gray-200 p-5 flex items-center justify-center">
                                    <FaRegHandshake width={40} height={40} color="gray" />
                                </div>
                                {translation?.dueDiligence?.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {translation?.dueDiligence?.description}
                        </CardContent>
                    </Card>
                </Link>
                <Link href={"/services/required-audit"}>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center justify-start gap-5">
                                <div className="rounded-full border border-gray-200 p-5 flex items-center justify-center">
                                    <FiPaperclip width={40} height={40} color="gray" />
                                </div>
                                {translation?.mandatoryAudit?.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>{translation?.mandatoryAudit?.description}</CardContent>
                    </Card>
                </Link>
                <Link href={"/services/initiative-audit"}>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center justify-start gap-5">
                                <div className="rounded-full border border-gray-200 p-5 flex items-center justify-center">
                                    <FaRegNewspaper width={40} height={40} color="gray" />
                                </div>
                                {translation?.initiativeAudit?.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {translation?.initiativeAudit?.description}
                        </CardContent>
                    </Card>
                </Link>
                <Link href={"/services/project-scholarship-audit"}>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center justify-start gap-5">
                                <div className="rounded-full border border-gray-200 p-5 flex items-center justify-center">
                                    <RiFilePaper2Line width={40} height={40} color="gray" />
                                </div>
                                {translation?.auditOfProjects?.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {translation?.auditOfProjects?.description}
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
        </div>
    )
}