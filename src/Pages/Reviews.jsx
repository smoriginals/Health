import React, { useRef } from "react";

export default function Reviews() {
    const sliderRef = useRef(null);

    const drag = useRef({
        isDown: false,
        startX: 0,
        scrollLeft: 0,
    });

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

    const handleMouseDown = (e) => {
        drag.current.isDown = true;
        sliderRef.current.classList.add("cursor-grabbing");

        drag.current.startX =
            e.pageX - sliderRef.current.offsetLeft;

        drag.current.scrollLeft =
            sliderRef.current.scrollLeft;
    };

    const handleMouseLeave = () => {
        drag.current.isDown = false;
        sliderRef.current.classList.remove("cursor-grabbing");
    };

    const handleMouseUp = () => {
        drag.current.isDown = false;
        sliderRef.current.classList.remove("cursor-grabbing");
    };

    const handleMouseMove = (e) => {
        if (!drag.current.isDown) return;

        e.preventDefault();

        const x =
            e.pageX - sliderRef.current.offsetLeft;

        const walk =
            (x - drag.current.startX) * 1.5;

        sliderRef.current.scrollLeft =
            drag.current.scrollLeft - walk;
    };

    return (
        <div className="px-8 py-6">
            <div
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className="
          flex gap-6
          overflow-x-auto
          scroll-smooth
          cursor-grab
          select-none
          pb-4
        "
            >
                {reviews.map((r, i) => (
                    <div
                        key={i}
                        className="
              flex-shrink-0
              w-[300px]
              h-[300px]
              bg-white
              rounded-2xl
              shadow-md
              p-5
              flex flex-col
              justify-between
            "
                    >
                        {/* Header */}
                        <div className="flex justify-between">
                            <div className="flex gap-3">
                                <img
                                    src={r.img}
                                    alt={r.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />

                                <div>
                                    <div className="flex items-center gap-1">
                                        <span className="font-semibold text-sm">
                                            {r.name}
                                        </span>

                                        {r.verified && (
                                            <span className="text-xs bg-blue-500 text-white px-2 rounded-full">
                                                ✔
                                            </span>
                                        )}
                                    </div>

                                    <div className="text-xs text-gray-500">
                                        {r.daysAgo} days ago
                                    </div>
                                </div>
                            </div>

                            <div className="text-yellow-400 text-sm">
                                {[...Array(5)].map((_, j) => (
                                    <span key={j}>
                                        {j < r.rating ? "★" : "☆"}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <p className="text-gray-700 text-sm">
                            {r.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
