
import { useEffect, useRef, useState } from "react";
export default function OneStopSolution() {
    const sections = [
        {
            id: 0,
            title: "First Section",
            text: "This is description for first section.",
            img: "https://picsum.photos/id/1015/800/600",
        },
        {
            id: 1,
            title: "Second Section",
            text: "This text triggers second image.",
            img: "https://picsum.photos/id/1016/800/600",
        },
        {
            id: 2,
            title: "Third Section",
            text: "Scrolling updates image smoothly.",
            img: "https://picsum.photos/id/1018/800/600",
        },
    ];

    const [active, setActive] = useState(0);
    const refs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.dataset.index);
                        setActive(index);
                    }
                });
            },
            {
                threshold: 0.6,
            }
        );

        refs.current.forEach((el) => el && observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="flex max-w-6xl mx-auto">
            {/* LEFT STICKY IMAGE (moved first) */}
            <div className="w-1/2 h-screen sticky top-0 flex items-center justify-center">
                <img
                    src={sections[active].img}
                    className="rounded-xl shadow-xl transition-all duration-500"
                    alt=""
                />
            </div>

            {/* RIGHT TEXT COLUMN (moved second) */}
            <div className="w-1/2 pl-10">
                {sections.map((sec, i) => (
                    <div
                        key={sec.id}
                        data-index={i}
                        ref={(el) => (refs.current[i] = el)}
                        className="min-h-screen flex flex-col justify-center"
                    >
                        <h2 className="text-3xl font-bold mb-4">{sec.title}</h2>
                        <p className="text-lg text-gray-600">{sec.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
