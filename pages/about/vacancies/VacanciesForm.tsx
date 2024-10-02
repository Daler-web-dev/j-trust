import { FieldValues, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendMessages } from "@/pages/api/sendMessages";
import { toast } from "@/hooks/use-toast";

interface Props {
    translation: {
        formTitle: string;
        personalInfo: string;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        age: string;
        position: string;
        languages: string;
        skills: string;
        additionalSkills: string;
        workExperience: string;
        startDate: string;
        endDate: string;
        company: string;
        companyDescription: string;
        jobTitle: string;
        responsibilities: string;
        education: string;
        eduStartDate: string;
        eduEndDate: string;
        institution: string;
        degree: string;
        specialization: string;
        certificates: string;
        certName: string;
        certDescription: string;
        submit: string;
        requiredField: string;
        skillsPlaceholder: string;
        additionalSkillsPlaceholder: string;
        responsibilitiesPlaceholder: string;
        certDescriptionPlaceholder: string;
        toast: {
            title: string;
            description: string;
        }
        error_toast: {
            title: string;
            description: string;
        }
    };
}

export default function VacanciesForm({ translation }: Props) {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const maxChars = 200;

    const onSubmit = (info: FieldValues) => {
        let msg = `🆕 Вакансия на трудоустройство! \n`;
        msg += `📌 Имя: ${info?.firstName} \n`;
        msg += `📌 Фамилия: ${info?.lastName} \n`;
        msg += `📌 Номер телефона: ${info?.phone} \n`;
        msg += `📌 Почта: ${info?.email} \n`;
        msg += `📌 Должность: ${info?.position} \n`;
        msg += `📌 Опыт Работы \n`;
        msg += `📌 Дата начала работы: ${info?.startDate} \n`;
        msg += `📌 Дата окончания работы: ${info?.endDate} \n`;
        msg += `📌 Название компании: ${info?.company} \n`;
        msg += `📌 Краткое описание деятельности компании: ${info?.companyDescription} \n`;
        msg += `📌 Должность в компании: ${info?.jobTitle} \n`;
        msg += `📌 Должностные обязанности в компании: ${info?.responsibilities} \n`;
        msg += `📌 Компьютерные навыки и знания \n`;
        msg += `📌 Навыки: ${info?.skills} \n`;
        msg += `📌 Дополнительные навыки: ${info?.additionalSkills} \n`;
        msg += `📌 Образование \n`;
        msg += `📌 Начало обучения: ${info?.eduStartDate} \n`;
        msg += `📌 Конец обучения: ${info?.eduEndDate} \n`;
        msg += `📌 Название место образования: ${info?.eduEndDate} \n`;
        msg += `📌 Полученная степень: ${info?.degree} \n`;
        msg += `📌 Специальность по диплому: ${info?.specialization} \n`;
        msg += `📌 Сертификаты \n`;
        msg += `📌 Название сертификата: ${info?.certName} \n`;
        msg += `📌 Краткое описание сертификата: ${info?.certDescription} \n`;

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
    };

    return (
        <Card className="w-full mx-auto">
            <CardHeader className="bg-cblue text-white">
                <CardTitle>{translation?.formTitle}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
                <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold">{translation?.personalInfo}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">{translation?.firstName}</Label>
                                    <Input id="firstName" {...register("firstName", { required: true })} />
                                    {errors.firstName && <span className="text-red-500">{translation?.requiredField}</span>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">{translation?.lastName}</Label>
                                    <Input id="lastName" {...register("lastName", { required: true })} />
                                    {errors.lastName && <span className="text-red-500">{translation?.requiredField}</span>}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">{translation?.email}</Label>
                                    <Input id="email" type="email" {...register("email", { required: true })} />
                                    {errors.email && <span className="text-red-500">{translation?.requiredField}</span>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">{translation?.phone}</Label>
                                    <Input id="phone" type="tel" {...register("phone", { required: true })} />
                                    {errors.phone && <span className="text-red-500">{translation?.requiredField}</span>}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="age">{translation?.age}</Label>
                                    <Input id="age" type="number" {...register("age", { required: true })} />
                                    {errors.age && <span className="text-red-500">{translation?.requiredField}</span>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="position">{translation?.position}</Label>
                                    <Input id="position" {...register("position", { required: true })} />
                                    {errors.position && <span className="text-red-500">{translation?.requiredField}</span>}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold">{translation?.languages}</h2>
                            {/* Add language proficiency input here if needed */}
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold">{translation?.skills}</h2>
                            <div className="space-y-2">
                                <Label htmlFor="skills">{translation?.skills}</Label>
                                <Textarea
                                    id="skills"
                                    {...register("skills")}
                                    maxLength={maxChars}
                                    className="resize-none"
                                    placeholder={translation?.skillsPlaceholder}
                                />
                                <p className="text-sm text-gray-500">{`${watch("skills")?.length || 0}/${maxChars}`}</p>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="additionalSkills">{translation?.additionalSkills}</Label>
                                <Textarea
                                    id="additionalSkills"
                                    {...register("additionalSkills")}
                                    maxLength={maxChars}
                                    className="resize-none"
                                    placeholder={translation?.additionalSkillsPlaceholder}
                                />
                                <p className="text-sm text-gray-500">{`${watch("additionalSkills")?.length || 0}/${maxChars}`}</p>
                            </div>
                        </div>

                        {/* Work Experience Section */}
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold">{translation?.workExperience}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="startDate">{translation?.startDate}</Label>
                                    <Input id="startDate" type="date" {...register("startDate")} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="endDate">{translation?.endDate}</Label>
                                    <Input id="endDate" type="date" {...register("endDate")} />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="company">{translation?.company}</Label>
                                <Input id="company" {...register("company")} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="companyDescription">{translation?.companyDescription}</Label>
                                <Textarea id="companyDescription" {...register("companyDescription")} className="resize-none" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="jobTitle">{translation?.jobTitle}</Label>
                                <Input id="jobTitle" {...register("jobTitle")} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="responsibilities">{translation?.responsibilities}</Label>
                                <Textarea
                                    id="responsibilities"
                                    {...register("responsibilities")}
                                    maxLength={maxChars}
                                    className="resize-none"
                                    placeholder={translation?.responsibilitiesPlaceholder}
                                />
                                <p className="text-sm text-gray-500">{`${watch("responsibilities")?.length || 0}/${maxChars}`}</p>
                            </div>
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold">{translation?.education}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="eduStartDate">{translation?.eduStartDate}</Label>
                                    <Input id="eduStartDate" type="date" {...register("eduStartDate")} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="eduEndDate">{translation?.eduEndDate}</Label>
                                    <Input id="eduEndDate" type="date" {...register("eduEndDate")} />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="institution">{translation?.institution}</Label>
                                <Input id="institution" {...register("institution")} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="degree">{translation?.degree}</Label>
                                <Input id="degree" {...register("degree")} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="specialization">{translation?.specialization}</Label>
                                <Input id="specialization" {...register("specialization")} />
                            </div>
                        </div>

                        {/* Certificates Section */}
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold">{translation?.certificates}</h2>
                            <div className="space-y-2">
                                <Label htmlFor="certName">{translation?.certName}</Label>
                                <Input id="certName" {...register("certName")} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="certDescription">{translation?.certDescription}</Label>
                                <Textarea
                                    id="certDescription"
                                    {...register("certDescription")}
                                    maxLength={maxChars}
                                    className="resize-none"
                                    placeholder={translation?.certDescriptionPlaceholder}
                                />
                                <p className="text-sm text-gray-500">{`${watch("certDescription")?.length || 0}/${maxChars}`}</p>
                            </div>
                        </div>
                    </div>

                    <Button type="submit" className="mt-4">
                        {translation?.submit}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
