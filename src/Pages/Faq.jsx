import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "What is HexaHealth and how does it work?",
        a: "HexaHealth is a patient-first healthcare platform that connects you with top doctors, hospitals, and specialists across India. Simply search for your condition or treatment, choose a verified doctor or hospital, and book an appointment online. Our care team supports you from consultation all the way through post-surgery recovery.",
    },
    {
        q: "Is HexaHealth free to use?",
        a: "Yes, using HexaHealth to find doctors, hospitals, and book appointments is completely free. We also offer free consultations for 300+ medical conditions. For certain premium services like medical loan assistance or insurance claim support, our team helps you at no extra cost.",
    },
    {
        q: "How do I book an appointment with a doctor?",
        a: "You can book an appointment in 3 easy steps: Search for your condition or speciality, choose a doctor or hospital from verified listings, and fill in your details to confirm. You'll receive a confirmation call from our care coordinator to assist you further.",
    },
    {
        q: "Does HexaHealth help with insurance and medical loans?",
        a: "Absolutely. HexaHealth has a dedicated insurance assistance team that helps you verify coverage, get pre-authorisation, and file claims hassle-free. We also partner with leading financial institutions to offer zero-cost EMI and medical loans so financial barriers never come in the way of your health.",
    },
    {
        q: "Are the doctors and hospitals on HexaHealth verified?",
        a: "Yes. All doctors and hospitals listed on HexaHealth are thoroughly verified. We only partner with JCI and NABH accredited hospitals and doctors with proven credentials and experience. Patient reviews and ratings are also monitored to ensure quality care at every step.",
    },
];

export default function Faq() {
    const [open, setOpen] = useState(null);

    return (
        <div className="relative top-0 bg-slate-100 px-4 py-8">
            <div className="mx-auto max-w-3xl">

                {/* Header */}
                <h2 className="mb-2 text-2xl font-bold text-blue-900 sm:text-3xl">
                    Frequently Asked Questions
                </h2>
                <p className="mb-10 text-sm text-gray-500">
                    Everything you need to know about HexaHealth
                </p>

                {/* Accordion */}
                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
                        >
                            {/* Question row */}
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                            >
                                <span className="font-semibold text-blue-900">{faq.q}</span>
                                <ChevronDown
                                    size={20}
                                    className={`flex-shrink-0 text-blue-500 transition-transform duration-300 ${open === i ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {/* Answer */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-60" : "max-h-0"
                                    }`}
                            >
                                <p className="border-t border-gray-100 px-6 py-5 text-sm leading-relaxed text-gray-600">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}