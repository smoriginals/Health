import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"



    const topics = [
        "Symptoms of Piles",
        "Best Hospitals Near Me",
        "Find Specialist Doctors",
        "Treatment Cost Estimate",
        "Surgery Options",
        "Home Remedies",
        "Diet & Lifestyle Tips",
        "Recovery Time Guide",
        "Insurance Coverage Help",
        "Book Appointment Online",
        "Symptoms of Piles",
        "Best Hospitals Near Me",
        "Find Specialist Doctors",
        "Treatment Cost Estimate",
        "Surgery Options",
        "Home Remedies",
        "Diet & Lifestyle Tips",
        "Recovery Time Guide",
        "Insurance Coverage Help",
        "Book Appointment Online",


    ];
export default function SelectTopic({ value, onChange }) {


    return (
        <Select value={value} onValueChange={onChange}>

            <SelectTrigger className="w-full" >
                <SelectValue placeholder="Select your Topic" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Choose</SelectLabel>

                    <ScrollArea className="h-72 w-full rounded-md border">
                        <div className="p-4">
                         
                            {topics.map((tag, i) => (
                                <SelectItem key={i} value={tag}>
                                    {tag}
                                </SelectItem>
                            ))}

                        </div>
                    </ScrollArea>

                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
