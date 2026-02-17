import React from "react";

const videos = [
    {
        id: 1,
        title: "Understanding Heart Health in Modern Lifestyle",
        img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
        doctor: "Dr. Meera Singh",
        doctorImg: "https://randomuser.me/api/portraits/women/68.jpg",
        updated: "12 Feb 2026",
    },
    {
        id: 2,
        title: "Nutrition Tips for Busy Professionals",
        img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
        doctor: "Dr. Rahul Patel",
        doctorImg: "https://randomuser.me/api/portraits/men/45.jpg",
        updated: "08 Feb 2026",
    },
    {
        id: 3,
        title: "Sleep Cycles and Mental Performance",
        img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
        doctor: "Dr. Ananya Kapoor",
        doctorImg: "https://randomuser.me/api/portraits/women/50.jpg",
        updated: "02 Feb 2026",
    },
    {
        id: 4,
        title: "Daily Stretching Routines That Work",
        img: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
        doctor: "Dr. Vikram Desai",
        doctorImg: "https://randomuser.me/api/portraits/men/70.jpg",
        updated: "28 Jan 2026",
    },
    {
        id: 5,
        title: "Understanding Heart Health in Modern Lifestyle",
        img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
        doctor: "Dr. Meera Singh",
        doctorImg: "https://randomuser.me/api/portraits/women/68.jpg",
        updated: "12 Feb 2026",
    },
    {
        id: 6,
        title: "Nutrition Tips for Busy Professionals",
        img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
        doctor: "Dr. Rahul Patel",
        doctorImg: "https://randomuser.me/api/portraits/men/45.jpg",
        updated: "08 Feb 2026",
    },
    {
        id: 7,
        title: "Sleep Cycles and Mental Performance",
        img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
        doctor: "Dr. Ananya Kapoor",
        doctorImg: "https://randomuser.me/api/portraits/women/50.jpg",
        updated: "02 Feb 2026",
    },
    {
        id: 8,
        title: "Daily Stretching Routines That Work",
        img: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
        doctor: "Dr. Vikram Desai",
        doctorImg: "https://randomuser.me/api/portraits/men/70.jpg",
        updated: "28 Jan 2026",
    },
];

export default function LatestVideos() {
    return (
        <div className="relative top-0 bg-slate-100 px-4 py-8">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <h2 className="mb-2 text-2xl font-bold text-blue-900 sm:text-3xl">
                    HexaHealth Videos
                </h2>
                <p className="mb-6 text-sm text-gray-500">
                    Watch expert health videos reviewed by top doctors
                </p>

                {/* Scrollable row — CSS only */}
                <div
                    className="flex gap-5 overflow-x-auto pb-4"
                    style={{ scrollbarWidth: "none" }}
                >
                    {videos.map((v) => (
                        <div
                            key={v.id}
                            className="w-72 flex-shrink-0 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >
                            {/* Thumbnail + play button */}
                            <div className="relative h-44 overflow-hidden">
                                <img
                                    src={`${v.img}?auto=format&fit=crop&w=600&q=60`}
                                    alt={v.title}
                                    className="h-full w-full object-cover transition hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                                {/* Play button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg transition hover:scale-110">
                                        <svg className="ml-1 h-5 w-5 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>

                                <h3 className="absolute bottom-3 left-3 right-3 text-sm font-semibold leading-snug text-white">
                                    {v.title}
                                </h3>
                            </div>

                            {/* Doctor meta */}
                            <div className="flex items-center gap-3 p-4">
                                <img
                                    src={v.doctorImg}
                                    alt={v.doctor}
                                    className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                                />
                                <div>
                                    <p className="text-sm font-medium text-blue-900">
                                        Reviewed by {v.doctor}
                                    </p>
                                    <p className="text-xs text-gray-400">Last updated {v.updated}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}