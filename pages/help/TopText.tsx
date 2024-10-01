import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Translation {
    help: {
        title: string;
        training: {
            title: string;
            content: string[];
        };
        program: {
            title: string;
            table: {
                number: number;
                group: string;
                topic: string;
                planned_date: string;
                actual_date: string;
                responsible: string;
            }[];
        };
    };
}

export default function TopText({ translation }: { translation: Translation }) {
    return (
        <Card className="w-full mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">{translation.help.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Обучение */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">{translation.help.training.title}</h2>
                    {translation.help.training.content.map((paragraph, index) => (
                        <p key={index} className="text-sm mt-2">{paragraph}</p>
                    ))}
                </div>

                {/* Программа обучения */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">{translation.help.program.title}</h2>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[50px]">№</TableHead>
                                <TableHead>Учебная группа</TableHead>
                                <TableHead>Тема занятий</TableHead>
                                <TableHead>Дата проведения занятий/план</TableHead>
                                <TableHead>Дата проведения занятий/факт</TableHead>
                                <TableHead>Ответственные лица</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {translation.help.program.table.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{row.number}</TableCell>
                                    <TableCell>{row.group}</TableCell>
                                    <TableCell>{row.topic}</TableCell>
                                    <TableCell>{row.planned_date}</TableCell>
                                    <TableCell>{row.actual_date}</TableCell>
                                    <TableCell>{row.responsible}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
}
