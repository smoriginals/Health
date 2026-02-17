import React, { useState } from "react";
import { Star, Calendar, MapPin, Stethoscope } from "lucide-react";

export default function Doctors() {
    const cities = [
        "Delhi", "Gurugram", "Noida", "Bangalore",
        "Mumbai", "Ahmedabad", "Pune", "Kolkata",
        "Bhubaneswar", "Hyderabad"
    ];

    const [activeCity, setActiveCity] = useState("Delhi");

    const doctors = [
        {
            name: "Dr. Priya Sharma",
            speciality: "Cardiologist",
            experience: "15+ Years",
            location: "Dwarka, Delhi",
            hospital: "Manipal Hospital",
            rating: "4.8",
            reviews: 212,
            badge: "Top Rated",
            avatar: "https://via.placeholder.com/100"
        },
        {
            name: "Dr. Rakesh Gupta",
            speciality: "Orthopaedic Surgeon",
            experience: "12+ Years",
            location: "Nehru Place, Delhi",
            hospital: "MASSH Hospital",
            rating: "4.7",
            reviews: 189,
            badge: "Expert",
            avatar: "https://via.placeholder.com/100"
        },
        {
            name: "Dr. Anjali Mehta",
            speciality: "Ophthalmologist",
            experience: "10+ Years",
            location: "Model Town, Delhi",
            hospital: "ASG Eye Hospital",
            rating: "5.0",
            reviews: 143,
            badge: "Top Rated",
            avatar: "https://via.placeholder.com/100"
        },
        {
            name: "Dr. Suresh Patel",
            speciality: "Neurologist",
            experience: "18+ Years",
            location: "Saket, Delhi",
            hospital: "Max Hospital",
            rating: "4.9",
            reviews: 310,
            badge: "Expert",
            avatar: "https://via.placeholder.com/100"
        },
        {
            name: "Dr. Neha Verma",
            speciality: "Gynaecologist",
            experience: "9+ Years",
            location: "Shalimar Bagh, Delhi",
            hospital: "Fortis Hospital",
            rating: "4.6",
            reviews: 97,
            badge: "Top Rated",
            avatar: "https://via.placeholder.com/100"
        }
    ];

    return (
        <div className="relative top-16 bg-slate-100 px-4 py-10">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <h2 className="mb-2 text-2xl font-bold text-blue-900 sm:text-3xl">
                    Top Expert Doctors Near You
                </h2>
                <p className="mb-6 text-sm text-gray-500">
                    Consult experienced specialists trusted by thousands of patients
                </p>

                {/* City Chips — CSS scroll */}
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

                {/* Doctor Cards — CSS scroll */}
                <div
                    className="flex gap-5 overflow-x-auto pb-4"
                    style={{ scrollbarWidth: "none" }}
                >
                    {doctors.map((d, i) => (
                        <div
                            key={i}
                            className="flex w-64 flex-shrink-0 flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >
                            {/* Avatar + Badge */}
                            <div className="mb-4 flex items-start justify-between">
                                <img
                                    src={d.avatar}
                                    alt={d.name}
                                    className="h-16 w-16 rounded-xl border border-gray-100 object-cover"
                                />
                                <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 font-bold uppercase tracking-wide text-[10px] text-blue-700">
                                    {d.badge}
                                </span>
                            </div>

                            {/* Name & Speciality */}
                            <h3 className="mb-0.5 font-bold leading-snug text-blue-900">
                                {d.name}
                            </h3>
                            <div className="mb-1 flex items-center gap-1 text-sm font-medium text-teal-600">
                                <Stethoscope size={13} className="flex-shrink-0" />
                                {d.speciality}
                            </div>

                            {/* Experience */}
                            <p className="mb-2 text-xs text-gray-400">{d.experience} Experience</p>

                            {/* Location */}
                            <div className="mb-1 flex items-center gap-1 text-xs text-gray-500">
                                <MapPin size={11} className="flex-shrink-0 text-blue-400" />
                                {d.hospital}
                            </div>
                            <div className="mb-4 flex items-center gap-1 text-xs text-gray-400">
                                <MapPin size={11} className="flex-shrink-0 text-transparent" />
                                {d.location}
                            </div>

                            {/* Divider */}
                            <div className="mb-4 h-px bg-gray-100" />

                            {/* Rating */}
                            <div className="mb-5 flex items-center gap-2">
                                <div className="flex items-center gap-1 rounded-full bg-orange-50 px-2.5 py-1">
                                    <Star size={13} className="fill-orange-400 text-orange-400" />
                                    <span className="text-sm font-bold text-orange-600">{d.rating}</span>
                                </div>
                                <span className="text-xs text-gray-400">({d.reviews} Ratings)</span>
                            </div>

                            {/* CTA */}
                            <button className="mt-auto flex w-full items-center justify-center gap-2 rounded-full border border-blue-500 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white">
                                <Calendar size={15} />
                                Book Appointment
                            </button>
                        </div>
                    ))}

                    {/* View All Card */}
                    <div className="flex w-52 flex-shrink-0 flex-col items-center justify-center rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-100 to-cyan-100 p-6 text-center">
                        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow">
                            <span className="text-2xl">👨‍⚕️</span>
                        </div>
                        <h3 className="mb-1 font-bold text-blue-900">5000+ Doctors</h3>
                        <p className="mb-5 text-xs leading-relaxed text-blue-700">
                            Find expert doctors across all specialities near you
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