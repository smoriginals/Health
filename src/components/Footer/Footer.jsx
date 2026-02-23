import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";



const tabs = [
    "Top Doctors",
    "Top Hospitals",
    "Treatments",
    "Ayushman Bharat",
    "Insurance",
];

const footerColumns = {
    "Medical Tests": [
        "MPV Blood Test in Hindi",
        "MCH Blood Test in Hindi",
        "ESR Blood Test",
        "Double Marker Test",
        "HCT Blood Test in Hindi",
        "TB Gold Test",
        "CA 125 Blood Test",
        "CA 125 Test in Hindi",
        "SGPT Test",
        "ANC Profile Test",
        "Serum Iron Test",
        "RGU Test",
        "Double Marker Test in Hindi",
    ],
    HexaHealth: [
        "About Us",
        "Contact Us",
        "For Investors",
        "Partner With Us",
        "FAQs",
        "Press & Media",
        "Medical Reviewers",
        "Authors",
        "Careers",
        "Site Map",
    ],
    Policies: [
        "Privacy Policy",
        "Refund Policy",
        "Terms & Conditions",
        "Editorial Policy",
    ],
    "For Patients": [
        "All Doctors",
        "All Hospitals",
        "All Conditions",
        "All Treatments",
        "All Departments",
        "Second Opinion",
        "Medical Loan",
        "BMI Calculator",
        "English Blog",
        "Hindi Blog",
        "HexaHealth Reviews",
    ],
};

const socialLinks = [
    { name: "Facebook", url: "https://facebook.com" },
    { name: "X", url: "https://x.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Instagram", url: "https://instagram.com" },
    { name: "YouTube", url: "https://youtube.com" },
];

export default function Footer() {
    const [activeTab, setActiveTab] = useState("Top Doctors");
    const [expandedSection, setExpandedSection] = useState(null);

    return (
        <footer className="relative top-16 w-full border-t border-blue-100 bg-gradient-to-b from-blue-50 to-cyan-50 pb-12">

            {/* Top Tabs */}
            <div className="border-b border-blue-200 bg-white/80">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="flex overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`flex-shrink-0 border-b-2 px-6 py-4 text-sm font-semibold transition sm:px-10 sm:py-5 ${activeTab === tab
                                        ? "border-teal-600 text-teal-700"
                                        : "border-transparent text-gray-600 hover:border-teal-300 hover:text-teal-600"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer Body */}
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6">

                    {/* Address + Social */}
                    <div className="sm:col-span-2 lg:col-span-2">
                        <h4 className="mb-2 text-base font-bold text-gray-900">Address</h4>
                        <p className="mb-6 text-sm leading-relaxed text-gray-500">
                            Vianam Healthtech Private Limited (HexaHealth), Third Floor
                            Building B, The Presidency, 46/4, Sector 14, Mehrauli Gurgaon
                            Road, Gurgaon, Haryana 122001
                        </p>

                        <h4 className="mb-3 text-base font-bold text-gray-900">
                            Follow Us
                        </h4>

                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.name}
                                    href={s.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-600"
                                >
                                    {s.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerColumns).map(([heading, links]) => (
                        <div key={heading} className="lg:col-span-1">
                            <button
                                onClick={() =>
                                    setExpandedSection(
                                        expandedSection === heading ? null : heading
                                    )
                                }
                                className="flex w-full items-center justify-between lg:cursor-default"
                            >
                                <h4 className="text-base font-bold text-teal-700">
                                    {heading}
                                </h4>

                                {/* Simple arrow text instead of SVG */}
                                <span className="text-gray-400 transition-transform duration-300 lg:hidden" style={{
                                    transform: expandedSection === heading ? 'rotate(180deg)' : 'rotate(0deg)'
                                }}>
                                    {expandedSection === heading ? <ChevronUp /> : <ChevronDown />}
                                </span>
                            </button>

                            <ul
                                className={`mt-3 space-y-2.5 ${expandedSection === heading ? "block" : "hidden"
                                    } lg:block`}
                            >
                                {links.map((link) => (
                                    <li key={link}>
                                        <span className="block text-sm text-gray-600">
                                            {link}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </div>
        </footer>
    );
}