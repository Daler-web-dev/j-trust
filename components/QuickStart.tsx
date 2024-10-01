import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Layers, FileText, Globe, Wifi } from 'lucide-react'

const FilterButton = ({ icon, label, isActive }: { icon: React.ReactNode, label: string, isActive?: boolean }) => (
    <Button
        variant="outline"
        className={`w-[200px] flex items-center gap-2 ${isActive ? 'bg-blue-50 text-blue-600 border-blue-200' : 'text-gray-500'}`}
    >
        {icon}
        <span className="hidden sm:inline">{label}</span>
    </Button>
)

export default function QuickStart() {
    return (
        <Card className="w-full mx-auto">
            <CardContent className="p-6 space-y-6 flex flex-col justify-center items-center">
                <div className="w-full flex items-center gap-2 bg-white rounded-full shadow-lg p-2">
                    <Input
                        type="text"
                        placeholder="How will regulatory changes aff"
                        className="w-full flex-grow border-none shadow-none text-lg"
                    />
                    <Button size="icon" className="bg-blue-600 hover:bg-blue-700 rounded-full">
                        <Search className="h-5 w-5" />
                    </Button>
                </div>

                <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-gray-700 text-center">Search in</h2>
                    <div className="w-full flex flex-wrap gap-2">
                        <FilterButton icon={<Layers className="h-4 w-4" />} label="All Sources" />
                        <FilterButton icon={<FileText className="h-4 w-4" />} label="Earnings" isActive={true} />
                        <FilterButton icon={<FileText className="h-4 w-4" />} label="Filings" />
                        <FilterButton icon={<Globe className="h-4 w-4" />} label="Web" />
                        <FilterButton icon={<Wifi className="h-4 w-4" />} label="Deep Web" />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}