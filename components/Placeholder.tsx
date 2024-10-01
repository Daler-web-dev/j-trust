"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image"

interface Image {
    id: number
    title: string
    url: string
}

export default function Placeholder() {
    const loading = true
    const images: Image[] = [
        { id: 1, title: "Image 1", url: "/images/placeholder.svg" },
        { id: 2, title: "Image 2", url: "/images/placeholder.svg" },
        { id: 3, title: "Image 3", url: "/images/placeholder.svg" },
        { id: 4, title: "Image 4", url: "/images/placeholder.svg" },
        { id: 5, title: "Image 5", url: "/images/placeholder.svg" },
    ]

    return (
        <div className="container mx-auto space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Images</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {loading
                            ? Array.from({ length: 3 }).map((_, index) => (
                                <Skeleton key={index} className="h-48 w-full" />
                            ))
                            : images.map(image => (
                                <div key={image.id} className="space-y-2 border border-gray-200 rounded-lg p-2">
                                    <Image
                                        src={image.url}
                                        alt={image.title}
                                        className="w-full h-48 object-cover rounded-lg"
                                    />
                                    <p className="text-sm font-medium text-center">{image.title}</p>
                                </div>
                            ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}