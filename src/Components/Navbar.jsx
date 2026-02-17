import React, { useState, useRef } from "react";
import { Search, Calendar, User, HeartPulse, ChevronDown, Phone, MessageCircle, ChevronRight } from "lucide-react";
import { Menu, X } from "lucide-react";
import logoc from "../assets/logoc.svg";
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

    return (
        <>

            <nav className="fixed z-40 flex h-16 w-full items-center justify-between border-b bg-white px-4 md:px-16">

                <div className="flex w-full items-center justify-between">

                    <div className="flex items-center">

                        {/* LEFT — Logo */}
                        <div className="flex items-center px-4">

                            <div>
                                {/*<div className="text-2xl font-bold">*/}
                                {/*    <p className='flex items-center'>*/}
                                {/*        <span className='text-blue-500'>*/}
                                {/*            Hexa*/}
                                {/*        </span>*/}
                                {/*        <span className='text-black'>*/}
                                {/*            Health*/}
                                {/*        </span>*/}
                                {/*    </p>*/}
                                {/*</div>*/}
                                {/*<div className="text-xs text-gray-500">*/}
                                {/*    The Next Generation Hospital*/}
                                {/*</div>*/}
                                <img src={logoc} alt="HexaHealth" className="h-8 w-full" />
                            </div>

                        </div>


                        {/* CENTER — Menu */}
                        <ul className="hidden gap-2 font-medium text-gray-700 md:flex">

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

                    <div className=''>

                        {/* RIGHT — Actions */}
                        {/*<div className="flex w-full flex-row justify-center gap-1 bg-red-500">*/}

                        {/*    <div className='md:hidden'>*/}
                        {/*        */}{/* Search Circle */}
                        {/*        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-400 text-blue-600 transition hover:bg-blue-50">*/}
                        {/*            <Phone size={18} />*/}

                        {/*        </button> <button className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-400 text-blue-600 transition hover:bg-blue-50">*/}
                        {/*            <MessageCircle size={18} />*/}
                        {/*        </button>*/}
                        {/*    </div>*/}

                        {/*    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-400 text-blue-600 transition hover:bg-blue-50">*/}
                        {/*        <Search size={18} />*/}
                        {/*    </button>*/}
                        {/*    */}{/* Book Appointment */}
                        {/*    <button className="hidden items-center gap-2 rounded-full bg-blue-100 px-5 py-2 font-medium text-blue-700 transition hover:bg-blue-200 sm:flex">*/}
                        {/*        <Calendar size={18} />*/}
                        {/*        Book Appointment*/}
                        {/*    </button>*/}

                        {/*    */}{/* Login */}
                        {/*    <button className="hidden items-center gap-2 rounded-full bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700 sm:flex">*/}
                        {/*        <User size={18} />*/}
                        {/*        Login*/}
                        {/*    </button>*/}

                        {/*</div>*/}

                        {/* RIGHT — Desktop Actions */}
                        <div className="hidden flex-row justify-center gap-2 md:flex">

                            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-400 text-blue-600 hover:bg-blue-50">
                                <Search size={18} />
                            </button>

                            <button className="flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 font-medium text-blue-700 hover:bg-blue-200">
                                <Calendar size={18} />
                                Book Appointment
                            </button>

                            <button className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700">
                                <User size={18} />
                                Login
                            </button>

                        </div>


                        {/* MOBILE HEADER RIGHT */}
                        <div className="flex items-center gap-2 md:hidden">

                            <button className="rounded-full border p-2 text-blue-600">
                                <Phone size={18} />
                            </button>

                            <button className="rounded-full border p-2 text-blue-600">
                                <Search size={18} />
                            </button>

                            <button className="rounded-full border p-2 text-blue-600">
                                <MessageCircle size={18} />
                            </button>

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
            <div
                className={` 
    fixed top-0 right-0 h-full w-72 bg-white shadow-2xl
    transform transition-transform duration-300 z-50
    ${mobileOpen ? "translate-x-0" : "translate-x-full"}
  `}
            >
                <div className="flex flex-col gap-4 p-6">

                    <button
                        onClick={() => setMobileOpen(false)}
                        className="self-end"
                    >
                        <X />
                    </button>

                    {/* NAV LINKS */}
                    <div className="flex flex-col gap-4 text-lg font-medium">

                        <div>
                            <div className="mb-2 font-semibold">Departments</div>
                            {departments.map(d => (
                                <div key={d} className="py-1 text-gray-600">
                                    {d}
                                </div>
                            ))}
                        </div>

                        <div>
                            <div className="mb-2 font-semibold">Conditions</div>
                            {Object.keys(conditionMenu).map(k => (
                                <div key={k} className="py-1 text-gray-600">
                                    {k}
                                </div>
                            ))}
                        </div>

                        <div>
                            <div className="mb-2 font-semibold">Treatments</div>
                            {Object.keys(treatmentMenu).map(k => (
                                <div key={k} className="py-1 text-gray-600">
                                    {k}
                                </div>
                            ))}
                        </div>

                        <a href="/" className="font-semibold text-blue-600">
                            For Investors
                        </a>

                    </div>
                </div>
            </div>
        </>
    );
}
