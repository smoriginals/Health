import { useState } from "react"
import CitySearch from "../Components/CitySearch"

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



export default function BookingAppointments({ children }) {

    const [form, setForm] = useState({
        name: "",
        mobile: "",
        treatment: "",
        issue: ""
    })

    const update = (k, v) =>
        setForm(f => ({ ...f, [k]: v }))

    const submit = () => {
        console.log(form)
    }

    // ===== SHARED FORM =====
    const FormUI = (
        <div className="space-y-4 mt-4">

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

            {/* Your City Search */}
            <CitySearch />

            {/* Treatment Select */}
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

            <Textarea
                rows={4}
                placeholder="Describe your issue"
                value={form.issue}
                onChange={(e) => update("issue", e.target.value)}
            />

            <Button
                className="w-full h-12 text-lg bg-black hover:bg-black/80"
                onClick={submit}
            >
                Book Appointment
            </Button>

            <p className="text-xs text-gray-500 text-center">
                By continuing, you agree to our terms and privacy policy.
            </p>
        </div>
    )


    return (
        <>

            {/* ===== MOBILE SHEET ===== */}
            <div className="md:hidden">

                <Sheet>
                    <SheetTrigger asChild>
                        {children}
                    </SheetTrigger>

                    <SheetContent side="bottom" className="h-auto rounded-t-2xl overflow-y-auto">

                        <SheetHeader>
                            <SheetTitle className="text-2xl">
                                Book Appointment
                            </SheetTitle>
                        </SheetHeader>

                        {FormUI}

                    </SheetContent>
                </Sheet>

            </div>


            {/* ===== DESKTOP CENTER POPUP ===== */}
            <div className="hidden md:block">

                <Dialog>

                    <DialogTrigger asChild>
                        {children}
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
