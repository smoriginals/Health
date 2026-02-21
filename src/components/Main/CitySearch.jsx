import { useState } from "react"
import { MapPin, ChevronDown, Search } from "lucide-react"

import {
    Drawer,
    DrawerTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router-dom"

export default function CitySearch() {
    const navigate = useNavigate()

    const [city, setCity] = useState("Delhi")
    const [query, setQuery] = useState("")
    const [area, setArea] = useState("")
    const [open, setOpen] = useState(false)

    // ---- MOCK DATA ----
    const data = {
        Delhi: [
            "Rohini",
            "Dwarka",
            "Saket",
            "Karol Bagh",
            "Janakpuri",
            "Lajpat Nagar",
            "Pitampura",
        ],
        Mumbai: ["Andheri", "Bandra", "Juhu", "Powai", "Colaba"],
        Bangalore: ["Whitefield", "Indiranagar", "BTM", "Electronic City"],
    }

    const cities = Object.keys(data)

    const filteredAreas =
        (data[city] || []).filter((a) =>
            a.toLowerCase().includes(query.toLowerCase())
        )

    // ---- SEARCH ACTION ----
    const handleSearch = () => {
        if (!area && !query) return

        navigate("/area", {
            state: {
                city,
                area: area || query,
            },
        })
    }

    return (
        <div className="flex w-full max-w-md flex-col gap-2">

            {/* ================= CITY SELECT ================= */}
            <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger asChild>
                    <Button
                        size="sm"
                        className="w-fit gap-2 bg-black text-white hover:bg-black/80 rounded-full"
                    >
                        <MapPin size={16} />
                        {city}
                        <ChevronDown size={14} />
                    </Button>
                </DrawerTrigger>

                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Select City</DrawerTitle>
                    </DrawerHeader>

                    <div className="grid grid-cols-2 gap-3 p-4">
                        {cities.map((c) => (
                            <Button
                                key={c}
                                className="bg-black text-white hover:bg-black/80"
                                onClick={() => {
                                    setCity(c)
                                    setQuery("")
                                    setArea("")
                                    setOpen(false)
                                }}
                            >
                                {c}
                            </Button>
                        ))}
                    </div>
                </DrawerContent>
            </Drawer>

            {/* ================= SEARCH INPUT ================= */}
            <div className="relative flex items-center">

                <Input
                    value={query}
                    placeholder={`Search Doctor, Hospital, etc in ${city}`}
                    className="h-12 rounded-full pr-12 bg-white border border-gray-300 text-base"
                    onChange={(e) => {
                        setQuery(e.target.value)
                        setArea("")     // reset confirmed selection
                    }}
                />

                {/* SEARCH BUTTON */}
                <Button
                    size="icon"
                    onClick={handleSearch}
                    className="absolute right-1 h-10 w-10 rounded-full bg-black text-white hover:bg-black/80"
                >
                    <Search size={18} />
                </Button>

                {/* ===== DROPDOWN SUGGESTIONS ===== */}
                {query && !area && (
                    <div className="absolute top-14 z-[999] w-full rounded-xl border bg-white shadow-lg">

                        {filteredAreas.length === 0 && (
                            <div className="p-3 text-sm text-gray-400">
                                No areas found
                            </div>
                        )}

                        {filteredAreas.map((a) => (
                            <div
                                key={a}
                                onClick={() => {
                                    setArea(a)
                                    setQuery(a)
                                }}
                                className="cursor-pointer p-3 text-sm hover:bg-black hover:text-white transition"
                            >
                                {a}
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    )
}
