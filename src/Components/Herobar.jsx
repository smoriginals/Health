import React from "react";
import {
    MapPin,
    Search,
    ChevronDown,
    ArrowRight,
    Star,
} from "lucide-react";

import hero from "../assets/hero.webp";
import moblogo from "../assets/moblogo.webp";
export default function Herobar() {


    return (
        <>
            <div className="z-[-1] relative top-16 w-dvw bg-blue-100">

                {/* Background Image Container */}
                <div className="relative h-full w-full overflow-hidden rounded-b-[40px] sm:rounded-b-[60px] md:rounded-b-[100px]">

                    {/* Desktop & Tablet Background */}
                    <img
                        src={hero}
                        alt="hero"
                        className="hidden h-full w-full object-cover sm:block"
                    />

                    {/* Mobile Background */}
                    <img
                        src={moblogo}
                        alt="hero"
                        className="block h-full w-full object-cover object-top sm:hidden"
                    />

                    {/* Gradient Overlay — stronger on mobile for readability */}
                    <div className="absolute inset-0 rounded-b-[40px] bg-gradient-to-r from-black/80 via-black/60 to-black/20 sm:rounded-b-[60px] sm:from-black/70 sm:via-black/40 sm:to-transparent md:rounded-b-[100px]" />

                    {/* Content — positioned inside the image container so it stays within bounds */}
                    <div className="absolute inset-0 flex items-center">
                        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                            {/* Rating Badge */}
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur-sm">
                                <Star size={16} fill="#facc15" color="#facc15" />
                                <span className="text-xs font-semibold tracking-wide text-white sm:text-sm">
                                    4.8/5
                                    <span className="ml-1 font-normal text-gray-300">
                                        (4,228 Reviews On Google)
                                    </span>
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="mb-3 w-full max-w-xs text-3xl font-bold leading-tight text-white sm:max-w-md sm:text-4xl md:max-w-xl md:text-5xl">
                                The Next Generation Hospital
                            </h1>

                            {/* Subtext */}
                            <p className="mb-6 max-w-xs text-sm text-gray-200 sm:max-w-sm sm:text-base md:max-w-lg">
                                Personalized care powered by intelligence and empathy, so you
                                feel seen, heard, and supported.
                            </p>

                            {/* Search Row */}
                            <div className="flex w-full max-w-2xl flex-col gap-3 sm:flex-row">

                                {/* Location Dropdown */}
                                <button className="flex w-full items-center justify-between gap-2 rounded-full bg-black/75 px-5 py-3 text-white backdrop-blur-sm transition hover:bg-black/90 sm:w-auto sm:justify-start">
                                    <span className="flex items-center gap-2 text-sm font-medium">
                                        <MapPin size={16} className="text-blue-400" />
                                        Delhi
                                    </span>
                                    <ChevronDown size={15} className="text-gray-400" />
                                </button>

                                {/* Search Input */}
                                <div className="flex flex-1 items-center gap-2 rounded-full bg-black/75 px-5 py-3 backdrop-blur-sm transition focus-within:ring-2 focus-within:ring-blue-400">
                                    <input
                                        type="text"
                                        placeholder="Search Doctor, Hospital, Speciality..."
                                        className="w-full bg-transparent text-sm text-white placeholder-gray-400 outline-none"
                                    />
                                    <Search size={17} className="flex-shrink-0 text-gray-400" />
                                </div>

                            </div>

                            {/* CTA Chips */}
                            <div className="mt-5 flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-blue-100 sm:flex-row sm:divide-x sm:divide-blue-200 sm:rounded-full">
                                {["Get Second Opinion", "Ask HealthGPT", "Get The App"].map(
                                    (text) => (
                                        <button
                                            key={text}
                                            className="flex items-center justify-between gap-2 px-5 py-3 text-sm font-medium text-blue-700 transition hover:bg-blue-200 sm:justify-center sm:px-6"
                                        >
                                            {text}
                                            <ArrowRight size={15} />
                                        </button>
                                    )
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
