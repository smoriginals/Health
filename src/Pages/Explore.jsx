
import React, { useState } from "react";
import {
    Stethoscope,
    HeartPulse,
    Eye,
    Brain,
    Bone,
    Baby,
    Pill,
    Activity,
    ArrowRight
} from "lucide-react";

export default function Explore() {



    const [active, setActive] = useState("Specialities");

    const data = [
        { title: "General Surgery", icon: Stethoscope },
        { title: "Plastic Surgery", icon: Activity },
        { title: "Urology", icon: Pill },
        { title: "Cardiology", icon: HeartPulse },
        { title: "Gastrointestinal Surgery", icon: Activity },
        { title: "Oncology", icon: Activity },
        { title: "Ophthalmology", icon: Eye },
        { title: "Orthopaedics", icon: Bone },
        { title: "Neurosurgery", icon: Brain },
        { title: "Gynaecology", icon: Baby },
        { title: "Pain Management", icon: Pill },
    ];

    return (
        <>
            <section className="py-20 px-4 bg-white">

                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                                Explore Our Specialities
                            </h2>

                            <p className="text-gray-600 mt-2">
                                Find trusted experts and comprehensive care across multiple medical specialities.
                            </p>
                        </div>

                        {/* Filter Chips */}
                        <div className="flex gap-3 mt-5 md:mt-0">
                            {["Specialities", "Treatments", "Conditions"].map(item => (
                                <button
                                    key={item}
                                    onClick={() => setActive(item)}
                                    className={`
                  px-5 py-2 rounded-full border text-sm font-medium transition
                  ${active === item
                                            ? "bg-blue-100 text-blue-700 border-blue-400"
                                            : "border-gray-300 text-gray-600 hover:bg-gray-100"}
                `}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">

                        {data.map((item, i) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={i}
                                    className="border rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-lg hover:border-blue-300 transition cursor-pointer"
                                >
                                    <Icon size={34} className="text-blue-700 mb-3" />
                                    <span className="text-sm font-medium text-blue-900">
                                        {item.title}
                                    </span>
                                </div>
                            );
                        })}

                        {/* CTA Card */}
                        <div className="col-span-2 sm:col-span-3 md:col-span-2 lg:col-span-2 bg-blue-50 rounded-2xl p-6 flex flex-col justify-center">

                            <h3 className="font-semibold text-blue-900 mb-3">
                                View All Specialities By HexaHealth
                            </h3>

                            <button className="flex items-center gap-2 text-blue-700 font-medium border border-blue-300 rounded-full px-4 py-2 w-fit hover:bg-blue-100 transition">
                                View All
                                <ArrowRight size={16} />
                            </button>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}