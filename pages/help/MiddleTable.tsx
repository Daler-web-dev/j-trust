import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

interface Translation {
    title: string;
    sections: {
        sectionTitle: string;
        rows: {
            number: string;
            info: string;
            criteria: string;
            score: string;
        }[];
    }[];
    responsibleNote: string;
}

export default function MiddleTable({ translation }: { translation: Translation }) {
    return (
        <Card className="w-full mx-auto">
            <CardHeader>
                <CardTitle className="text-lg font-semibold">{translation?.title}</CardTitle>
            </CardHeader>
            <CardContent className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[50px]">№</TableHead>
                            <TableHead>{translation?.sections[0].rows[0].info}</TableHead>
                            <TableHead>{translation?.sections[0].rows[0].criteria}</TableHead>
                            <TableHead className="w-[100px]">{translation?.sections[0].rows[0].score}</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {translation?.sections.map((section, sectionIndex) => (
                            <React.Fragment key={sectionIndex}>
                                <TableRow>
                                    <TableCell colSpan={4} className="font-semibold">
                                        {section.sectionTitle}
                                    </TableCell>
                                </TableRow>
                                {section.rows.map((row, rowIndex) => (
                                    <TableRow key={rowIndex}>
                                        <TableCell>{row.number}</TableCell>
                                        <TableCell>{row.info}</TableCell>
                                        <TableCell>{row.criteria}</TableCell>
                                        <TableCell>{row.score}</TableCell>
                                    </TableRow>
                                ))}
                            </React.Fragment>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
            <CardContent>
                <p className="text-sm mt-4">{translation?.responsibleNote}</p>
            </CardContent>
        </Card>
    );
}
