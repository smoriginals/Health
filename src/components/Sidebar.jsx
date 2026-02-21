import React from "react"
import { Search, MapPin, WandSparkles, ChevronRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const items = [
    "Symptoms of Piles",
    "Best Hospitals in Delhi",
    "Best Doctors for Piles",
    "Piles Treatment Cost",
    "Piles Surgery Cost",
    "Piles Home Remedies",
];
export default function Sidebar() {


    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="outline"
                    className="flex h-9 w-9 items-center justify-center rounded-full border p-2 text-blue-600"
                >
                    <Search size={20} />
                </Button>
            </SheetTrigger>

            {/* 👇 Control width HERE */}
            <SheetContent className="w-full sm:max-w-md">

                <SheetHeader>
                    <SheetTitle className="mt-8 flex items-center gap-1 p-1 text-left">
                        <MapPin size={20} />
                        <p>Delhi</p>
                    </SheetTitle>
                </SheetHeader>

                {/* 👇 Proper flex layout */}
                <div className="flex h-full w-full flex-col pb-14">

                    {/* TOP */}
                    <div className="flex-1 space-y-4 overflow-y-auto py-4">

                        <Input
                            className="h-16"
                            placeholder="Search For Doctor, Hospital,..."
                        />

                        <Button
                            type="submit"
                            className="text-md h-10 w-full"
                        >
                            Search
                        </Button>

                        <div className="w-full overflow-hidden rounded-xl border bg-blue-50">

                            {/* Header */}
                            <div className="flex items-center justify-center gap-2 bg-blue-100 py-2 text-sm font-semibold text-blue-800">
                                <WandSparkles
                                    size={16}
                                    className="fill-blue-600 stroke-blue-600"
                                />
                                HealthGPT
                            </div>

                            {/* List */}
                            <div className="divide-y bg-blue-200">
                                {items.map((text, i) => (
                                    <div
                                        key={i}
                                        className="flex cursor-pointer items-center justify-between px-3 py-2 transition hover:bg-blue-300"
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

                    {/* BOTTOM */}
                    <SheetClose asChild>
                        <Button
                            variant="outline"
                            className="text-md h-10 w-full"
                        >
                            Close
                        </Button>
                    </SheetClose>

                </div>
            </SheetContent>
        </Sheet>
    )
}