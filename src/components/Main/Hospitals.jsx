import React, { useState } from "react";
import { Star, Calendar, MapPin } from "lucide-react";
import BookingAppointments from "../Main/BookingAppointments";

export default function Hospitals() {
    const cities = [
        "Delhi", "Gurugram", "Noida", "Bangalore",
        "Mumbai", "Ahmedabad", "Pune", "Kolkata",
        "Bhubaneswar", "Hyderabad"
    ];

    const [activeCity, setActiveCity] = useState("Delhi");

    const hospitals = [
        {
            name: "Manipal Hospital, Dwarka",
            location: "Dwarka, Delhi",
            rating: "4.51",
            reviews: 91,
            badge: "JCI & NABH",
            logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.crownasia.com.ph%2Fwp-content%2Fuploads%2F2023%2F07%2FThe-Best-Hospitals-in-Laguna.jpg&f=1&nofb=1&ipt=402ddc8e0da5f3fddfdfda20526a1f040130f3bfe3dd011e3072f7f6be1a9b96"
        },
        {
            name: "MASSH Hospital, Nehru Place",
            location: "Nehru Place, Delhi",
            rating: "4.5",
            reviews: 98,
            badge: "NABH",
            logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.aplus.co.id%2Fwp-content%2Fuploads%2Fimg-project-hospital-altius-001.jpg&f=1&nofb=1&ipt=99e5a462335fee9ab94f1e83f7f2a32961817140fe091702041f8dab417d3bc3"
        },
        {
            name: "ASG Eye Hospital (Narang Eye Institute)",
            location: "Model Town, Delhi",
            rating: "5.0",
            reviews: 98,
            badge: "NABH",
            logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hospitalmanagement.net%2Fwp-content%2Fuploads%2Fsites%2F9%2F2022%2F06%2FTop-hospitals-in-Texas-by-bed-size-in-2021.jpg&f=1&nofb=1&ipt=e358f57a3da5bdf1234494e6926413fe9bf34127fc226fdb5da469d1f5fa248f"
        },
        {
            name: "Fortis Hospital, Shalimar Bagh",
            location: "Shalimar Bagh, Delhi",
            rating: "4.7",
            reviews: 124,
            badge: "JCI & NABH",
            logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.futuremedisurgico.com%2Fassets%2Fimages%2FHospitals.jpg&f=1&nofb=1&ipt=830c67f8a832e6cac4f76337e123c8d5ff8e862f7246066080f5f2938aa4127c"
        },
        {
            name: "Max Super Speciality Hospital",
            location: "Saket, Delhi",
            rating: "4.6",
            reviews: 210,
            badge: "JCI",
            logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedicaldialogues.in%2Fh-upload%2F2022%2F08%2F31%2F184713-manipal-hospital-pune.jpg&f=1&nofb=1&ipt=d9297d65f9d14d7afbe6c894bd8b987a31aa9086a7dc29f4dc827892cfd89bd1"
        }
    ];

    return (
        <div className="relative top-16 mt-4 bg-slate-100 px-4 py-6">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <h2 className="mb-2 text-2xl font-bold text-blue-900 sm:text-3xl">
                    Top JCI & NABH Accredited Hospitals
                </h2>
                <p className="mb-6 text-sm text-gray-500">
                    Trusted hospitals with world-class facilities across India
                </p>

                {/* City Chips */}
                <div
                    className="mb-8 flex gap-2 overflow-x-auto pb-2"
                    style={{ scrollbarWidth: "none" }}
                >
                    {cities.map((city) => (
                        <button
                            key={city}
                            onClick={() => setActiveCity(city)}
                            className={`flex-shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all ${activeCity === city
                                ? "border-blue-500 bg-blue-600 text-white"
                                : "border-gray-300 bg-white text-gray-600 hover:border-blue-300 hover:bg-blue-50"
                                }`}
                        >
                            {city}
                        </button>
                    ))}
                </div>

                {/* Hospital Cards */}
                <div
                    className="flex gap-5 overflow-x-auto pb-4"
                    style={{ scrollbarWidth: "none" }}
                >
                    {hospitals.map((h, i) => (
                        <div
                            key={i}
                            className="flex w-72 flex-shrink-0 flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >
                            {/* Logo + Badge */}
                            <div className="mb-4 flex items-start justify-between">
                                <img
                                    src={h.logo}
                                    alt={h.name}
                                    className="h-14 w-20 rounded-lg border border-gray-100 object-contain p-1"
                                />
                                <span className="rounded-full border border-green-200 bg-green-50 px-2.5 py-1 font-bold uppercase tracking-wide text-[10px] text-green-700">
                                    {h.badge}
                                </span>
                            </div>

                            {/* Name & Location */}
                            <h3 className="mb-1 font-bold leading-snug text-blue-900">
                                {h.name}
                            </h3>
                            <div className="mb-4 flex items-center gap-1 text-sm text-gray-500">
                                <MapPin size={13} className="flex-shrink-0 text-blue-400" />
                                {h.location}
                            </div>

                            {/* Divider */}
                            <div className="mb-4 h-px bg-gray-100" />

                            {/* Rating */}
                            <div className="mb-5 flex items-center gap-2">
                                <div className="flex items-center gap-1 rounded-full bg-orange-50 px-2.5 py-1">
                                    <Star size={13} className="fill-orange-400 text-orange-400" />
                                    <span className="text-sm font-bold text-orange-600">{h.rating}</span>
                                </div>
                                <span className="text-xs text-gray-400">({h.reviews} Ratings)</span>
                            </div>

                            {/* CTA */}
                            <BookingAppointments>
                                <button className="mt-auto flex w-full items-center justify-center gap-2 rounded-full border border-blue-500 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white">
                                    <Calendar size={15} />
                                    Book Appointment
                                </button>
                            </BookingAppointments>
                        </div>
                    ))}

                    {/* View All Card */}
                    <div className="flex w-56 flex-shrink-0 flex-col items-center justify-center rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-100 to-cyan-100 p-6 text-center">
                        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow">
                            <span className="text-2xl">🏥</span>
                        </div>
                        <h3 className="mb-1 font-bold text-blue-900">500+ Hospitals</h3>
                        <p className="mb-5 text-xs leading-relaxed text-blue-700">
                            Explore all JCI & NABH accredited hospitals near you
                        </p>
                        <button className="rounded-full border border-blue-500 bg-white px-5 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white">
                            View All →
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}