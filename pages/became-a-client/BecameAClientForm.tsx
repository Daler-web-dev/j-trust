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

export default function AuditRequestForm({ translation }: {
    translation: {
        warning: string;
        name: string;
        surname: string;
        email: string;
        phone: string;
        company: string;
        role: string;
        typeAudit: string;
        typeAudit_1: string;
        typeAudit_2: string;
        typeAudit_3: string;
        mainJob: string;
        mainJob_1: string;
        mainJob_2: string;
        mainJob_3: string;
        status: string;
        status_placeholder: string;
        time: string;
        time_1: string;
        time_2: string;
        time_3: string;
        tax: string;
        tax_1: string;
        tax_2: string;
        currency: string;
        currency_1: string;
        currency_2: string;
        method: string;
        method_1: string;
        method_2: string;
        employees: string;
        accounting: string;
        banks: string;
        invoices: string;
        revenue: string;
        turnover: string;
        date: string;
        assets: string;
        branches: string;
        additional: string;
        submit: string;
        writeCount: string;
        writePrice: string;
        additionalPlaceholder: string;
    }
}) {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

    const onSubmit = (data: FormData) => {
        console.log(data)
        // Handle form submission (e.g., API call)
    }

    return (
        <Card className="w-full mx-auto">
            <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="text-lg">{translation?.warning}</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <Label htmlFor="firstName">{translation?.name}</Label>
                            <Input
                                id="firstName"
                                placeholder={translation?.name}
                                {...register("firstName", { required: "First name is required" })}
                            />
                            {errors.firstName && <p className="text-red-600">{errors.firstName.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="lastName">{translation?.surname}</Label>
                            <Input
                                id="lastName"
                                placeholder={translation?.surname}
                                {...register("lastName", { required: "Last name is required" })}
                            />
                            {errors.lastName && <p className="text-red-600">{errors.lastName.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="email">{translation?.email}</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder={translation?.email}
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="phone">{translation?.phone}</Label>
                            <Input
                                id="phone"
                                placeholder="+998 XX XXX XX XX"
                                {...register("phone", { required: "Phone number is required" })}
                            />
                            {errors.phone && <p className="text-red-600">{errors.phone.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="company">{translation?.company}</Label>
                            <Input id="company" placeholder={translation?.company} {...register("company")} />
                        </div>
                        <div>
                            <Label htmlFor="position">{translation?.role}</Label>
                            <Input id="position" placeholder={translation?.role} {...register("position")} />
                        </div>
                    </div>

                    {/* Additional fields with similar structure... */}

                    <div>
                        <Label htmlFor="additional">{translation?.additional}</Label>
                        <Textarea
                            id="additional"
                            {...register("additional")}
                            className="resize-none"
                            maxLength={200}
                            placeholder={translation?.additionalPlaceholder || "Введите дополнительную информацию"}
                        />
                    </div>

                    <Button type="submit" className="w-full md:w-auto">{translation?.submit}</Button>
                </form>
            </CardContent>
        </Card>
    )
}
