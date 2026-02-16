import React from "react";
import {
    MapPin,
    Search,
    ChevronDown,
    ArrowRight,
    Star
} from "lucide-react";

import hero from "../assets/hero.webp";

export default function Herobar() {
    return (
        <section className="relative w-full z-[-1] top-16">

            {/* Background Image */}
            <div className="h-dvh w-full overflow-hidden rounded-b-[60px]">
                <img
                    src={hero}
                    alt="hero"
                    className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            </div>


            {/* Content */}
            <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-6 w-full">

                    {/* Rating */}
                    <span className="flex items-center gap-2 px-3 py-1.5
                      bg-gradient-to-r
                      from-black/70
                       via-black/60
                      to-black/40
                        backdrop-blur-sm
                        text-white">

                        <Star size={18} fill="#facc15" color="#facc15" />

                        <span className="text-sm font-semibold tracking-wide">
                            4.8/5
                            <span className="font-normal text-gray-300 ml-1">
                                (4228 Reviews On Google)
                            </span>
                        </span>

                    </span>

                    {/* Heading */}
                    <h1 className="text-white font-bold md:text-5xl max-w-xl leading-tight mb-3 w-full">
                        The Next Generation Hospital
                    </h1>

                    {/* Subtext */}
                    <p className="text-gray-200 max-w-lg mb-6 flex justify-start items-start">
                        Personalized care powered by intelligence and empathy,
                        so you feel seen, heard, and supported.
                    </p>


                    {/* Search Row */}
                    <div className="flex flex-col md:flex-row gap-3 max-w-2xl">

                        {/* Location */}
                        <button className="flex items-center gap-2 bg-black/80 text-white px-5 py-3 rounded-full justify-between">
                            <span className="flex items-center gap-2">
                                <MapPin size={18} />
                                Delhi
                            </span>
                            <ChevronDown size={16} />
                        </button>

                        {/* Search */}
                        <div className="flex items-center bg-black/80 text-white rounded-full px-5 py-3 flex-1">
                            <input
                                type="text"
                                placeholder="Search for Doctor, Hospital, Specialities..."
                                className="bg-transparent outline-none w-full placeholder-gray-300"
                            />
                            <Search size={18} />
                        </div>

                    </div>


                    {/* CTA Chips */}
                    <div className="flex flex-wrap mt-6 max-w-2xl divide-x rounded-full overflow-hidden bg-blue-100">

                        {[
                            "Get Second Opinion",
                            "Ask HealthGPT",
                            "Get The App"
                        ].map((text) => (
                            <button
                                key={text}
                                className="flex items-center gap-2 px-6 py-3 text-blue-700 font-medium hover:bg-blue-200 transition"
                            >
                                {text}
                                <ArrowRight size={16} />
                            </button>
                        ))}

                    </div>

                </div>
            </div>
        </section>
    );
}
