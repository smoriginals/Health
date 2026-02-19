import React from "react"
import { Search, MapPin, WandSparkles, ChevronRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
export default function Sidebar() {

    const items = [
        "Symptoms of Piles",
        "Best Hospitals in Delhi",
        "Best Doctors for Piles",
        "Piles Treatment Cost",
        "Piles Surgery Cost",
        "Piles Home Remedies",

    ];

    return (
        <>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" className="rounded-full border p-2 text-blue-600 h-9 w-9 flex justify-center items-center">
                        <Search size={20} />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className='text-left mt-8 flex items-center gap-1 p-1'>
                            <MapPin size={20} />
                            <p>Delhi</p>
                        </SheetTitle>

                    </SheetHeader>
                    <div className="flex h-full pb-14 flex-col">

                        {/* TOP CONTENT */}
                        <div className="flex-1 space-y-4 py-4">
                            <Input
                                className="h-16"
                                placeholder="Search For Doctor, Hospital,..."
                            />

                            <Button
                                type="submit"
                                className="h-10 text-md w-full"
                            >
                                Search
                            </Button>

                            <div className="w-full rounded-xl border bg-blue-50 overflow-hidden">

                                {/* Header */}
                                <div className="text-sm font-semibold bg-blue-100 text-blue-800 flex justify-center items-center gap-2 py-2">
                                    <WandSparkles size={16} className="fill-blue-600 stroke-blue-600" />
                                    HealthGPT
                                </div>

                                {/* List */}
                                <div className="divide-y bg-blue-200">
                                    {items.map((text, i) => (
                                        <div
                                            key={i}
                                            className="flex justify-between items-center px-3 py-2 hover:bg-blue-300 cursor-pointer transition"
                                        >
                                            <div className="flex items-center gap-2 font-semibold text-gray-700">
                                                <Sparkles size={16} />
                                                <p>{text}</p>
                                            </div>

                                            <ChevronRight size={18} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* BOTTOM CLOSE BUTTON */}
                        <SheetClose asChild>
                            <Button
                                variant="outline"
                                className="h-10 text-md w-full"
                            >
                                Close
                            </Button>
                        </SheetClose>

                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}