import React, { useState } from "react";
import { MapPin, Building2, UserRound, ChevronRight } from "lucide-react";
import india from '../../assets/india.png';

const locations = [
    {
        name: "Delhi",
        hospitals: 48,
        doctors: 720,
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=150",
    },
    {
        name: "Ahmedabad",
        hospitals: 12,
        doctors: 328,
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.godigit.com%2Fcontent%2Fdam%2Fgodigit%2Fdirectportal%2Fen%2Fcontenthm%2Fvisit-to-ahmedabad.jpg&f=1&nofb=1&ipt=e72cc30011ec5714cde8d8dabd0da1aceb8c4c6da971dedc7b96589d7c419f92",
    },
    {
        name: "Bangalore",
        hospitals: 109,
        doctors: 1409,
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fgo2Kyz8EJcE%2Fmaxresdefault.jpg%3Fsqp%3D-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEUgVShlMA8%3D%26rs%3DAOn4CLAVoirdNWHD7fjoQKO3GHy2_FEYAQ&f=1&nofb=1&ipt=f6b614b3cbdfe630b8e97a5a2e49102c50350a8835f88eb562a0381cfff59f37",
    },
    {
        name: "Noida",
        hospitals: 14,
        doctors: 324,
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.vaidam.com%2Fsites%2Fdefault%2Ffiles%2Fnoida_facade-1-min.jpg&f=1&nofb=1&ipt=95deed83a1caf86bb4c426fa589e2db93eb68fb2de37bf439800b92013ebb188",
    },
    {
        name: "Gurgaon",
        hospitals: 30,
        doctors: 597,
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwearegurgaon.com%2Fwp-content%2Fuploads%2F2022%2F08%2FFortis_Memorial-Research-Institute-Gurgaon.jpg&f=1&nofb=1&ipt=61a584d80421f628b9ca29677eb13986f7f9a167b3128872bdf6dee77f76d5ea",
    },
    {
        name: "Hyderabad",
        hospitals: 45,
        doctors: 890,
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd3upjtc0wh66ez.cloudfront.net%2Fwp-content%2Fuploads%2F2024%2F12%2FSomajiguda-unit.png&f=1&nofb=1&ipt=2e7e458eb2b82c4ea2f4b884c79536e8c13ac16af21d900a86a28d19a12c2330",
    },
    {
        name: "Mumbai",
        hospitals: 67,
        doctors: 1120,
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedsurgeindia.com%2Fwp-content%2Fuploads%2F2024%2F01%2FSaifee_Hospital_Mumbai1.png&f=1&nofb=1&ipt=b466aa27e24ef2fabaa57269eb45995b72d588071727be461db91b0ef199e902",
    },
    {
        name: "Pune",
        hospitals: 38,
        doctors: 610,
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fim.proptiger.com%2F6%2F21%2F92%2Fpune-heroshot-image-659707.jpeg&f=1&nofb=1&ipt=492fcd0d2e2afc18cab4c3ef37189a5af72839fb99cc5cbad2694e228c8dfbff",
    },
];

export default function Locations() {
    const [active, setActive] = useState(0);

    return (
        <div className="relative top-0 px-4 py-4">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <h2 className="mb-2 text-2xl font-bold text-blue-900 sm:text-3xl">
                    Our Locations
                </h2>
                <p className="mb-10 text-sm text-gray-500">
                    Find top doctors and hospitals in your city
                </p>

                {/* ── DESKTOP: map left + list right ── */}
                <div className="hidden lg:grid lg:grid-cols-2 lg:items-start lg:gap-10">

                    {/* Left — India map */}
                    <div className="sticky top-24 h-96 overflow-hidden rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
                        <div className="relative flex h-full items-center justify-center">
                            <img
                                src={india}
                                alt="India Map"
                                className="h-full w-auto scale-110 drop-shadow-xl"
                                
                            />
                            {/* Animated pin */}
                            <div className="absolute left-[44%] top-[28%] animate-bounce">
                                <MapPin className="h-7 w-7 fill-teal-400 text-teal-600" />
                            </div>
                            {/* Active city label */}
                            <div className="-translate-x-1/2 absolute bottom-4 left-1/2 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg">
                                📍 {locations[active].name}
                            </div>
                        </div>
                    </div>

                    {/* Right — location list */}
                    <div className="space-y-3">
                        {locations.map((loc, i) => (
                            <div
                                key={loc.name}
                                onClick={() => setActive(i)}
                                className={`flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition-all duration-200 ${active === i
                                        ? "border-blue-400 bg-blue-50 shadow-md"
                                        : "border-gray-100 bg-white shadow-sm hover:border-blue-200 hover:shadow-md"
                                    }`}
                            >
                                <img
                                    src={loc.image}
                                    alt={loc.name}
                                    className="h-14 w-14 flex-shrink-0 rounded-full border-2 border-white object-cover shadow"
                                />
                                <div className="flex-1">
                                    <h3 className={`font-bold ${active === i ? "text-blue-700" : "text-blue-900"}`}>
                                        {loc.name}
                                    </h3>
                                    <div className="mt-1 flex flex-wrap gap-3 text-xs text-gray-500">
                                        <span className="flex items-center gap-1">
                                            <Building2 size={12} className="text-blue-400" />
                                            {loc.hospitals} Hospitals
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <UserRound size={12} className="text-blue-400" />
                                            {loc.doctors} Doctors
                                        </span>
                                    </div>
                                </div>
                                <ChevronRight size={18} className={active === i ? "text-blue-500" : "text-gray-300"} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── MOBILE: scrollable city chips + cards ── */}
                <div className="lg:hidden">

                    {/* City chips */}
                    <div
                        className="mb-6 flex gap-2 overflow-x-auto pb-2"
                        style={{ scrollbarWidth: "none" }}
                    >
                        {locations.map((loc, i) => (
                            <button
                                key={loc.name}
                                onClick={() => setActive(i)}
                                className={`flex-shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all ${active === i
                                        ? "border-blue-500 bg-blue-600 text-white"
                                        : "border-gray-300 bg-white text-gray-600"
                                    }`}
                            >
                                {loc.name}
                            </button>
                        ))}
                    </div>

                    {/* Active city card */}
                    <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
                        <div className="relative h-44 overflow-hidden">
                            <img
                                src={locations[active].image}
                                alt={locations[active].name}
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-4 left-4 flex items-center gap-2">
                                <MapPin size={18} className="fill-teal-400 text-teal-400" />
                                <span className="text-xl font-bold text-white">{locations[active].name}</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-around p-5">
                            <div className="text-center">
                                <p className="text-2xl font-bold text-blue-900">{locations[active].hospitals}</p>
                                <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                                    <Building2 size={12} className="text-blue-400" />
                                    Hospitals
                                </div>
                            </div>
                            <div className="h-10 w-px bg-gray-200" />
                            <div className="text-center">
                                <p className="text-2xl font-bold text-blue-900">{locations[active].doctors}</p>
                                <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                                    <UserRound size={12} className="text-blue-400" />
                                    Doctors
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-gray-100 p-4">
                            <button className="w-full rounded-full border border-blue-500 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white">
                                Explore {locations[active].name} →
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}