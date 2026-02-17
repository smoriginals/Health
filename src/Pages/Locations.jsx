import React, { useState } from "react";
import { MapPin, Building2, UserRound, ChevronRight } from "lucide-react";

const locations = [
    {
        name: "Delhi",
        hospitals: 48,
        doctors: 720,
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=150",
    },
    {
        name: "Ahmedabad",
        hospitals: 12,
        doctors: 328,
        image: "https://images.unsplash.com/photo-1599342564264-6729a6078174?auto=format&fit=crop&q=80&w=150",
    },
    {
        name: "Bangalore",
        hospitals: 109,
        doctors: 1409,
        image: "https://images.unsplash.com/photo-1599933333333-c60317e81881?auto=format&fit=crop&q=80&w=150",
    },
    {
        name: "Noida",
        hospitals: 14,
        doctors: 324,
        image: "https://images.unsplash.com/photo-1588615419957-ad6929972323?auto=format&fit=crop&q=80&w=150",
    },
    {
        name: "Gurgaon",
        hospitals: 30,
        doctors: 597,
        image: "https://images.unsplash.com/photo-1622353381669-026079c6563e?auto=format&fit=crop&q=80&w=150",
    },
    {
        name: "Hyderabad",
        hospitals: 45,
        doctors: 890,
        image: "https://images.unsplash.com/photo-1572445271230-a78b5944a659?auto=format&fit=crop&q=80&w=150",
    },
    {
        name: "Mumbai",
        hospitals: 67,
        doctors: 1120,
        image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80&w=150",
    },
    {
        name: "Pune",
        hospitals: 38,
        doctors: 610,
        image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80&w=150",
    },
];

export default function Locations() {
    const [active, setActive] = useState(0);

    return (
        <div className="relative top-0 bg-slate-100 px-4 py-16">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <h2 className="mb-2 text-2xl font-bold text-blue-900 sm:text-3xl">
                    Our Locations
                </h2>
                <p className="mb-10 text-sm text-gray-500">
                    Find top doctors and hospitals in your city
                </p>

                {/* ── DESKTOP: map left + list right ── */}
                <div className="hidden lg:grid lg:grid-cols-2 lg:items-start lg:gap-10">

                    {/* Left — India map */}
                    <div className="sticky top-24 overflow-hidden rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
                        <div className="relative flex items-center justify-center">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/e/e0/India_map_transparent.png"
                                alt="India Map"
                                className="h-auto w-full max-w-sm opacity-80 drop-shadow-xl"
                                style={{ filter: "hue-rotate(180deg) brightness(0.65)" }}
                            />
                            {/* Animated pin */}
                            <div className="absolute left-[44%] top-[28%] animate-bounce">
                                <MapPin className="h-7 w-7 fill-teal-400 text-teal-600" />
                            </div>
                            {/* Active city label */}
                            <div className="-translate-x-1/2 absolute bottom-4 left-1/2 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg">
                                📍 {locations[active].name}
                            </div>
                        </div>
                    </div>

                    {/* Right — location list */}
                    <div className="space-y-3">
                        {locations.map((loc, i) => (
                            <div
                                key={loc.name}
                                onClick={() => setActive(i)}
                                className={`flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition-all duration-200 ${active === i
                                        ? "border-blue-400 bg-blue-50 shadow-md"
                                        : "border-gray-100 bg-white shadow-sm hover:border-blue-200 hover:shadow-md"
                                    }`}
                            >
                                <img
                                    src={loc.image}
                                    alt={loc.name}
                                    className="h-14 w-14 flex-shrink-0 rounded-full border-2 border-white object-cover shadow"
                                />
                                <div className="flex-1">
                                    <h3 className={`font-bold ${active === i ? "text-blue-700" : "text-blue-900"}`}>
                                        {loc.name}
                                    </h3>
                                    <div className="mt-1 flex flex-wrap gap-3 text-xs text-gray-500">
                                        <span className="flex items-center gap-1">
                                            <Building2 size={12} className="text-blue-400" />
                                            {loc.hospitals} Hospitals
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <UserRound size={12} className="text-blue-400" />
                                            {loc.doctors} Doctors
                                        </span>
                                    </div>
                                </div>
                                <ChevronRight size={18} className={active === i ? "text-blue-500" : "text-gray-300"} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── MOBILE: scrollable city chips + cards ── */}
                <div className="lg:hidden">

                    {/* City chips */}
                    <div
                        className="mb-6 flex gap-2 overflow-x-auto pb-2"
                        style={{ scrollbarWidth: "none" }}
                    >
                        {locations.map((loc, i) => (
                            <button
                                key={loc.name}
                                onClick={() => setActive(i)}
                                className={`flex-shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all ${active === i
                                        ? "border-blue-500 bg-blue-600 text-white"
                                        : "border-gray-300 bg-white text-gray-600"
                                    }`}
                            >
                                {loc.name}
                            </button>
                        ))}
                    </div>

                    {/* Active city card */}
                    <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
                        <div className="relative h-44 overflow-hidden">
                            <img
                                src={locations[active].image}
                                alt={locations[active].name}
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-4 left-4 flex items-center gap-2">
                                <MapPin size={18} className="fill-teal-400 text-teal-400" />
                                <span className="text-xl font-bold text-white">{locations[active].name}</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-around p-5">
                            <div className="text-center">
                                <p className="text-2xl font-bold text-blue-900">{locations[active].hospitals}</p>
                                <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                                    <Building2 size={12} className="text-blue-400" />
                                    Hospitals
                                </div>
                            </div>
                            <div className="h-10 w-px bg-gray-200" />
                            <div className="text-center">
                                <p className="text-2xl font-bold text-blue-900">{locations[active].doctors}</p>
                                <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                                    <UserRound size={12} className="text-blue-400" />
                                    Doctors
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-gray-100 p-4">
                            <button className="w-full rounded-full border border-blue-500 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white">
                                Explore {locations[active].name} →
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}