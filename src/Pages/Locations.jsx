import React from 'react';
import { MapPin, Hospital, UserRound } from 'lucide-react';

const locations = [
    {
        name: "Ahmedabad",
        hospitals: 12,
        doctors: 328,
        image: "https://images.unsplash.com/photo-1599342564264-6729a6078174?auto=format&fit=crop&q=80&w=150"
    },
    {
        name: "Bangalore",
        hospitals: 109,
        doctors: 1409,
        image: "https://images.unsplash.com/photo-1599933333333-c60317e81881?auto=format&fit=crop&q=80&w=150"
    },
    {
        name: "Noida",
        hospitals: 14,
        doctors: 324,
        image: "https://images.unsplash.com/photo-1588615419957-ad6929972323?auto=format&fit=crop&q=80&w=150"
    },
    {
        name: "Gurgaon",
        hospitals: 30,
        doctors: 597,
        image: "https://images.unsplash.com/photo-1622353381669-026079c6563e?auto=format&fit=crop&q=80&w=150"
    },
    {
        name: "Hyderabad",
        hospitals: 45,
        doctors: 890,
        image: "https://images.unsplash.com/photo-1572445271230-a78b5944a659?auto=format&fit=crop&q=80&w=150"
    }
];
export default function Locations() {

    return (
        <>
            <div className="min-h-screen bg-[#f8fbff] p-8 md:p-16 font-sans">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start">

                    {/* Left Side: India Map Illustration */}
                    <div className="w-full lg:w-1/2 flex justify-center relative">
                        <div className="relative w-full max-w-md">
                            {/* Replace this SVG with your actual map image or an interactive SVG */}
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/e/e0/India_map_transparent.png"
                                alt="India Map"
                                className="w-full h-auto drop-shadow-xl"
                                style={{ filter: 'hue-rotate(180deg) brightness(0.7)' }} // Tinting to match your UI's blue
                            />
                            {/* Example Map Pin Overlay */}
                            <div className="absolute top-1/4 left-1/3 animate-bounce">
                                <MapPin className="text-[#86efac] fill-[#86efac] w-6 h-6" />
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Location List */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-2xl font-bold text-[#004a87] mb-6">Our Locations</h2>

                        <div className="space-y-4">
                            {locations.map((loc, index) => (
                                <div
                                    key={index}
                                    className="flex items-center bg-white rounded-2xl p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
                                >
                                    {/* Thumbnail */}
                                    <img
                                        src={loc.image}
                                        alt={loc.name}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
                                    />

                                    {/* Details */}
                                    <div className="ml-5">
                                        <h3 className="text-lg font-bold text-[#004a87]">{loc.name}</h3>
                                        <div className="flex items-center gap-4 mt-1 text-sm text-[#5a87b2]">
                                            <span className="flex items-center gap-1">
                                                <Hospital size={14} className="text-[#004a87]" />
                                                {loc.hospitals} Partnered Hospitals
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <UserRound size={14} className="text-[#004a87]" />
                                                {loc.doctors} Partnered Doctors
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Floating Action Bot Icon (Bottom Right) */}
                <div className="fixed bottom-8 right-8 bg-white p-3 rounded-full shadow-2xl border border-blue-50 cursor-pointer hover:scale-110 transition-transform">
                    <div className="bg-[#eef5ff] p-2 rounded-full">
                        <img src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png" alt="Bot" className="w-10 h-10" />
                    </div>
                </div>
            </div>
        </>
    )
}
