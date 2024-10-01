"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

type FormData = {
    name: string;
    phone: string;
    email: string;
    message: string;
};

type TranslationType = {
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    requiredMessage: string;
    maxLengthMessage: string;
    submitButton: string;
};

export default function BottomForm({ translation }: { translation: TranslationType }) {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
        // Here you would typically send the data to your backend
    };

    return (
        <Card className="w-full mx-auto md:p-6 shadow-lg border border-gray-200 rounded-lg">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">{translation?.formTitle}</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                    {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
                    {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                    {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}

                    <div className="space-y-2">
                        <Label htmlFor="name">{translation?.nameLabel}</Label>
                        <Input
                            id="name"
                            placeholder={translation?.namePlaceholder}
                            {...register("name", { required: translation?.requiredMessage })}
                            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">{translation?.phoneLabel}</Label>
                        <Input
                            id="phone"
                            type="tel"
                            placeholder={translation?.phonePlaceholder}
                            {...register("phone", { required: translation?.requiredMessage })}
                            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">{translation?.emailLabel}</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder={translation?.emailPlaceholder}
                            {...register("email", { required: translation?.requiredMessage })}
                            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message">{translation?.messageLabel}</Label>
                        <Textarea
                            id="message"
                            placeholder={translation?.messagePlaceholder}
                            {...register("message", {
                                required: translation?.requiredMessage,
                                maxLength: { value: 400, message: translation?.maxLengthMessage }
                            })}
                            className="h-32 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full bg-cblue hover:bg-blue-600 text-white rounded-lg py-3">
                        {isSubmitting ? 'Submitting...' : translation?.submitButton}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
