import React from 'react';

export default function HealthGPT() {

    const quickActions = [
        { icon: "🔍", text: "Find Top Doctor" },
        { icon: "🏥", text: "Find Top Hospital" },
        { icon: "💡", text: "Need Second Opinion" },
        { icon: "🏢", text: "Network Hospitals for my Insurance" },
        { icon: "💊", text: "Symptoms of Kidney Stones" },
        { icon: "🩺", text: "Treatment Options for Phimosis" },
        { icon: "📋", text: "Analyse my Insurance Policy" }
    ];

    return (
        <div className="w-full max-w-6xl mx-auto p-12">
            <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-3xl p-12 shadow-lg">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left side - Content */}
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
                            Ask HealthGPT: Your Personalised Healthcare Companion
                        </h1>

                        <div className="gap-2 grid grid-cols-2">
                            {quickActions.map((action, index) => (
                                <button
                                    key={index}
                                    className="group w-full bg-white/90 hover:bg-white rounded-full p-2 flex items-center justify-between transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-cyan-500 text-xl">{action.icon}</span>
                                        <span className="text-slate-700 font-medium text-left">
                                            {action.text}
                                        </span>
                                    </div>
                                    <div className="bg-cyan-500 rounded-full p-1.5 group-hover:scale-110 transition-transform">
                                        <svg
                                            className="w-4 h-4 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2.5}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </div>
                                </button>
                            ))}
                        </div>

                        <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-200 hover:shadow-lg hover:scale-105 mt-2">
                            Ask Now
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Right side - Robot Illustration */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-full w-80 h-80 flex items-center justify-center">
                                {/* Robot body */}
                                <div className="relative">
                                    {/* Head */}
                                    <div className="bg-white rounded-full w-32 h-32 relative shadow-lg">
                                        {/* Eyes */}
                                        <div className="absolute top-12 left-6 flex gap-6">
                                            <div className="relative">
                                                <div className="bg-slate-800 rounded-full w-6 h-4"></div>
                                                <div className="absolute top-1 left-1 bg-cyan-400 rounded-full w-1.5 h-1.5"></div>
                                                <div className="absolute top-1 right-1 bg-cyan-400 rounded-full w-1.5 h-1.5"></div>
                                            </div>
                                            <div className="relative">
                                                <div className="bg-slate-800 rounded-full w-6 h-4"></div>
                                                <div className="absolute top-1 left-1 bg-cyan-400 rounded-full w-1.5 h-1.5"></div>
                                                <div className="absolute top-1 right-1 bg-cyan-400 rounded-full w-1.5 h-1.5"></div>
                                            </div>
                                        </div>

                                        {/* Antenna */}
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-1 h-8 bg-white"></div>
                                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded-full"></div>
                                    </div>

                                    {/* Arms */}
                                    <div className="absolute -left-12 top-20 bg-white rounded-full w-8 h-24 rotate-12 shadow-md"></div>
                                    <div className="absolute -right-4 top-20 bg-white rounded-full w-8 h-24 -rotate-45 shadow-md"></div>

                                    {/* Body */}
                                    <div className="bg-white rounded-3xl w-40 h-40 mt-2 shadow-lg flex items-center justify-center">
                                        <div className="bg-cyan-500 rounded-lg w-16 h-20 flex items-center justify-center">
                                            <div className="text-white text-5xl">+</div>
                                        </div>
                                    </div>

                                    {/* Legs/Base */}
                                    <div className="flex justify-center mt-2 gap-4">
                                        <div className="bg-white rounded-full w-16 h-12 shadow-md"></div>
                                        <div className="bg-white rounded-full w-16 h-12 shadow-md"></div>
                                    </div>

                                    {/* Tablet in hand */}
                                    <div className="absolute right-8 top-32 bg-cyan-100 border-4 border-cyan-500 rounded-lg w-16 h-20 shadow-lg transform -rotate-12"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
