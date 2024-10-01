import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface Props {
    translation: {
        careerTitle: string;
        careerDescription: string;
        auditors: string;
        locationHeader: string;
        positionHeader: string;
        positions: { location: string; position: string }[];
        requirements: string;
        requirementsList: string[];
        registrationNotice: string;
    };
}

export default function JobListing({ translation }: Props) {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-3xl font-bold">{translation?.careerTitle}</CardTitle>
                <CardDescription className="text-lg mt-2">
                    {translation?.careerDescription}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <p className="font-semibold">{translation?.auditors}</p>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-1/2">{translation?.locationHeader}</TableHead>
                                <TableHead className="w-1/2">{translation?.positionHeader}</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {translation?.positions.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>{item.location}</TableCell>
                                    <TableCell>{item.position}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    <div className="space-y-2">
                        <p className="font-semibold">{translation?.requirements}</p>
                        <ul className="list-disc list-inside space-y-1">
                            {translation?.requirementsList.map((req, index) => (
                                <li key={index}>{req}</li>
                            ))}
                        </ul>
                        <p>{translation?.registrationNotice}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
