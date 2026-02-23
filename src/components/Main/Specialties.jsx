
import React, { useState } from "react";
import {
    Smile,
    Hospital,
    Users,
    CheckCircle,
    Stethoscope,
    Sparkles,
    Droplet,
    HeartPulse,
    Activity,
    ShieldPlus,
    Eye,
    Bone,
    Brain,
    Baby,
    Pill,
    ArrowRight,
} from "lucide-react";

export default function Specialties() {
    const [activeTab, setActiveTab] = useState("Specialities");

    const stats = [
        { icon: Smile, number: "1.2 Lakh+", label: "Happy Patients" },
        { icon: Hospital, number: "500+", label: "JCI & NABH Hospitals" },
        { icon: Users, number: "5000+", label: "Expert Doctors" },
        { icon: CheckCircle, number: "50,000+", label: "Treatments Done" },
    ];

    const specialties = [
        { icon: Stethoscope, name: "General Surgery" },
        { icon: Sparkles, name: "Plastic Surgery" },
        { icon: Droplet, name: "Urology" },
        { icon: HeartPulse, name: "Cardiology" },
        { icon: Activity, name: "Gastrointestinal Surgery" },
        { icon: ShieldPlus, name: "Oncology" },
        { icon: Eye, name: "Ophthalmology" },
        { icon: Bone, name: "Orthopaedics" },
        { icon: Brain, name: "Neurosurgery" },
        { icon: Baby, name: "Gynaecology" },
        { icon: Pill, name: "Pain Management" },
    ];

    return (


        <div className="relative top-16 w-full bg-gradient-to-b from-white to-gray-50 px-2 py-10">
            <div className="mx-auto max-w-7xl p-2">

                {/* Stats Section */}
                <div className="mb-20 grid grid-cols-2 gap-8 p-2 md:grid-cols-2 lg:grid-cols-4">

                    
                    {stats.map(({ icon: Icon, number, label }) => (
                        <div key={label} className="flex items-start gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                                <Icon size={26} />
                            </div>

                            <div>
                                <div className="mb-1 text-3xl font-bold text-gray-900">
                                    {number}
                                </div>
                                <div className="text-sm font-medium text-gray-600">
                                    {label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Specialties Section */}
                <div>
                    <div className="mb-8">
                        <h2 className="mb-3 text-4xl font-bold text-gray-900">
                            Explore Our Specialities
                        </h2>

                        <p className="mb-6 text-lg text-gray-600">
                            Find trusted experts and comprehensive care across multiple medical specialities.
                        </p>

                        {/* Tabs */}
                        <div className="flex items-center justify-between gap-3 md:justify-start">
                            {["Specialities", "Treatments", "Conditions"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`rounded-full px-6 py-2.5 font-medium transition ${activeTab === tab
                                            ? "bg-teal-600 text-white shadow-md"
                                            : "border border-gray-300 bg-white text-gray-700 hover:border-teal-400"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="relative grid grid-cols-2 gap-2 p-1 md:grid-cols-3 lg:grid-cols-6">
                        {specialties.map(({ icon: Icon, name }) => (
                            <div
                                key={name}
                                className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-gray-300 bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="mb-3 text-teal-600 transition group-hover:scale-110">
                                    <Icon size={28} />
                                </div>

                                <div className="text-sm font-medium leading-tight text-gray-800">
                                    {name}
                                </div>
                            </div>
                        ))}

                        {/* View All Card */}
                        <div className="group relative flex cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 p-6 text-center transition hover:shadow-lg">
                            <div className="absolute right-2 top-2 opacity-20">
                                <Hospital size={40} />
                            </div>

                            <div className="mb-2 text-sm font-semibold text-teal-700">
                                View All
                            </div>

                            <div className="mb-3 text-xs font-bold text-teal-800">
                                Specialities By HexaHealth
                            </div>

                            <button className="flex items-center gap-1 rounded-full bg-white px-4 py-1.5 text-xs font-medium text-teal-600 transition hover:bg-teal-50 group-hover:scale-105">
                                View All
                                <ArrowRight size={14} />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}