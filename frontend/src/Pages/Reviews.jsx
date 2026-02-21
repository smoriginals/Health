import React from "react";
import { BadgeCheck } from "lucide-react";

const reviews = [
    {
        name: "Riya Sharma",
        verified: true,
        daysAgo: 2,
        rating: 5,
        img: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "The health insights are incredibly detailed and easy to understand.",
    },
    {
        name: "Amit Verma",
        verified: false,
        daysAgo: 6,
        rating: 4,
        img: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "Reports generate quickly and navigation is simple.",
    },
    {
        name: "Neha Kapoor",
        verified: true,
        daysAgo: 1,
        rating: 5,
        img: "https://randomuser.me/api/portraits/women/55.jpg",
        text: "Modern UI and smooth performance.",
    },
    {
        name: "Raj Singh",
        verified: true,
        daysAgo: 3,
        rating: 4,
        img: "https://randomuser.me/api/portraits/men/60.jpg",
        text: "Great daily tracking tool.",
    },
    {
        name: "Riya Sharma",
        verified: true,
        daysAgo: 2,
        rating: 5,
        img: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "The health insights are incredibly detailed and easy to understand.",
    },
    {
        name: "Amit Verma",
        verified: false,
        daysAgo: 6,
        rating: 4,
        img: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "Reports generate quickly and navigation is simple.",
    },
    {
        name: "Neha Kapoor",
        verified: true,
        daysAgo: 1,
        rating: 5,
        img: "https://randomuser.me/api/portraits/women/55.jpg",
        text: "Modern UI and smooth performance.",
    },
    {
        name: "Raj Singh",
        verified: true,
        daysAgo: 3,
        rating: 4,
        img: "https://randomuser.me/api/portraits/men/60.jpg",
        text: "Great daily tracking tool.",
    },
];

export default function Reviews() {
    return (
        <section
            id="reviews"
            className="scroll-mt-28 px-4 py-2"
        >
            <div className="mx-auto max-w-7xl p-2">

                {/* Header */}
                <h2 className="mb-2 text-2xl font-bold text-blue-900 sm:text-3xl">
                    What Our Patients Say
                </h2>
                <p className="mb-6 text-sm text-gray-500">
                    Real experiences from verified HexaHealth patients
                </p>

                {/* Scrollable row — CSS only, no JS needed */}
                <div
                    className="flex gap-5 overflow-x-auto pb-4"
                    style={{ scrollbarWidth: "none" }}
                >
                    {reviews.map((r, i) => (
                        <div
                            key={i}
                            className="flex w-72 flex-shrink-0 flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >
                            {/* Top: Avatar + Name + Stars */}
                            <div className="mb-4 flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={r.img}
                                        alt={r.name}
                                        className="h-11 w-11 rounded-full object-cover"
                                    />
                                    <div>
                                        <div className="flex items-center gap-1">
                                            <span className="text-sm font-semibold text-blue-900">
                                                {r.name}
                                            </span>
                                            {r.verified && (
                                                <BadgeCheck size={15} className="text-blue-500" />
                                            )}
                                        </div>
                                        <p className="text-xs text-gray-400">{r.daysAgo} days ago</p>
                                    </div>
                                </div>

                                {/* Stars */}
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, j) => (
                                        <span
                                            key={j}
                                            className={j < r.rating ? "text-orange-400" : "text-gray-200"}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="mb-4 h-px bg-gray-100" />

                            {/* Review text */}
                            <p className="text-sm leading-relaxed text-gray-600">{r.text}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}