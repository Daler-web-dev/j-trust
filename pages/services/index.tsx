import { Container } from "@/components/Container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import TranslateContext from "@/contexts/useTranslate"
import { UserIcon, HandIcon, SearchIcon, FileTextIcon, CalculatorIcon, PenToolIcon, HelpCircleIcon, BookOpenIcon } from "lucide-react"
import Link from "next/link"
import { useContext } from "react"

export default function ServicesGrid() {
    const { services } = useContext(TranslateContext)
    const { main: translation } = services

    return (
        <Container className="mt-10 mb-20">
            <Card className="w-full">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold">{translation?.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Link href="/services/general-information" className="block hover:no-underline">
                            <Card className="h-full hover:shadow-md transition-shadow duration-200">
                                <CardContent className="pt-6">
                                    <div className="flex flex-col items-start text-start space-y-2">
                                        <div className="flex items-center gap-3">
                                            <div className="border border-gray-400 rounded-full p-5">
                                                <UserIcon width={20} height={20} color="gray" />
                                            </div>
                                            <h3 className="text-lg font-semibold">{translation?.card_1?.title}</h3>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{translation?.card_1?.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/services/crisis-management" className="block hover:no-underline">
                            <Card className="h-full hover:shadow-md transition-shadow duration-200">
                                <CardContent className="pt-6">
                                    <div className="flex flex-col items-start text-start space-y-2">
                                        <div className="flex items-center gap-3">
                                            <div className="border border-gray-400 rounded-full p-5">
                                                <HandIcon width={20} height={20} color="gray" />
                                            </div>
                                            <h3 className="text-lg font-semibold">{translation?.card_2?.title}</h3>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{translation?.card_2?.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/services/procedure-due-diligence" className="block hover:no-underline">
                            <Card className="h-full hover:shadow-md transition-shadow duration-200">
                                <CardContent className="pt-6">
                                    <div className="flex flex-col items-start text-start space-y-2">
                                        <div className="flex items-center gap-3">
                                            <div className="border border-gray-400 rounded-full p-5">
                                                <HelpCircleIcon width={20} height={20} color="gray" />
                                            </div>
                                            <h3 className="text-lg font-semibold">{translation?.card_3?.title}</h3>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{translation?.card_3?.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/services/required-audit" className="block hover:no-underline">
                            <Card className="h-full hover:shadow-md transition-shadow duration-200">
                                <CardContent className="pt-6">
                                    <div className="flex flex-col items-start text-start space-y-2">
                                        <div className="flex items-center gap-3">
                                            <div className="border border-gray-400 rounded-full p-5">
                                                <SearchIcon width={20} height={20} color="gray" />
                                            </div>
                                            <h3 className="text-lg font-semibold">{translation?.card_4?.title}</h3>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{translation?.card_4?.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/services/initiative-audit" className="block hover:no-underline">
                            <Card className="h-full hover:shadow-md transition-shadow duration-200">
                                <CardContent className="pt-6">
                                    <div className="flex flex-col items-start text-start space-y-2">
                                        <div className="flex items-center gap-3">
                                            <div className="border border-gray-400 rounded-full p-5">
                                                <BookOpenIcon width={20} height={20} color="gray" />
                                            </div>
                                            <h3 className="text-lg font-semibold">{translation?.card_5?.title}</h3>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{translation?.card_5?.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/services/project-scholarship-audit" className="block hover:no-underline">
                            <Card className="h-full hover:shadow-md transition-shadow duration-200">
                                <CardContent className="pt-6">
                                    <div className="flex flex-col items-start text-start space-y-2">
                                        <div className="flex items-center gap-3">
                                            <div className="border border-gray-400 rounded-full p-5">
                                                <PenToolIcon width={20} height={20} color="gray" />
                                            </div>
                                            <h3 className="text-lg font-semibold">{translation?.card_6?.title}</h3>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{translation?.card_6?.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/services/consulting" className="block hover:no-underline">
                            <Card className="h-full hover:shadow-md transition-shadow duration-200">
                                <CardContent className="pt-6">
                                    <div className="flex flex-col items-start text-start space-y-2">
                                        <div className="flex items-center gap-3">
                                            <div className="border border-gray-400 rounded-full p-5">
                                                <FileTextIcon width={20} height={20} color="gray" />
                                            </div>
                                            <h3 className="text-lg font-semibold">{translation?.card_7?.title}</h3>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{translation?.card_7?.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/services/accounting-services" className="block hover:no-underline">
                            <Card className="h-full hover:shadow-md transition-shadow duration-200">
                                <CardContent className="pt-6">
                                    <div className="flex flex-col items-start text-start space-y-2">
                                        <div className="flex items-center gap-3">
                                            <div className="border border-gray-400 rounded-full p-5">
                                                <CalculatorIcon width={20} height={20} color="gray" />
                                            </div>
                                            <h3 className="text-lg font-semibold">{translation?.card_8?.title}</h3>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{translation?.card_8?.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </Container>
    )
}