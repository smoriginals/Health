import React, { useState } from 'react';

export default function Specialties() {
    const [activeTab, setActiveTab] = useState('Specialities');

    const stats = [
        {
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
            number: "1.2 Lakh+",
            label: "Happy Patients"
        },
        {
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            number: "500+",
            label: "JCI & NABH Hospitals"
        },
        {
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            number: "5000+",
            label: "Expert Doctors"
        },
        {
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
            ),
            number: "50,000+",
            label: "Treatments Done"
        }
    ];

    const specialties = [
        {
            icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                </svg>
            ),
            name: "General Surgery"
        },
        {
            icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="8" r="3" strokeWidth={1.5} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11v10m-4-6h8" />
                </svg>
            ),
            name: "Plastic Surgery"
        },
        {
            icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="9" cy="7" r="2" strokeWidth={1.5} />
                    <circle cx="15" cy="7" r="2" strokeWidth={1.5} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 9v8m6-8v8M12 13v4" />
                </svg>
            ),
            name: "Urology"
        },
        {
            icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            name: "Cardiology"
        },
        {
            icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            name: "Gastrointestinal Surgery"
        },
        {
            icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            name: "Oncology"
        },
        {
            icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            ),
            name: "Ophthalmology"
        },
        {
            icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
            ),
            name: "Orthopaedics"
        },
        {
            icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            name: "Neurosurgery"
        },
        {
            icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                </svg>
            ),
            name: "Gynaecology"
        },
        {
            icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            name: "Pain Management"
        }
    ];

    return (
        <div className="w-full bg-gradient-to-b from-white to-gray-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Statistics Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="text-teal-600 flex-shrink-0">
                                {stat.icon}
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-gray-900 mb-1">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 text-sm font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Specialties Section */}
                <div>
                    <div className="mb-8">
                        <h2 className="text-4xl font-bold text-gray-900 mb-3">
                            Explore Our Specialities
                        </h2>
                        <p className="text-gray-600 text-lg mb-6">
                            Find trusted experts and comprehensive care across multiple medical specialities.
                        </p>

                        {/* Tab Buttons */}
                        <div className="flex gap-3">
                            {['Specialities', 'Treatments', 'Conditions'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 ${activeTab === tab
                                            ? 'bg-teal-600 text-white shadow-md'
                                            : 'bg-white text-gray-700 border border-gray-300 hover:border-teal-400'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Specialties Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
                        {specialties.map((specialty, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer border border-gray-100 group"
                            >
                                <div className="text-teal-600 mb-3 group-hover:scale-110 transition-transform duration-200">
                                    {specialty.icon}
                                </div>
                                <div className="text-gray-800 font-medium text-sm leading-tight">
                                    {specialty.name}
                                </div>
                            </div>
                        ))}

                        {/* View All Card */}
                        <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-200">
                            <div className="absolute top-2 right-2 text-4xl opacity-20">
                                🏥
                            </div>
                            <div className="text-teal-700 font-semibold text-sm mb-2">
                                View All
                            </div>
                            <div className="text-teal-800 font-bold text-xs mb-3">
                                Specialities By HexaHealth
                            </div>
                            <button className="bg-white text-teal-600 px-4 py-1.5 rounded-full text-xs font-medium flex items-center gap-1 hover:bg-teal-50 transition-colors group-hover:scale-105">
                                View All
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
