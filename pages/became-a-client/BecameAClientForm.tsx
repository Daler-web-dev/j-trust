"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"
import { sendMessages } from "@/lib/htpps.request"

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company?: string;
    position?: string;
    additional?: string;
}

export default function AuditRequestForm({ translation }: {
    translation: {
        warning: string;
        number_warning: string;
        name: string;
        surname: string;
        email: string;
        phone: string;
        company: string;
        role: string;
        additional: string;
        submit: string;
        additionalPlaceholder: string;
        toast: {
            title: string;
            description: string;
        }
        error_toast: {
            title: string;
            description: string;
        }
    }
}) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

    const onSubmit = (info: FormData) => {
        let msg = `🆕 Стать Клиентом! \n`;
        msg += `📌 Имя: ${info?.firstName} \n`;
        msg += `📌 Фамилия: ${info?.lastName} \n`;
        msg += `📌 Номер телефона: ${info?.phone} \n`;
        msg += `📌 Почта: ${info?.email} \n`;
        msg += `📌 Должность: ${info?.position} \n`;
        msg += `📌 Компания: ${info?.company} \n`;
        msg += `📌 Дополнительно: ${info?.additional} \n`;

        const res = sendMessages(msg);
        res.then((res) => {
            if (res?.res?.status === 200 || res?.res?.status === 201) {
                toast({
                    title: translation?.toast?.title,
                    description: translation?.toast?.description,
                });
                reset();
            } else {
                toast({
                    title: translation?.error_toast?.title,
                    description: translation?.error_toast?.description,
                });
            }
        })
    }

    return (
        <Card className="w-full mx-auto">
            <CardHeader className="bg-cblue text-white">
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
                                required
                                {...register("firstName")}
                            />
                            {errors.firstName && <p className="text-red-600">{errors.firstName.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="lastName">{translation?.surname}</Label>
                            <Input
                                id="lastName"
                                placeholder={translation?.surname}
                                {...register("lastName")}
                                required
                            />
                            {errors.lastName && <p className="text-red-600">{errors.lastName.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="email">{translation?.email}</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder={translation?.email}
                                {...register("email")}
                                required
                            />
                            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="phone">{translation?.phone}</Label>
                            <Input
                                id="phone"
                                placeholder="+998 XX XXX XX XX"
                                {...register("phone", {
                                    required: "Phone number is required",
                                    pattern: {
                                        value: /^\+998[0-9]{9}$/,
                                        message: translation?.number_warning
                                    }
                                })}
                                required
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

                    <Button type="submit" size={"lg"} className="w-full md:w-auto bg-cblue hover:bg-blue-600">{translation?.submit}</Button>
                </form>
            </CardContent>
        </Card>
    )
}
