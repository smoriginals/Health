import { useState, useRef } from "react"
import BookingCity from "../HexaComponents/BookingCity"
import { ArrowUpFromLine } from "lucide-react"

import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"



export default function SecondOption({ children }) {

    const fileRef = useRef(null)

    const [location, setLocation] = useState({})

    const [form, setForm] = useState({
        name: "",
        mobile: "",
        treatment: "",
        issue: "",
        report: null,
    })

    const update = (k, v) =>
        setForm(f => ({ ...f, [k]: v }))

    const handleFile = (e) => {
        const file = e.target.files[0]
        if (file) update("report", file)
    }

    const submit = () => {
        console.log({
            ...form,
            location
        })
    }

    // Shared Trigger
    const TriggerUI = children || (
        <Button className="bg-black text-white">
            Book Appointment
        </Button>
    )

    // Shared Form
    const FormUI = (
        <div className="mt-4 space-y-4">

            <Input
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
            />

            <Input
                type="tel"
                placeholder="Mobile Number"
                value={form.mobile}
                onChange={(e) => update("mobile", e.target.value)}
            />

            <BookingCity onChange={setLocation} />

            {/* Treatment */}
            <Select onValueChange={(v) => update("treatment", v)}>
                <SelectTrigger>
                    <SelectValue placeholder="Select Treatment" />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="cardiology">Cardiology</SelectItem>
                    <SelectItem value="orthopedic">Orthopedic</SelectItem>
                    <SelectItem value="dermatology">Dermatology</SelectItem>
                    <SelectItem value="general">General Physician</SelectItem>
                </SelectContent>
            </Select>

            {/* Report Upload */}
            <div className="space-y-2">

                <input
                    ref={fileRef}
                    type="file"
                    hidden
                    onChange={handleFile}
                />

                <Button
                    type="button"
                    className="flex h-12 w-full items-center gap-2 font-semibold"
                    onClick={() => fileRef.current?.click()}
                >
                    <ArrowUpFromLine size={18} />
                    Upload Report
                </Button>

                {form.report && (
                    <p className="truncate text-xs text-gray-500">
                        Selected: {form.report.name}
                    </p>
                )}

            </div>

            <Textarea
                rows={4}
                placeholder="Describe your issue"
                value={form.issue}
                onChange={(e) => update("issue", e.target.value)}
            />

            <Button
                className="h-12 w-full bg-black text-lg font-semibold hover:bg-black/80"
                onClick={submit}
            >
                Book Appointment
            </Button>

            <p className="text-center text-xs text-gray-500">
                By continuing, you agree to our terms and privacy policy.
            </p>

        </div>
    )

    return (
        <>
            {/* MOBILE */}
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        {TriggerUI}
                    </SheetTrigger>

                    <SheetContent
                        side="bottom"
                        className="max-h-[90vh] overflow-y-auto rounded-t-2xl"
                    >
                        <SheetHeader>
                            <SheetTitle className="text-2xl">
                                Book Appointment
                            </SheetTitle>
                        </SheetHeader>

                        {FormUI}
                    </SheetContent>
                </Sheet>
            </div>

            {/* DESKTOP */}
            <div className="hidden md:block">
                <Dialog>
                    <DialogTrigger asChild>
                        {TriggerUI}
                    </DialogTrigger>

                    <DialogContent className="max-w-lg">
                        <DialogHeader>
                            <DialogTitle className="text-2xl">
                                Book Appointment
                            </DialogTitle>
                        </DialogHeader>

                        {FormUI}
                    </DialogContent>
                </Dialog>
            </div>
        </>
    )
}