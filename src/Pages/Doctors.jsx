import React, { useState } from "react";
import { Star, Calendar } from "lucide-react";

export default function Doctors() {

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
            rating: "4.51/5",
            reviews: 91,
            logo: "https://via.placeholder.com/100"
        },
        {
            name: "MASSH Hospital, Nehru Place",
            location: "Nehru Place, Delhi",
            rating: "4.5/5",
            reviews: 98,
            logo: "https://via.placeholder.com/100"
        },
        {
            name: "ASG Eye Hospital (Narang Eye Institute)",
            location: "Model Town, Delhi",
            rating: "5/5",
            reviews: 98,
            logo: "https://via.placeholder.com/100"
        }
    ];

    return (
        <section className="bg-slate-100 py-16 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-6">
                    Top JCI & NABH Accredited Hospitals
                </h2>

                {/* City Chips */}
                <div className="flex flex-wrap gap-3 mb-10">
                    {cities.map(city => (
                        <button
                            key={city}
                            onClick={() => setActiveCity(city)}
                            className={`px-4 py-2 rounded-full border text-sm font-medium transition
                ${activeCity === city
                                    ? "bg-blue-100 text-blue-700 border-blue-400"
                                    : "bg-white border-gray-300 text-gray-600 hover:bg-gray-100"
                                }`}
                        >
                            {city}
                        </button>
                    ))}
                </div>

                {/* Cards Layout */}
                <div className="grid lg:grid-cols-4 gap-6">

                    {/* Hospital Cards */}
                    {hospitals.map((h, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl border p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition"
                        >
                            <img
                                src={h.logo}
                                alt=""
                                className="w-24 h-16 object-contain mb-5"
                            />

                            <div>
                                <h3 className="font-semibold text-blue-900 mb-1">
                                    {h.name}
                                </h3>

                                <p className="text-gray-600 text-sm mb-2">
                                    {h.location}
                                </p>

                                {/* Rating */}
                                <div className="flex items-center gap-2 text-sm mb-5">
                                    <Star size={16} className="text-orange-500 fill-orange-500" />
                                    <span className="text-blue-900 font-medium">
                                        {h.rating}
                                    </span>
                                    <span className="text-gray-500">
                                        ({h.reviews} Ratings)
                                    </span>
                                </div>
                            </div>

                            {/* Button */}
                            <button className="mt-auto flex items-center justify-center gap-2 border border-blue-500 text-blue-700 rounded-full py-3 hover:bg-blue-50 transition">
                                <Calendar size={16} />
                                Book Appointment
                            </button>
                        </div>
                    ))}

                    {/* Side Panel */}
                    <div className="bg-blue-100 rounded-2xl p-6 flex flex-col justify-between">
                        <div>
                            <h3 className="font-semibold text-blue-900 mb-4">
                                Find All Hospitals
                            </h3>

                            <button className="border border-blue-500 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-200 transition">
                                View All →
                            </button>
                        </div>

                        {/* Illustration placeholder */}
                        <div className="mt-6 h-40 bg-blue-200 rounded-xl flex items-center justify-center text-blue-700 text-sm">
                            Illustration
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
