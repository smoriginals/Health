import React, { useState } from "react";

// 👇 Replace these with your actual video thumbnail imports
const THUMB_1 = "https://randomuser.me/api/portraits/men/41.jpg";
const THUMB_2 = "https://randomuser.me/api/portraits/women/44.jpg";
const THUMB_3 = "https://randomuser.me/api/portraits/men/32.jpg";

const testimonials = [
    {
        id: 1,
        name: "Rajesh Sharma",
        videoTag: "SURGERY FOR PILES",
        videoSubtext: "IT WAS A SEEMLESS PROCESS OF HEXAHEALTH",
        hasVideo: true,
        thumb: THUMB_1,
        story: "I got connected with HexaHealth and they did everything on my behalf. Even when I got admitted to the hospital, they were there for me like my brother.",
        fullStory: "I got connected with HexaHealth and they did everything on my behalf. Even when I got admitted to the hospital, they were there for me like my brother, and I did not need anybody else do things for me. It was a very seamless process which HexaHealth have done for me.",
    },
    {
        id: 2,
        name: "Anupama",
        videoTag: "SURGERY FOR FISSURE",
        videoSubtext: "HEXAHEALTH AAPKO FREEDOM DETA HAI KHUDSE DOCTOR CHOOSE KARNE KA",
        hasVideo: true,
        thumb: THUMB_2,
        story: "Baaki jagah par last minute complications hote hain. Lekin, mujhe laga ki iske baad aur koi problem ya pain bhi kam hoga...",
        fullStory: "Baaki jagah par last minute complications hote hain. Lekin, mujhe laga ki iske baad aur koi aur problem ya pain bhi kam hoga. Maine socha ye bahut achi company hai. HexaHealth ne mujhe complete freedom di doctor choose karne ki aur hospital choose karne ki.",
    },
    {
        id: 3,
        name: "Siddhant",
        hasVideo: false,
        story: "Mujhe HexaHealth ke baare mein online pata chala. HexaHealth ne ek Plastic Surgeon se connect karvaya. It was very good aur main suggest karunga...",
        fullStory: "Mujhe HexaHealth ke baare mein online pata chala. HexaHealth ne ek Plastic Surgeon, Dr. Priyanka Sharma, se connect karvaya. It was very good aur main suggest karunga agar aap log bhi Surgery kara rahe ho toh HexaHealth ke through hi karao. Main toh kaafi khush hun.",
    },
    {
        id: 4,
        name: "Madhu",
        videoTag: "SURGERY FOR HERNIA",
        videoSubtext: "HEXAHEALTH BAHUT HELPFUL HAI",
        hasVideo: true,
        thumb: THUMB_3,
        story: "Karib 2-3 saal se Hernia se pareshaan thi. HexaHealth kaafi helpful hai aur apne budget ke andar bhi hai.",
        fullStory: "Karib 2-3 saal se Hernia se pareshaan thi. Kisi relative ne mujhe HexaHealth ke baare mein bataya aur main online appointment book kari. Agar koi bhi aage kisi ko dikkat aati hai toh main unhe HexaHealth ke baare mein bataungi. HexaHealth kaafi helpful hai aur apne budget ke andar bhi hai.",
    },
];

export default function PatientsStories() {
    const [expanded, setExpanded] = useState(null);

    return (
        <div className="relative top-16 px-4 py-6">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <h2 className="mb-3 text-2xl font-bold text-blue-900 sm:text-3xl">
                    Real Patients, Real Stories
                </h2>
                <p className="mb-10 max-w-2xl text-sm text-gray-600">
                    Experience how HexaHealth transformed treatment journeys with trust, and care into successful recovery stories.
                </p>

                {/* Scrollable row */}
                <div
                    className="flex gap-5 overflow-x-auto p-2"
                    style={{ scrollbarWidth: "none" }}
                >
                    {testimonials.map((t) => (
                        <div
                            key={t.id}
                            className="flex w-[80vw] flex-shrink-0 flex-col gap-4 sm:w-[500px] sm:flex-row"
                        >
                            {/* Video thumbnail */}
                            {t.hasVideo && (
                                <div className="group relative w-full flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl shadow-lg sm:w-48">
                                    {/* Thumbnail image — replace with real video thumb */}
                                    <img
                                        src={t.thumb}
                                        alt={t.name}
                                        className="h-full min-h-[200px] w-full object-cover sm:min-h-0"
                                    />
                                    {/* Dark overlay */}
                                    <div className="absolute inset-0 bg-black/40" />

                                    {/* HexaHealth badge */}
                                    <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-lg bg-white/90 px-2 py-1">
                                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-600">
                                            <span className="font-bold text-[10px] text-white">H</span>
                                        </div>
                                        <span className="text-xs font-semibold text-gray-800">HexaHealth</span>
                                    </div>

                                    {/* Surgery tag */}
                                    {t.videoTag && (
                                        <div className="absolute left-3 top-11 rounded-md bg-orange-500 px-2 py-1 font-bold text-[10px] text-white">
                                            {t.videoTag}
                                        </div>
                                    )}

                                    {/* Subtext */}
                                    {t.videoSubtext && (
                                        <p className="absolute bottom-10 left-3 right-3 text-xs font-semibold leading-snug text-white">
                                            "{t.videoSubtext}"
                                        </p>
                                    )}

                                    {/* Play button */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition group-hover:scale-110">
                                            <svg className="ml-1 h-5 w-5 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Patient name */}
                                    <p className="absolute bottom-3 right-3 text-sm font-bold text-white">
                                        {t.name}
                                    </p>
                                </div>
                            )}

                            {/* Text card */}
                            <div className="flex flex-1 flex-col justify-center rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                                <h3 className="mb-2 text-lg font-bold text-blue-900">{t.name}</h3>
                                <p className="mb-3 text-sm leading-relaxed text-gray-600">
                                    {expanded === t.id && t.fullStory ? t.fullStory : t.story}
                                </p>
                                {t.fullStory && (
                                    <button
                                        onClick={() => setExpanded(expanded === t.id ? null : t.id)}
                                        className="text-left text-xs font-semibold text-teal-600 hover:text-teal-700"
                                    >
                                        {expanded === t.id ? "...Read Less" : "...Read More"}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All */}
                <div className="mt-10 text-center">
                    <button className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-teal-700 hover:shadow-lg">
                        View All Success Stories
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    );
}