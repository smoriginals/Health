import React from "react";

const articles = [
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

export default function LatestArticles() {
    return (
        <div className="relative top-16 px-4 py-4">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <h2 className="mb-2 text-2xl font-bold text-blue-900 sm:text-3xl">
                    Latest Articles
                </h2>
                <p className="mb-6 text-sm text-gray-500">
                    Health tips and expert insights reviewed by top doctors
                </p>

                {/* Scrollable row — CSS only */}
                <div
                    className="flex gap-5 overflow-x-auto pb-4"
                    style={{ scrollbarWidth: "none" }}
                >
                    {articles.map((a) => (
                        <div
                            key={a.id}
                            className="w-72 flex-shrink-0 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >
                            {/* Image */}
                            <div className="relative h-44 overflow-hidden">
                                <img
                                    src={`${a.img}?auto=format&fit=crop&w=600&q=60`}
                                    alt={a.title}
                                    className="h-full w-full object-cover transition hover:scale-105"
                                />
                                {/* Gradient + title overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                <h3 className="absolute bottom-3 left-3 right-3 text-sm font-semibold leading-snug text-white">
                                    {a.title}
                                </h3>
                            </div>

                            {/* Doctor meta */}
                            <div className="flex items-center gap-3 p-4">
                                <img
                                    src={a.doctorImg}
                                    alt={a.doctor}
                                    className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                                />
                                <div>
                                    <p className="text-sm font-medium text-blue-900">
                                        Reviewed by {a.doctor}
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        Last updated {a.updated}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}