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
                    <div className="mt-4 px-4">
                        <Button
                            variant="outline"
                            className="flex w-full gap-2"
                            onClick={handleNearMe}
                        >
                            <MapPin size={18} />
                            Near Me
                        </Button>
                    </div>

                    {/* Grid Cities */}
                    <div className="mt-6 px-4">
                        <p className="mb-3 font-semibold">Popular Cities</p>

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
                    <div className="mt-6 px-4 pb-6">
                        <p className="mb-3 font-semibold">Other Cities</p>

                        <div className="max-h-48 space-y-2 overflow-y-auto">
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
