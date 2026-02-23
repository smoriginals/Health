import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function BookingCard() {
    return (
        <div className="fixed right-10 top-24 z-40 hidden lg:block">
            <Card className="w-[360px] rounded-2xl border-0 bg-blue-50 shadow-xl">
                <CardContent className="space-y-5 p-6">

                    <h2 className="text-lg font-semibold text-gray-800">
                        Book Appointment for Piles
                    </h2>

                    <Input
                        placeholder="Enter Your Name*"
                        className="h-12 rounded-xl bg-white"
                    />

                    <div className="flex gap-2">
                        <div className="flex items-center rounded-xl border bg-white px-3 text-sm text-gray-600">
                            +91
                        </div>
                        <Input
                            placeholder="Enter 10 Digit Mobile Number*"
                            className="h-12 rounded-xl bg-white"
                        />
                    </div>

                    <Select>
                        <SelectTrigger className="h-12 rounded-xl bg-white">
                            <SelectValue placeholder="Select City" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="delhi">Delhi</SelectItem>
                            <SelectItem value="lucknow">Lucknow</SelectItem>
                            <SelectItem value="mumbai">Mumbai</SelectItem>
                            <SelectItem value="bangalore">Bangalore</SelectItem>
                        </SelectContent>
                    </Select>

                    <Button className="h-12 w-full rounded-full bg-teal-600 text-white hover:bg-teal-700">
                        Book Appointment
                    </Button>

                    <p className="text-xs text-gray-600">
                        *By proceeding, you agree to our{" "}
                        <span className="cursor-pointer font-medium underline">
                            terms and conditions
                        </span>
                    </p>

                </CardContent>
            </Card>
        </div>
    )
}