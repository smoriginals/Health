import { useEffect, useRef, useState } from "react";
import mobile from "../assets/mobile.webp";
import consult from "../assets/consult.webp";
import parents from "../assets/parents.webp";
import { CircleCheck } from "lucide-react";

const sections = [
    {
        img: mobile,
        title: "One-Stop Solution for Everything You Need",
        points: [
            "Expert Doctors with 15+ Years of Experience.",
            "Top JCI & NABH-Accredited Hospitals.",
            "24×7 Personal Care Assistance.",
            "Easy Insurance Claim & Medical Loan Support.",
            "Comprehensive Post-Treatment Care.",
        ],
    },
    {
        img: consult,
        title: "Expert Doctors at Your Fingertips",
        points: [
            "Connect instantly with verified specialists.",
            "Secure digital consultations anytime.",
            "Get second opinions from top doctors.",
            "Video, audio, and chat consultations.",
            "Follow-up care included.",
        ],
    },
    {
        img: parents,
        title: "Care for You and Your Family",
        points: [
            "Manage family health records in one place.",
            "Track treatment progress easily.",
            "Personalised health plans for every member.",
            "Insurance support for the entire family.",
            "Post-surgery recovery assistance.",
        ],
    },
];

export default function OneStopSolution() {
    const [active, setActive] = useState(0);
    const refs = useRef([]);

    useEffect(() => {
        if (window.innerWidth < 768) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    const index = Number(entry.target.dataset.index);
                    if (!Number.isNaN(index)) setActive(index);
                });
            },
            { threshold: 0.6 }
        );

        refs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative top-16 mx-auto max-w-6xl">

            {/* ── MOBILE: stacked sections ── */}
            <div className="space-y-14 px-4 md:hidden">
                {sections.map((s, i) => (
                    <div key={i}>
                        <img src={s.img} className="mx-auto mb-6 w-full max-w-[320px]" alt={s.title} />
                        <h2 className="mb-4 text-2xl font-bold text-[#00507D]">{s.title}</h2>
                        <div className="flex flex-col gap-2">
                            {s.points.map((p) => (
                                <div key={p} className="flex items-start gap-2 text-base font-semibold">
                                    <CircleCheck size={20} className="mt-0.5 shrink-0 text-[#00507D]" />
                                    <p>{p}</p>
                                </div>
                            ))}
                            <button className="mt-4 h-14 w-full max-w-[320px] rounded-full bg-blue-500 text-xl font-semibold text-white transition hover:scale-105">
                                Book Appointment
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── DESKTOP: sticky image left + scroll text right ── */}
            <div className="hidden w-full md:flex">

                {/* Sticky image panel */}
                <div className="sticky top-0 flex h-screen w-1/2 items-center justify-center p-8">
                    <img
                        src={sections[active].img}
                        alt={sections[active].title}
                        className="h-96 w-auto max-w-sm transition-all duration-500"
                    />
                </div>

                {/* Scrolling text panel */}
                <div className="w-1/2 pl-10">
                    {sections.map((s, i) => (
                        <div
                            key={i}
                            data-index={i}
                            ref={(el) => (refs.current[i] = el)}
                            className="flex min-h-screen flex-col justify-center"
                        >
                            <h2 className="mb-5 text-3xl font-bold text-[#00507D]">{s.title}</h2>
                            <div className="flex flex-col gap-3">
                                {s.points.map((p) => (
                                    <div key={p} className="flex items-start gap-2 text-lg font-semibold">
                                        <CircleCheck size={22} className="mt-0.5 shrink-0 text-[#00507D]" />
                                        <p>{p}</p>
                                    </div>
                                ))}
                                <button className="mt-6 h-14 w-64 rounded-full bg-blue-500 text-xl font-semibold text-white transition hover:scale-105">
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}