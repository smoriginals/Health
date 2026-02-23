import React, { useState } from "react"
import { Search, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function Treatments() {

    const [search, setSearch] = useState("")

    const treatments = [
        "Angioplasty - PTCA",
        "Coronary Angiogram",
        "CT Coronary Angiography",
        "Heart Attack",
        "Arrhythmia",
        "Coronary Artery Disease",
        "Myocardial Infarction",
        "Third Degree Heart Block",
        "Restrictive Cardiomyopathy",
        "First Degree Heart Block"
    ]

    const filtered = treatments.filter(item =>
        item.toLowerCase().includes(search.toLowerCase())


    )
    return (
        <>
            <section className="relative top-16 w-full py-4 md:py-6">
                <div className="mx-auto max-w-7xl px-6">

                    {/* HEADER */}
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                            Conditions and Treatments
                        </h2>

                        {/* SEARCH */}
                        <div className="relative w-full md:w-80">
                            <Search
                                size={18}
                                className="-translate-y-1/2 absolute left-3 top-1/2 text-gray-400"
                            />
                            <input
                                type="text"
                                placeholder="Search Condition or Treatment"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full rounded-full border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                    </div>

                    {/* CHIP GRID */}
                    <div className="mt-8 flex flex-wrap gap-4">

                        {filtered.map((item, index) => (
                            <Link
                                key={index}
                                to={`/cardiology/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                className="flex items-center gap-2 rounded-full bg-[#dce7ef] px-5 py-2 text-sm font-medium text-gray-800 transition hover:bg-blue-100 hover:text-blue-700"
                            >
                                {item}
                                <ArrowRight size={16} />
                            </Link>
                        ))}

                        {filtered.length === 0 && (
                            <p className="text-sm text-gray-500">No results found.</p>
                        )}

                    </div>

                </div>
            </section>
        </>
    )

}