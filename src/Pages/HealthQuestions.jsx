import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function HealthQuestions() {
    const categories = [
        "General Health", "Cardiology", "Orthopaedics", "Urology",
        "Gynaecology", "Neurology", "Oncology", "Ophthalmology",
        "Dermatology", "Gastroenterology"
    ];

    const [activeCategory, setActiveCategory] = useState("General Health");
    const [openQuestion, setOpenQuestion] = useState(null);

    const questions = [
        {
            q: "What are the early signs of heart disease?",
            a: "Early signs include chest discomfort, shortness of breath, fatigue, irregular heartbeat, and swelling in the legs. If you experience any of these symptoms, consult a cardiologist immediately for proper diagnosis and treatment."
        },
        {
            q: "How do I know if I need surgery for my knee pain?",
            a: "Surgery is typically recommended when conservative treatments like physiotherapy, medications, and lifestyle changes fail to relieve pain. Signs you may need surgery include severe joint damage visible on X-ray, inability to walk normally, or persistent pain affecting daily life."
        },
        {
            q: "What is the difference between JCI and NABH accreditation?",
            a: "JCI (Joint Commission International) is a global accreditation standard, while NABH (National Accreditation Board for Hospitals) is an Indian standard. Both certify hospitals for quality care and patient safety. JCI is considered the gold standard internationally."
        },
        {
            q: "Can I get a second opinion from a specialist online?",
            a: "Yes! HexaHealth connects you with top specialists for online second opinions. Simply upload your reports and medical history, and a qualified doctor will review your case and provide expert guidance — all from the comfort of your home."
        },
        {
            q: "How does medical loan assistance work?",
            a: "HexaHealth partners with leading financial institutions to offer zero-cost EMI and medical loans for surgeries and treatments. The process is quick, paperless, and designed to ensure financial barriers never come in the way of your health."
        },
        {
            q: "What should I carry for my first hospital consultation?",
            a: "You should carry a valid photo ID, all previous medical reports and prescriptions, insurance card (if applicable), a list of current medications, and any relevant scan or test reports. Arriving 15 minutes early helps with registration."
        },
        {
            q: "Is laparoscopic surgery better than open surgery?",
            a: "Laparoscopic (minimally invasive) surgery generally offers faster recovery, smaller scars, less pain, and lower infection risk compared to open surgery. However, the best approach depends on your specific condition — consult your surgeon for a personalised recommendation."
        },
        {
            q: "How can I check if my insurance covers a specific treatment?",
            a: "HexaHealth's insurance assistance team can verify your coverage for free. Share your policy details and required treatment, and our experts will check eligibility, help with pre-authorisation, and guide you through the claims process end-to-end."
        }
    ];

    return (
        <section className="bg-slate-100 px-4 py-16">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <h2 className="mb-2 text-2xl font-bold text-blue-900 sm:text-3xl">
                    Frequently Asked Health Questions
                </h2>
                <p className="mb-6 text-sm text-gray-500">
                    Get clear answers to common medical and healthcare queries from our experts
                </p>

                {/* Category Chips — CSS scroll */}
                <div
                    className="mb-8 flex gap-2 overflow-x-auto pb-2"
                    style={{ scrollbarWidth: "none" }}
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`flex-shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all ${activeCategory === cat
                                    ? "border-blue-500 bg-blue-600 text-white"
                                    : "border-gray-300 bg-white text-gray-600 hover:border-blue-300 hover:bg-blue-50"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Q&A Cards — CSS scroll */}
                <div
                    className="flex gap-5 overflow-x-auto pb-4"
                    style={{ scrollbarWidth: "none" }}
                >
                    {questions.map((item, i) => (
                        <div
                            key={i}
                            onClick={() => setOpenQuestion(openQuestion === i ? null : i)}
                            className="flex w-80 flex-shrink-0 cursor-pointer flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >
                            {/* Icon + Question */}
                            <div className="mb-3 flex items-start gap-3">
                                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-50">
                                    <HelpCircle size={16} className="text-blue-500" />
                                </div>
                                <h3 className="font-semibold leading-snug text-blue-900">
                                    {item.q}
                                </h3>
                            </div>

                            {/* Divider */}
                            <div className="mb-3 h-px bg-gray-100" />

                            {/* Answer — collapsed by default */}
                            <div className={`overflow-hidden transition-all duration-300 ${openQuestion === i ? "max-h-60" : "max-h-12"}`}>
                                <p className={`text-sm leading-relaxed text-gray-600 ${openQuestion === i ? "" : "line-clamp-2"}`}>
                                    {item.a}
                                </p>
                            </div>

                            {/* Read More toggle */}
                            <button className="mt-3 flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800">
                                {openQuestion === i ? (
                                    <><ChevronUp size={14} /> Read Less</>
                                ) : (
                                    <><ChevronDown size={14} /> Read More</>
                                )}
                            </button>
                        </div>
                    ))}

                    {/* View All Card */}
                    <div className="flex w-52 flex-shrink-0 flex-col items-center justify-center rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-100 to-cyan-100 p-6 text-center">
                        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow">
                            <span className="text-2xl">💬</span>
                        </div>
                        <h3 className="mb-1 font-bold text-blue-900">500+ FAQs</h3>
                        <p className="mb-5 text-xs leading-relaxed text-blue-700">
                            Browse all health questions answered by our medical experts
                        </p>
                        <button className="rounded-full border border-blue-500 bg-white px-5 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white">
                            View All →
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}