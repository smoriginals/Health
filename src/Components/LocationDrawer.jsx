import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { MapPin, Search } from "lucide-react";
import { useState } from "react";

export default function LocationDrawer({ children }) {

    const [query, setQuery] = useState("");

    // Top cities grid
    const topCities = [
        "Delhi",
        "Mumbai",
        "Bangalore",
        "Chandigarh",
        "Jaipur",
        "Lucknow",
    ];

    // Scrollable list
    const otherCities = [
        "Pune",
        "Ahmedabad",
        "Surat",
        "Indore",
        "Patna",
        "Bhopal",
        "Kanpur",
        "Nagpur",
        "Ludhiana",
        "Amritsar",
        "Varanasi",
        "Ranchi",
    ];

    const handleSearch = () => {
        console.log("Searching:", query);
    };

    const handleNearMe = () => {
        navigator.geolocation.getCurrentPosition((pos) => {
            console.log(pos.coords);
        });
    };

    return (
        <Drawer>

            {/* Trigger */}
            <DrawerTrigger asChild>
                {children}
            </DrawerTrigger>

            {/* Drawer Body */}
            <DrawerContent className="max-h-[90vh]">

                <div className="mx-auto w-full max-w-2xl">

                    {/* Header */}
                    <DrawerHeader>
                        <DrawerTitle className="text-xl font-bold">
                            Select Location
                        </DrawerTitle>
                    </DrawerHeader>

                    {/* Search */}
                    <div className="flex gap-2 px-4">
                        <Input
                            placeholder="Search city"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />

                        <Button size="icon" onClick={handleSearch}>
                            <Search size={18} />
                        </Button>
                    </div>

                    {/* Near Me */}
                    <div className="px-4 mt-4">
                        <Button
                            variant="outline"
                            className="w-full flex gap-2"
                            onClick={handleNearMe}
                        >
                            <MapPin size={18} />
                            Near Me
                        </Button>
                    </div>

                    {/* Grid Cities */}
                    <div className="px-4 mt-6">
                        <p className="font-semibold mb-3">Popular Cities</p>

                        <div className="grid grid-cols-3 gap-3">
                            {topCities.map((city) => (
                                <Button
                                    key={city}
                                    variant="secondary"
                                    className="h-12"
                                >
                                    {city}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Scroll List */}
                    <div className="px-4 mt-6 pb-6">
                        <p className="font-semibold mb-3">Other Cities</p>

                        <div className="max-h-48 overflow-y-auto space-y-2">
                            {otherCities.map((city) => (
                                <Button
                                    key={city}
                                    variant="ghost"
                                    className="w-full justify-start"
                                >
                                    {city}
                                </Button>
                            ))}
                        </div>
                    </div>

                </div>
            </DrawerContent>

        </Drawer>
    );
}
