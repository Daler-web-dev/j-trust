import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

interface Block {
    top: string
    left: string
    size: string
    opacity: number
}

export default function Hero({ translation }: {
    translation: {
        company: string,
        title: string,
        subtitle: string,
        text: string,
        button: string
    }
}) {
    const [blocks, setBlocks] = useState<Block[]>([])

    useEffect(() => {
        const newBlocks: Block[] = []
        for (let i = 0; i < 50; i++) {
            newBlocks.push({
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                size: `${Math.random() * 2 + 1}rem`,
                opacity: Math.random() * 0.5 + 0.1
            })
        }
        setBlocks(newBlocks)
    }, [])

    return (
        <div className="relative min-h-[80vh] flex items-start justify-center overflow-hidden pt-20">
            {/* Background pattern */}
            <div className="absolute inset-0 pointer-events-none">
                {blocks.map((block, index) => (
                    <div
                        key={index}
                        className="absolute bg-gray-200 rounded-lg"
                        style={{
                            top: block.top,
                            left: block.left,
                            width: block.size,
                            height: block.size,
                            opacity: block.opacity,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-1 text-center px-4 max-w-4xl mx-auto">
                <p className="text-gray-500 font-medium text-xl mb-5">{translation?.company}</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-5">
                    {translation?.title} <span className="text-gray-600 font-medium text-3xl lg:text-5xl">{translation?.subtitle}</span>
                </h1>
                <p className="text-gray-500 font-medium text-xl mb-10">{translation?.text}</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href={"/about"}>
                        <Button size="lg" className="bg-cblue hover:bg-blue-600 text-white px-20 text-lg py-5">
                            {translation?.button}
                        </Button>
                    </Link>
                    {/* <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                        Open An Account
                    </Button> */}
                </div>
            </div>
        </div>
    )
}