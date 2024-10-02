"use client"

import { useState } from "react"
import { useForm, Controller } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { sendMessages } from "@/pages/api/sendMessages"

interface FormValues {
    name: string
    surname: string
    email: string
    phone: string
}

export default function ConsultingForm({ translation }: {
    translation: {
        title: string;
        name: string;
        surname: string;
        email: string;
        phone: string;
        phone_2: string;
        phone_3: string;
        phone_4: string;
        button: string;
        button_2: string;
        toast: {
            title: string;
            description: string;
        };
        error_toast: {
            title: string;
            description: string;
        };
    }
}) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { toast } = useToast()

    const form = useForm<FormValues>({
        defaultValues: {
            name: "",
            surname: "",
            email: "",
            phone: "+998",
        },
    })

    function onSubmit(info: FormValues) {
        setIsSubmitting(true)

        let msg = `🆕 Бесплатная консультация! \n`;
        msg += `📌 Имя: ${info?.name} \n`;
        msg += `📌 Фамилия: ${info?.surname} \n`;
        msg += `📌 Номер телефона: ${info?.phone} \n`;
        msg += `📌 Почта: ${info?.email} \n`;


        const res = sendMessages(msg)

        res.then((res) => {
            if (res?.res?.status === 200 || res?.res?.status === 201) {
                {
                    setIsSubmitting(false)
                    toast({
                        title: translation?.toast?.title,
                        description: translation?.toast?.description,
                    })
                    form.reset()

                }
            } else {
                toast({
                    title: translation?.error_toast?.title,
                    description: translation?.error_toast?.description,
                })
            }
        })
    }

    return (
        <div id="forma" className="w-full max-w-[100%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%] mx-auto p-4 sm:p-6 bg-card rounded-lg shadow-lg max-md:mt-10">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
                {translation?.title}
            </h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{translation?.name}</FormLabel>
                                <FormControl>
                                    <Input placeholder={translation?.name} {...field} required />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="surname"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{translation?.surname}</FormLabel>
                                <FormControl>
                                    <Input placeholder={translation?.surname} {...field} required />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{translation?.email}</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder={translation?.email}
                                        {...field}
                                        required
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={() => (
                            <FormItem>
                                <FormLabel>{translation?.phone}</FormLabel>
                                <FormControl>
                                    <Controller
                                        name="phone"
                                        control={form.control}
                                        rules={{
                                            required: translation?.phone_2,
                                            pattern: {
                                                value: /^\+998[0-9]{9}$/,
                                                message: translation?.phone_3,
                                            },
                                        }}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                type="tel"
                                                placeholder="+998 XX XXX XX XX"
                                                onChange={(e) => {
                                                    let value = e.target.value.replace(/[^\d+]/g, "")
                                                    if (!value.startsWith("+998")) {
                                                        value = "+998" + value.slice(3)
                                                    }
                                                    field.onChange(value)
                                                }}
                                            />
                                        )}
                                    />
                                </FormControl>
                                <FormDescription>
                                    {translation?.phone_4}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        className="w-full bg-cblue hover:bg-blue-600"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? translation?.button_2 : translation?.button}
                    </Button>
                </form>
            </Form>
        </div>
    )
}
