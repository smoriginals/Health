import React from "react";
import { Hospital, Stethoscope, Phone } from "lucide-react";
import BookingAppointments from "../Main/BookingAppointments";

export default function Symptoms() {

    const OpenWhatsapp = (e) => {
        e.preventDefault()

        window.open(
            "https://api.whatsapp.com/send/?phone=918860688606&text=Hi%2C+I+want+to+book+an+appointment+with+a+Cardiology+doctor+departmentid%3D33&type=phone_number&app_absent=0",
            "_blank"
        );
        console.log("clicked")
    }

    return (
        <>
            <section className="relative top-16 bg-gray-100 py-6">
                <div className="mx-auto max-w-7xl px-4">

                    {/* Heading */}
                    <h1 className="mb-10 text-center text-2xl font-bold md:text-4xl">
                        Piles: Symptoms, Images, Causes, and Types
                    </h1>

                    {/* Main Grid */}
                    <div className="grid items-center gap-10 md:grid-cols-2">

                        {/* Left Side */}
                        <div className="space-y-6 p-2">

                            <h2 className="text-lg font-semibold text-teal-600">
                                Hexa Health Benefits
                            </h2>

                            {/* Benefits */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                                        <Hospital className="h-6 w-6 text-teal-600" />
                                    </div>
                                    <p className="font-medium">
                                        Trusted Doctors and Top Hospitals
                                    </p>
                                </div>

                                <div className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                                        <Stethoscope className="h-6 w-6 text-teal-600" />
                                    </div>
                                    <p className="font-medium">
                                        Consultations with expert surgeons
                                    </p>
                                </div>

                                <div className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                                        <Phone className="h-6 w-6 text-teal-600" />
                                    </div>
                                    <p className="font-medium">
                                        Extensive assistance throughout your treatment
                                    </p>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                                <BookingAppointments>
                                    <button className="w-full rounded-full bg-teal-600 px-6 py-3 font-medium text-white transition hover:bg-teal-700">
                                        Book Appointment
                                    </button>
                                </BookingAppointments>

                                <button className="rounded-full border border-green-500 px-6 py-3 font-medium text-green-600 transition hover:bg-green-50" onClick={OpenWhatsapp }>
                                    WhatsApp Expert
                                </button>
                            </div>

                        </div>

                        {/* Right Side Image */}
                        <div className="hidden w-full md:block">
                            <img
                                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b"
                                alt="Medical Consultation"
                                className="h-[450px] w-full rounded-2xl object-cover shadow-lg"
                            />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}