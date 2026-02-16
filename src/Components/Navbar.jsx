import React, { useState, useRef } from "react";
import { Search, Calendar, User, HeartPulse, ChevronDown, Phone, MessageCircle, ChevronRight } from "lucide-react";

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



    return (
        <>

            <nav className="bg-gray-50 border-b w-full fixed">

                <div className="w-full flex justify-between items-center px-4">

                    <div className="flex items-center justify-evenly h-16">

                        {/* LEFT — Logo */}
                        <div className="flex items-center gap-3 px-4">

                            <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex justify-center items-center">
                                <HeartPulse size={26} />
                            </div>

                            <div>
                                <div className="text-2xl font-bold">
                                    <p className='flex items-center'>
                                        <p className='text-blue-500'>
                                            Hexa
                                        </p>
                                        <p className='text-black'>
                                            Health
                                        </p>
                                    </p>
                                </div>
                                <div className="text-xs text-gray-500">
                                    The Next Generation Hospital
                                </div>
                            </div>

                        </div>


                        {/* CENTER — Menu */}
                        <ul className="hidden md:flex gap-2 font-medium text-gray-700">

                            <li
                                className="relative"
                                onMouseEnter={openMenu}
                                onMouseLeave={closeMenu}
                            >
                                <button className="flex items-center hover:text-blue-600">
                                    Departments <ChevronDown size={16} />
                                </button>

                                {open && (
                                    <ul className="absolute left-0 top-full mt-5 flex flex-col bg-white shadow-xl rounded-lg max-h-[500px] w-56 overflow-y-auto border">

                                        {departments.map(d => (
                                            <li
                                                key={d}
                                                className="px-4 py-3 hover:bg-blue-50 text-gray-600 cursor-pointer flex"
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
                                    <ul className="absolute left-0 top-full mt-4 w-60 bg-white shadow-lg rounded-lg border">

                                        {Object.entries(conditionMenu).map(([category, items]) => (
                                            <li
                                                key={category}
                                                className="relative"
                                                onMouseEnter={() => setActiveCond(category)}
                                            >
                                                {/* Level 1 */}
                                                <div className="flex justify-between px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm">
                                                    {category}
                                                    <ChevronRight size={16} />
                                                </div>

                                                {/* Level 2 */}
                                                {activeCond === category && (
                                                    <ul className="absolute left-full top-0 w-60 bg-white shadow-lg rounded-lg border">

                                                        {items.map((item) => (
                                                            <li
                                                                key={item}
                                                                className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm"
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
                                    <ul className="absolute left-0 top-full mt-4 w-60 bg-white shadow-lg rounded-lg border">

                                        {Object.entries(treatmentMenu).map(([category, items]) => (
                                            <li
                                                key={category}
                                                className="relative"
                                                onMouseEnter={() => setActiveTreat(category)}
                                            >
                                                {/* Level 1 */}
                                                <div className="flex justify-between px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm">
                                                    {category}
                                                    <ChevronRight size={16} />
                                                </div>

                                                {/* Level 2 */}
                                                {activeTreat === category && (
                                                    <ul className="absolute left-full top-0 w-60 bg-white shadow-lg rounded-lg border">

                                                        {items.map((item) => (
                                                            <li
                                                                key={item}
                                                                className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm"
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
                                <a href='/' target='blank' className='decoration-none font-semibold text-md text-gray-600 hover:text-blue-600'>For Investors</a>
                            </li>

                        </ul>
                    </div>

                    <div>

                        {/* RIGHT — Actions */}
                        <div className="flex items-center gap-1">

                            <div className='md:hidden'>
                                {/* Search Circle */}
                                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-blue-400 text-blue-600 hover:bg-blue-50 transition">
                                    <Search size={18} />
                                </button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-blue-400 text-blue-600 hover:bg-blue-50 transition">
                                    <Phone size={18} />

                                </button> <button className="w-10 h-10 flex items-center justify-center rounded-full border border-blue-400 text-blue-600 hover:bg-blue-50 transition">
                                    <MessageCircle size={18} />
                                </button>
                            </div>

                            {/* Book Appointment */}
                            <button className="hidden sm:flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-medium hover:bg-blue-200 transition">
                                <Calendar size={18} />
                                Book Appointment
                            </button>

                            {/* Login */}
                            <button className="hidden sm:flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition">
                                <User size={18} />
                                Login
                            </button>

                        </div>

                    </div>
                </div>


            </nav>
        </>
    );
}
