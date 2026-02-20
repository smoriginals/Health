import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select"

export default function Booking() {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        city: "",
        treatment: "",
        query: "",
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }

    const features = [
        "Get Free Consultations for 300+ Medical Conditions Across India",
        "Online and In-Person Consultations with Expert Specialists",
        "Comprehensive Assistance Throughout Your Treatment Journey",
    ]

    const cities = [
        "Mumbai",
        "Delhi",
        "Bangalore",
        "Hyderabad",
        "Chennai",
        "Kolkata",
        "Pune",
        "Ahmedabad",
        "Jaipur",
        "Lucknow",
        "Gurgaon",
        "Noida",
    ]

    const treatments = [
        "Cardiology",
        "Orthopedics",
        "Neurology",
        "Gastroenterology",
        "Oncology",
        "Urology",
        "General Surgery",
        "Plastic Surgery",
        "Ophthalmology",
        "Dermatology",
        "ENT",
        "Gynecology",
    ]

    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-cyan-50 to-blue-50 px-4 py-16 md:py-20">
            <div className="mx-auto max-w-7xl">
                <div className="grid items-start gap-12 lg:grid-cols-2">

                    {/* LEFT */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="mb-4 text-3xl font-bold text-teal-900 md:text-4xl lg:text-5xl">
                                Find the right doctor and hospital
                            </h2>

                            <p className="text-base text-teal-800 md:text-lg">
                                HexaHealth supports your treatment journey — from doctor discovery,
                                hospital matching, AI recommendations, admissions, insurance,
                                financing and recovery support.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {features.map((text, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl bg-white p-4 shadow-sm"
                                >
                                    <p className="font-medium text-teal-800">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <div>
                        <div className="rounded-2xl bg-white p-6 shadow-md md:p-8">
                            <h3 className="mb-6 text-xl font-bold text-teal-900 md:text-2xl">
                                Book Appointment
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-5">

                                {/* Name */}
                                <Input
                                    name="name"
                                    placeholder="Enter your name*"
                                    className="h-14 border-gray-400"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />

                                {/* Mobile */}
                                <div className="flex gap-2">
                                    <Input
                                        value="+91"
                                        disabled
                                        className="h-14 max-w-[70px] border-gray-400"
                                    />

                                    <Input
                                        name="mobile"
                                        placeholder="Enter mobile number*"
                                        className="h-14 border-gray-400"
                                        value={formData.mobile}
                                        onChange={handleInputChange}
                                        pattern="[0-9]{10}"
                                        required
                                    />
                                </div>

                                {/* City */}
                                <Select
                                    value={formData.city}
                                    onValueChange={(v) =>
                                        setFormData((p) => ({ ...p, city: v }))
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select City" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        {cities.map((city) => (
                                            <SelectItem key={city} value={city}>
                                                {city}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                {/* Treatment */}
                                <Select
                                    value={formData.treatment}
                                    onValueChange={(v) =>
                                        setFormData((p) => ({ ...p, treatment: v }))
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Treatment" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        {treatments.map((t) => (
                                            <SelectItem key={t} value={t}>
                                                {t}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                {/* Query */}
                                <Textarea
                                    name="query"
                                    placeholder="Describe your issue (optional)"
                                    value={formData.query}
                                    onChange={handleInputChange}
                                />

                                {/* Submit */}
                                <Button
                                    type="submit"
                                    className="h-16 w-full text-xl font-semibold"
                                >
                                    Book Appointment
                                </Button>

                                {/* Terms */}
                                <p className="text-center text-xs text-gray-600">
                                    By proceeding you agree to our{" "}
                                    <a
                                        href="#"
                                        className="font-medium text-teal-600 hover:underline"
                                    >
                                        terms & conditions
                                    </a>
                                </p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* BG blobs */}
            <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-teal-200/30 blur-3xl" />
            <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-blue-200/30 blur-3xl" />
        </section>
    )
}