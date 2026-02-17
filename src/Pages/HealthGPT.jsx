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
        <div className="z-[-1] relative top-16 mx-auto h-full w-full max-w-6xl p-4">
            <div className="rounded-xl bg-gradient-to-br from-cyan-100 to-cyan-200 p-8 shadow-lg">
                <div className="grid items-center gap-12 md:grid-cols-2">
                    {/* Left side - Content */}
                    <div>
                        <h1 className="mb-4 text-3xl font-bold text-slate-800 md:text-4xl">
                            Ask HealthGPT: Your Personalised Healthcare Companion
                        </h1>

                        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                            {quickActions.map((action, index) => (
                                <button
                                    key={index}
                                    className="group flex w-full items-center justify-between rounded-full bg-white/90 p-2.5 transition-all duration-200 hover:scale-[1.02] hover:bg-white hover:shadow-md"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl text-cyan-500">{action.icon}</span>
                                        <span className="text-left font-medium text-slate-700">
                                            {action.text}
                                        </span>
                                    </div>
                                    <div className="rounded-full bg-cyan-500 p-1.5 transition-transform group-hover:scale-110">
                                        <svg
                                            className="h-4 w-4 text-white"
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

                        <button className="mt-2 flex items-center gap-2 rounded-full bg-cyan-600 px-8 py-4 font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-cyan-700 hover:shadow-lg">
                            Ask Now
                            <svg
                                className="h-5 w-5"
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
                        <div className="relative hidden md:visible">
                            <div className="flex h-80 w-80 items-center justify-center rounded-full bg-gradient-to-br from-blue-200 to-blue-300">
                                {/* Robot body */}
                                <div className="relative">
                                    {/* Head */}
                                    <div className="relative h-32 w-32 rounded-full bg-white shadow-lg">
                                        {/* Eyes */}
                                        <div className="absolute left-6 top-12 flex gap-6">
                                            <div className="relative">
                                                <div className="h-4 w-6 rounded-full bg-slate-800"></div>
                                                <div className="absolute left-1 top-1 h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
                                                <div className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
                                            </div>
                                            <div className="relative">
                                                <div className="h-4 w-6 rounded-full bg-slate-800"></div>
                                                <div className="absolute left-1 top-1 h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
                                                <div className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
                                            </div>
                                        </div>

                                        {/* Antenna */}
                                        <div className="-translate-x-1/2 absolute -top-8 left-1/2 h-8 w-1 bg-white"></div>
                                        <div className="-translate-x-1/2 absolute -top-12 left-1/2 h-5 w-5 rounded-full bg-white"></div>
                                    </div>

                                    {/* Arms */}
                                    <div className="absolute -left-12 top-20 h-24 w-8 rotate-12 rounded-full bg-white shadow-md"></div>
                                    <div className="-rotate-45 absolute -right-4 top-20 h-24 w-8 rounded-full bg-white shadow-md"></div>

                                    {/* Body */}
                                    <div className="mt-2 flex h-40 w-40 items-center justify-center rounded-3xl bg-white shadow-lg">
                                        <div className="flex h-20 w-16 items-center justify-center rounded-lg bg-cyan-500">
                                            <div className="text-5xl text-white">+</div>
                                        </div>
                                    </div>

                                    {/* Legs/Base */}
                                    <div className="mt-2 flex justify-center gap-4">
                                        <div className="h-12 w-16 rounded-full bg-white shadow-md"></div>
                                        <div className="h-12 w-16 rounded-full bg-white shadow-md"></div>
                                    </div>

                                    {/* Tablet in hand */}
                                    <div className="-rotate-12 absolute right-8 top-32 h-20 w-16 transform rounded-lg border-4 border-cyan-500 bg-cyan-100 shadow-lg"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
