import React from "react";
import { ArrowRight, UserCog, BotMessageSquare } from "lucide-react";
import AskGpt from "../components/AskGpt";

// 👇 Replace these with your actual image imports or URLs
const AI_REPORT_IMG = "https://cdn-icons-png.flaticon.com/512/4228/4228948.png";
const ROBOT_IMG = "https://cdn-icons-png.flaticon.com/512/4712/4712139.png";

export default function Help() {

    const OpenStore = (e) => {
        e.preventDefault();
        window.open("https://play.google.com/store/apps/details?id=com.curely.app", "_blank");
    }

    return (
        <div className="relative top-0 z-0 px-4 py-4">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                    {/* Card 1 — AI Health Reports */}
                    <div className="relative flex min-h-[220px] items-center overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-cyan-50 to-blue-50 p-8 shadow-sm">
                        {/* Text */}
                        <div className="relative z-10 max-w-[55%]">
                            <h2 className="mb-3 text-xl font-bold leading-tight text-blue-900 sm:text-2xl">
                                AI Health Reports
                            </h2>
                            <p className="mb-6 text-sm leading-relaxed text-gray-600">
                                Smart summaries, AI insights, personalized recommendations,
                                instant interpretations, and a unified report view.
                            </p>
                            <button className="flex cursor-pointer items-center gap-2 rounded-full border border-teal-600 bg-white px-5 py-2.5 text-sm font-semibold text-teal-700 transition hover:bg-teal-600 hover:text-white" onClick={OpenStore}>
                                Get The App
                                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-current">
                                    <ArrowRight size={11} />
                                </span>
                            </button>
                        </div>

                        {/* Image — replace src with your own */}
                        <UserCog size={120} className='absolute bottom-16 right-4' />

                    </div>

                    {/* Card 2 — Wellness Companion */}
                    <div className="relative flex min-h-[220px] items-center overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50 p-8 shadow-sm">
                        {/* Text */}
                        <div className="relative z-10 max-w-[55%]">
                            <h2 className="mb-3 text-xl font-bold leading-tight text-blue-900 sm:text-2xl">
                                Your Wellness Companion
                            </h2>
                            <p className="mb-6 text-sm leading-relaxed text-gray-600">
                                Your trusted partner for smarter, personalized, and
                                effortless health management.
                            </p>
                            <AskGpt>
                                <button className="flex items-center gap-2 rounded-full border border-teal-600 bg-white px-5 py-2.5 text-sm font-semibold text-teal-700 transition hover:bg-teal-600 hover:text-white">
                                    Chat Now
                                    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-current">
                                        <ArrowRight size={11} />
                                    </span>
                                </button>
                            </AskGpt>
                        </div>

                        {/* Image — replace src with your own */}
                        <BotMessageSquare size={120} className='absolute bottom-16 right-4' />

                    </div>

                </div>
            </div>
        </div>
    );
}