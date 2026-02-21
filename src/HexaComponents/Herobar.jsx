import React from "react";
import {
    MapPin,
    Search,
    ChevronDown,
    Star,
} from "lucide-react";
import hero from "../assets/hero.webp";
import moblogo from "../assets/moblogo.webp";
import CitySearch from "./CitySearch";
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import SecondOption from "./SecondOption";
import AskGpt from '../HexaComponents/AskGpt';


export default function Herobar() {


    const scrollToReviews = () => {

        document.getElementById("reviews")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const OpenStore = (e) => {
        e.preventDefault();
        window.open("https://play.google.com/store/apps/details?id=com.curely.app", "_blank");

    }

    return (
        <>
            <div className="relative top-16 w-dvw bg-blue-100">

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
                    <div className="absolute inset-0 rounded-b-[40px] bg-gradient-to-r from-black/80 via-black/60 to-black/20 opacity-60 sm:rounded-b-[60px] sm:from-black/70 sm:via-black/40 sm:to-transparent md:rounded-b-[100px]"/>

                    {/* Content — positioned inside the image container so it stays within bounds */}
                    <div className="absolute inset-0 flex items-center">
                        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                            {/* Rating Badge */}
                            <button className="mb-4 inline-flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur-sm" onClick={scrollToReviews}>
                                <Star size={16} fill="#facc15" color="#facc15" />
                                <span className="text-xs font-semibold tracking-wide text-white sm:text-sm">
                                    4.8/5
                                    <span className="ml-1 font-normal text-gray-300">
                                        (4,228 Reviews On Google)
                                    </span>
                                </span>
                            </button>

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


                                <CitySearch />

                            </div>

                            {/* CTA Chips */}
                            <div className="my-2 hidden rounded-full py-2 md:flex">

                                {/* Wrap freely */}
                                <SecondOption>
                                    <Button className='h-12 rounded-l-full bg-blue-100 text-blue-500 hover:bg-blue-200 hover:text-blue-700'>
                                        Get Second Opinion
                                        <ArrowRight size={15} />
                                    </Button>
                                </SecondOption>

                                <AskGpt>
                                    <Button className='h-12 rounded-none bg-blue-100 text-blue-500 hover:bg-blue-200 hover:text-blue-700'>
                                        Ask HealthGPT
                                        <ArrowRight size={15} />
                                    </Button>
                                </AskGpt>

                                <Button className='h-12 rounded-r-full bg-blue-100 text-blue-500 hover:bg-blue-200 hover:text-blue-700' onClick={OpenStore}>
                                    Get The App
                                    <ArrowRight size={15} />
                                </Button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
