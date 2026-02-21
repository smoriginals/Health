import { ArrowRight } from "lucide-react"
import AskGpt from "../Components/AskGpt";
import { useState } from "react"


// ===== Reusable Buttons =====
export function QuickActionButton({ icon, text, onClick }) {
    return (
        <button
            onClick={onClick}
            className="group flex w-full items-center justify-between rounded-full bg-white/90 px-4 py-2.5 transition hover:bg-white hover:shadow-md"
        >
            <div className="flex items-center gap-3">
                <span className="text-xl text-cyan-500">{icon}</span>
                <span className="text-left font-medium text-slate-700">
                    {text}
                </span>
            </div>

            <div className="rounded-full bg-cyan-500 p-1.5 transition group-hover:scale-110">
                <ArrowRight size={14} className="text-white" />
            </div>
        </button>
    )
}

export function PrimaryAskButton({ children, onClick }) {
    return (
        <button
            onClick={onClick}
            className="mt-4 flex items-center gap-2 rounded-full bg-cyan-600 px-8 py-4 font-semibold text-white transition hover:bg-cyan-700 hover:shadow-lg"
        >
            {children}
            <ArrowRight size={18} />
        </button>
    )
}

export default function HealthGPT() {

    const quickActions = [
        { icon: "🔍", text: "Find Top Doctor" },
        { icon: "🏥", text: "Find Top Hospital" },
        { icon: "💡", text: "Need Second Opinion" },
        { icon: "🏢", text: "Network Hospitals for my Insurance" },
        { icon: "💊", text: "Symptoms of Kidney Stones" },
        { icon: "🩺", text: "Treatment Options for Phimosis" },
        { icon: "📋", text: "Analyse my Insurance Policy" }
    ];

    const [selectedQuestion, setSelectedQuestion] = useState("")

    return (
        <section className="relative top-16 mx-auto w-full max-w-6xl p-4">
            <div className="rounded-xl bg-gradient-to-br from-cyan-100 to-cyan-200 p-8 shadow-lg">

                <div className="grid items-center gap-10 md:grid-cols-2">

                    {/* LEFT */}
                    <div>

                        <h1 className="mb-6 text-3xl font-bold text-slate-800 md:text-4xl">
                            Ask HealthGPT: Your Personalised Healthcare Companion
                        </h1>

                        {/* Quick Actions */}
                        <div className="grid gap-3 md:grid-cols-1">

                            <AskGpt initialQuestion={selectedQuestion}>
                                <div className="grid gap-3 md:grid-cols-2">
                                    {quickActions.map((a, i) => (
                                        <QuickActionButton
                                            key={i}
                                            icon={a.icon}
                                            text={a.text}
                                            onClick={() => setSelectedQuestion(a.text)}
                                        />
                                    ))}
                                </div>
                            </AskGpt>

                        </div>

                        {/* Primary CTA */}
                        <AskGpt>
                            <PrimaryAskButton>
                                Ask Now
                            </PrimaryAskButton>
                        </AskGpt>

                    </div>


                    {/* RIGHT — Illustration */}
                    <div className="hidden justify-center md:flex">
                        <div className="flex h-80 w-80 items-center justify-center rounded-full bg-gradient-to-br from-blue-200 to-blue-300">

                            {/* simplified robot container */}
                            <div className="text-6xl">🤖</div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}