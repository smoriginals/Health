import React, { useState, useRef } from "react";
import { Search, Calendar, User, CircleUserRound, ChevronDown, MessageCircleMore, ChevronRight, MapPin } from "lucide-react";

import { Menu, X } from "lucide-react";
import logoc from "../assets/logoc.svg";
import Sidebar from "../components/Sidebar";
import LoginDrawer from "../components/LoginDrawer";
import LocationDrawer from "./LocationDrawer";
import { Button } from "@/components/ui/button";
import Booking from "../components/Booking";
import CitySearch from "./CitySearch";
import BookingAppointments from "./BookingAppointments";

export default function Navbar() {

    const [open, setOpen] = useState(false);
    const timeoutRef = useRef(null);

    const openMenu = () => {
        clearTimeout(timeoutRef.current);
        setOpen(true);
    };

    const closeMenu = () => {
        timeoutRef.current = setTimeout(() => {
            setOpen(false);
        }, 250); // ← delay in ms (adjust freely)
    };

    const departments = [
        "Cardiology", "ENT", "Neurosurgery", "Urology", "Gynaecology",
        "Orthopaedic", "Ophthalmology", "Plastic Surgery",
        "Gastroenterology", "Nephrology",
        "Surgical Oncology", "General Surgery"
    ];



    const conditionMenu = {
        Proctology: [
            "Piles",
            "Anal Fissure",
            "Anal Fistula",
            "Perianal Abscess"
        ],
        Cardiology: [
            "Heart Blockage",
            "Arrhythmia",
            "Chest Pain"
        ],
        Orthopedics: [
            "Knee Pain",
            "ACL Tear",
            "Fracture"
        ],
        Urology: [
            "Kidney Stone",
            "UTI",
            "Prostate Issue"
        ]
    };

    const [condOpen, setCondOpen] = useState(false);
    const [activeCond, setActiveCond] = useState(null);

    const condTimeout = useRef(null);

    const openCond = () => {
        clearTimeout(condTimeout.current);
        setCondOpen(true);
    };

    const closeCond = () => {
        condTimeout.current = setTimeout(() => {
            setCondOpen(false);
            setActiveCond(null);
        }, 200);
    };

    const treatmentMenu = {
        Proctology: [
            "Laser Piles Surgery",
            "Fissure Surgery",
            "Fistula Treatment"
        ],
        Cardiology: [
            "Angioplasty",
            "Bypass Surgery",
            "Pacemaker Implant"
        ],
        Orthopedics: [
            "Knee Replacement",
            "Hip Replacement",
            "ACL Reconstruction"
        ],
        Urology: [
            "Kidney Stone Removal",
            "Prostate Surgery",
            "Ureteroscopy"
        ]
    };

    const [treatOpen, setTreatOpen] = useState(false);
    const [activeTreat, setActiveTreat] = useState(null);

    const treatTimeout = useRef(null);

    const openTreat = () => {
        clearTimeout(treatTimeout.current);
        setTreatOpen(true);
    };

    const closeTreat = () => {
        treatTimeout.current = setTimeout(() => {
            setTreatOpen(false);
            setActiveTreat(null);
        }, 200);
    };

    //Mobile Menu State
    const [mobileOpen, setMobileOpen] = useState(false);




    const WhatsappSupport = (e) => {
        e.preventDefault()

        window.open(
            "https://api.whatsapp.com/send/?phone=918860688606&text=Hi%2C+I+want+to+book+an+appointment+with+a+Cardiology+doctor+departmentid%3D33&type=phone_number&app_absent=0",
            "_blank"
        );
        console.log("clicked")
    }


    return (
        <>

            <nav className="fixed z-40 flex h-16 w-full items-center justify-between border-b bg-white px-1 md:px-6">

                <div className="flex w-full items-center justify-between">

                    <div className="flex shrink-0 items-center gap-1">

                        {/* LEFT — Logo */}
                        <div className="flex items-center px-2 py-1">

                            <div>
                                <img src={logoc} alt="HexaHealth" className="h-8 w-full" />
                            </div>

                        </div>


                        {/* CENTER — Menu */}
                        <ul className="hidden gap-2 p-2 font-medium text-gray-700 md:flex md:items-center md:justify-evenly">

                            <li
                                className="relative"
                                onMouseEnter={openMenu}
                                onMouseLeave={closeMenu}
                            >
                                <button className="flex items-center hover:text-blue-600">
                                    Departments <ChevronDown size={16} />
                                </button>

                                {open && (
                                    <ul className="absolute left-0 top-full mt-5 flex max-h-[500px] w-56 flex-col overflow-y-auto rounded-lg border bg-white shadow-xl">

                                        {departments.map(d => (
                                            <li
                                                key={d}
                                                className="flex cursor-pointer px-4 py-3 text-gray-600 hover:bg-blue-50"
                                            >
                                                {d}
                                            </li>
                                        ))}

                                    </ul>
                                )}
                            </li>


                            <li
                                className="relative"
                                onMouseEnter={openCond}
                                onMouseLeave={closeCond}
                            >
                                <button className="flex items-center hover:text-blue-600">
                                    Conditions <ChevronDown size={16} />
                                </button>

                                {condOpen && (
                                    <ul className="absolute left-0 top-full mt-4 w-60 rounded-lg border bg-white shadow-lg">

                                        {Object.entries(conditionMenu).map(([category, items]) => (
                                            <li
                                                key={category}
                                                className="relative"
                                                onMouseEnter={() => setActiveCond(category)}
                                            >
                                                {/* Level 1 */}
                                                <div className="flex cursor-pointer justify-between px-4 py-3 text-sm hover:bg-blue-50">
                                                    {category}
                                                    <ChevronRight size={16} />
                                                </div>

                                                {/* Level 2 */}
                                                {activeCond === category && (
                                                    <ul className="absolute left-full top-0 w-60 rounded-lg border bg-white shadow-lg">

                                                        {items.map((item) => (
                                                            <li
                                                                key={item}
                                                                className="cursor-pointer px-4 py-3 text-sm hover:bg-blue-50"
                                                            >
                                                                {item}
                                                            </li>
                                                        ))}

                                                    </ul>
                                                )}

                                            </li>
                                        ))}

                                    </ul>
                                )}
                            </li>

                            <li
                                className="relative"
                                onMouseEnter={openTreat}
                                onMouseLeave={closeTreat}
                            >
                                <button className="flex items-center gap-1 hover:text-blue-600">
                                    Treatments <ChevronDown size={16} />
                                </button>

                                {treatOpen && (
                                    <ul className="absolute left-0 top-full mt-4 w-60 rounded-lg border bg-white shadow-lg">

                                        {Object.entries(treatmentMenu).map(([category, items]) => (
                                            <li
                                                key={category}
                                                className="relative"
                                                onMouseEnter={() => setActiveTreat(category)}
                                            >
                                                {/* Level 1 */}
                                                <div className="flex cursor-pointer justify-between px-4 py-3 text-sm hover:bg-blue-50">
                                                    {category}
                                                    <ChevronRight size={16} />
                                                </div>

                                                {/* Level 2 */}
                                                {activeTreat === category && (
                                                    <ul className="absolute left-full top-0 w-60 rounded-lg border bg-white shadow-lg">

                                                        {items.map((item) => (
                                                            <li
                                                                key={item}
                                                                className="cursor-pointer px-4 py-3 text-sm hover:bg-blue-50"
                                                            >
                                                                {item}
                                                            </li>
                                                        ))}

                                                    </ul>
                                                )}

                                            </li>
                                        ))}

                                    </ul>
                                )}
                            </li>

                            <li>
                                <a href='/' target='blank' className='decoration-none text-md font-semibold text-gray-600 hover:text-blue-600'>For Investors</a>
                            </li>

                        </ul>
                    </div>

                    <div className='mx-2 p-1'>

                        {/* RIGHT — Desktop Actions */}
                        <div className="hidden flex-row items-center justify-center gap-2 px-2 md:flex">

                            <Sidebar>
                                <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-400 text-blue-600 transition-all duration-150 hover:bg-blue-500 hover:text-white active:scale-95 active:bg-blue-600 active:text-white">

                                    <Search size={16} />
                                </button>
                            </Sidebar>

                            <BookingAppointments>
                                <button className="flex shrink-0 items-center gap-2 rounded-full bg-blue-100 px-5 py-2 font-medium text-blue-700 hover:bg-blue-200">
                                    <Calendar size={16} />
                                    Book Appointment
                                </button>
                            </BookingAppointments>

                            <LoginDrawer>
                                <button className="shrink-1 flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700">
                                    <User size={16} />
                                    Login
                                </button>
                            </LoginDrawer>

                        </div>


                        {/* MOBILE HEADER RIGHT */}
                        <div className="flex items-center gap-2 md:hidden">

                            <button className="flex h-9 w-9 items-center justify-center rounded-full border p-2 text-blue-600" onClick={WhatsappSupport}>
                                <MessageCircleMore size={20} />
                            </button>

                            <Sidebar />

                            <LoginDrawer />

                            {/* Hamburger */}
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="p-2 border rounded-full text-blue-600"
                            >
                                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>

                        </div>

                    </div>
                </div>


            </nav>

            {/* Mobile Slide Menu */}

            <div className={`fixed inset-x-0 top-16 bottom-0 w-full bg-white shadow-2xl transform transition-transform duration-300 z-50 overflow-y-scroll overscroll-contain touch-pan-y ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>

                <div className="flex min-h-full flex-col gap-4 p-6">

                    {/* NAV LINKS */}
                    <div className="flex flex-col gap-4 pb-32 text-lg font-medium">

                        <LoginDrawer>
                            <button className='flex h-20 w-full items-center justify-center gap-1 rounded-md border bg-[#0F80A5] text-2xl font-bold text-white'>
                                <CircleUserRound size={30} />
                                <p>Login</p>
                            </button>
                        </LoginDrawer>


                        <div className='h-24 w-full'>
                            <CitySearch />
                        </div>

                        {/* Departments Accordion */}
                        <details className="group border-b pb-2 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between py-2 font-semibold">
                                Departments
                                <ChevronDown className="transition-transform duration-300 group-open:rotate-180" />
                            </summary>

                            <div className="mt-2 space-y-1 pl-3">
                                {departments.map(d => (
                                    <div key={d} className="py-1 text-gray-600 hover:text-blue-600">
                                        {d}
                                    </div>
                                ))}
                            </div>
                        </details>


                        {/* Conditions Accordion */}
                        <details className="group border-b pb-2 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between py-2 font-semibold">
                                Conditions
                                <ChevronDown className="transition-transform duration-300 group-open:rotate-180" />
                            </summary>

                            <div className="mt-2 space-y-1 pl-3">

                                {Object.entries(conditionMenu).map(([k, items]) => (
                                    <details key={k} className="group/nested [&_summary::-webkit-details-marker]:hidden">

                                        <summary className="flex cursor-pointer items-center justify-between px-2 py-1 text-gray-600 hover:text-blue-600">
                                            {k}
                                            <ChevronDown
                                                size={18}
                                                className="transition-transform duration-300 group-open/nested:rotate-180"
                                            />
                                        </summary>

                                        <div className="ml-4 mt-1 space-y-1 border-l pl-3">
                                            {items.map(item => (
                                                <div key={item} className="py-1 text-gray-500 hover:text-blue-600">
                                                    {item}
                                                </div>
                                            ))}
                                        </div>

                                    </details>
                                ))}

                            </div>
                        </details>


                        {/* Treatments Accordion */}
                        <details className="group border-b pb-2 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between py-2 font-semibold">
                                Treatments
                                <ChevronDown className="transition-transform duration-300 group-open:rotate-180" />
                            </summary>

                            <div className="mt-2 space-y-1 pl-3">

                                {Object.entries(treatmentMenu).map(([k, items]) => (
                                    <details key={k} className="group/nested [&_summary::-webkit-details-marker]:hidden">

                                        <summary className="flex cursor-pointer items-center justify-between px-2 py-1 text-gray-600 hover:text-blue-600">
                                            {k}
                                            <ChevronDown
                                                size={18}
                                                className="transition-transform duration-300 group-open/nested:rotate-180"
                                            />
                                        </summary>

                                        <div className="ml-4 mt-1 space-y-1 border-l pl-3">
                                            {items.map(item => (
                                                <div key={item} className="py-1 text-gray-500 hover:text-blue-600">
                                                    {item}
                                                </div>
                                            ))}
                                        </div>

                                    </details>
                                ))}

                            </div>
                        </details>


                        <a href="/" className="font-semibold text-blue-600">
                            For Investors
                        </a>

                    </div>

                </div>
            </div>
        </>
    );
}
