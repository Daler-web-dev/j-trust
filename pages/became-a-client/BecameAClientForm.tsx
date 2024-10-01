"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company?: string;
    position?: string;
    auditType: string;
    activityType: string;
    organizationStatus?: string;
    inspectionPeriod: string;
    taxationMode: string;
    currencyOperations: string;
    inspectionMethod: string;
    employeeCount?: number;
    accountingStaff?: number;
    bankAccounts?: number;
    invoiceCount?: number;
    revenue?: number;
    turnover?: number;
    date?: string;
    assets?: number;
    branchCount?: number;
    additional?: string;
}

export default function AuditRequestForm({ translation }: { translation: any }) {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

    const onSubmit = (data: FormData) => {
        console.log(data)
        // Handle form submission (e.g., API call)
    }

    return (
        <Card className="w-full mx-auto">
            <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="text-lg">{translation.warning}</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <Label htmlFor="firstName">{translation.name}</Label>
                            <Input
                                id="firstName"
                                placeholder={translation.name}
                                {...register("firstName", { required: "First name is required" })}
                            />
                            {errors.firstName && <p className="text-red-600">{errors.firstName.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="lastName">{translation.surname}</Label>
                            <Input
                                id="lastName"
                                placeholder={translation.surname}
                                {...register("lastName", { required: "Last name is required" })}
                            />
                            {errors.lastName && <p className="text-red-600">{errors.lastName.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="email">{translation.email}</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder={translation.email}
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="phone">{translation.phone}</Label>
                            <Input
                                id="phone"
                                placeholder="+998 XX XXX XX XX"
                                {...register("phone", { required: "Phone number is required" })}
                            />
                            {errors.phone && <p className="text-red-600">{errors.phone.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="company">{translation.company}</Label>
                            <Input id="company" placeholder={translation.company} {...register("company")} />
                        </div>
                        <div>
                            <Label htmlFor="position">{translation.role}</Label>
                            <Input id="position" placeholder={translation.role} {...register("position")} />
                        </div>
                    </div>

                    {/* Additional fields with similar structure... */}

                    <div>
                        <Label htmlFor="additional">{translation.additional}</Label>
                        <Textarea
                            id="additional"
                            {...register("additional")}
                            className="resize-none"
                            maxLength={200}
                            placeholder={translation.additionalPlaceholder || "Введите дополнительную информацию"}
                        />
                    </div>

                    <Button type="submit" className="w-full md:w-auto">{translation.submit}</Button>
                </form>
            </CardContent>
        </Card>
    )
}
