import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const tabs = ["Top Doctors", "Top Hospitals", "Treatments", "Ayushman Bharat", "Insurance"];

const footerColumns = {
    "Medical Tests": [
        "MPV Blood Test in Hindi", "MCH Blood Test in Hindi", "ESR Blood Test",
        "Double Marker Test", "HCT Blood Test in Hindi", "TB Gold Test",
        "CA 125 Blood Test", "CA 125 Test in Hindi", "SGPT Test",
        "ANC Profile Test", "Serum Iron Test", "RGU Test",
        "Double Marker Test in Hindi",
    ],
    "HexaHealth": [
        "About Us", "Contact Us", "For Investors", "Partner With Us",
        "FAQs", "Press & Media", "Medical Reviewers", "Authors",
        "Careers", "Site Map",
    ],
    "Policies": [
        "Privacy Policy", "Refund Policy", "Terms & Conditions", "Editorial Policy",
    ],
    "For Patients": [
        "All Doctors", "All Hospitals", "All Conditions", "All Treatments",
        "All Departments", "Second Opinion", "Medical Loan", "BMI Calculator",
        "English Blog", "Hindi Blog", "HexaHealth Reviews",
    ],
};

const socialLinks = [
    {
        name: "Facebook",
        icon: <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>,
    },
    {
        name: "X",
        icon: <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
    },
    {
        name: "LinkedIn",
        icon: <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>,
    },
    {
        name: "Instagram",
        icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>,
    },
    {
        name: "YouTube",
        icon: <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" /><polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg>,
    },
];

export default function Footer() {
    const [activeTab, setActiveTab] = useState("Top Doctors");
    const [expandedSection, setExpandedSection] = useState(null);

    return (
        <footer className="relative top-16 w-full border-t border-blue-100 bg-gradient-to-b from-blue-50 to-cyan-50">

            {/* ── Top Navigation Tabs — scrollable on all devices ── */}
            <div className="border-b border-blue-200 bg-white/80">
                <div className="mx-auto max-w-7xl px-4">
                    <div
                        className="flex overflow-x-auto"
                        style={{ scrollbarWidth: "none" }}
                    >
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`flex-shrink-0 border-b-2 px-6 py-4 text-sm font-semibold transition-all duration-200 sm:px-10 sm:py-5 ${activeTab === tab
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

            {/* ── Main Footer Body ── */}
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6">

                    {/* Address + Social + App buttons */}
                    <div className="sm:col-span-2 lg:col-span-2">
                        <h4 className="mb-2 text-base font-bold text-gray-900">Address</h4>
                        <p className="mb-6 text-sm leading-relaxed text-gray-500">
                            Vianam Healthtech Private Limited (HexaHealth), Third Floor
                            Building B, The Presidency, 46/4, Sector 14, Mehrauli Gurgaon
                            Road, Gurgaon, Haryana 122001
                        </p>

                        <h4 className="mb-3 text-base font-bold text-gray-900">Follow Us</h4>
                        <div className="mb-6 flex flex-wrap gap-2">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.name}
                                    href="#"
                                    aria-label={s.name}
                                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-600"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>

                        {/* App store buttons */}
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="#"
                                className="flex items-center gap-3 rounded-xl border border-gray-800 bg-gray-950 px-4 py-3 text-white transition hover:bg-gray-800"
                            >
                                <svg className="h-6 w-6 flex-shrink-0" viewBox="0 0 24 24">
                                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.55l1.6.926a1 1 0 010 1.734l-1.6.926L15.393 12l2.305-2.843zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z" fill="#fff" />
                                </svg>
                                <div>
                                    <div className="uppercase tracking-widest text-[9px] text-gray-400">GET IT ON</div>
                                    <div className="text-sm font-semibold">Google Play</div>
                                </div>
                            </a>

                            <a
                                href="#"
                                className="flex items-center gap-3 rounded-xl border border-gray-800 bg-gray-950 px-4 py-3 text-white transition hover:bg-gray-800"
                            >
                                <svg className="h-6 w-6 flex-shrink-0" fill="white" viewBox="0 0 24 24">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                                <div>
                                    <div className="uppercase tracking-widest text-[9px] text-gray-400">Download on the</div>
                                    <div className="text-sm font-semibold">App Store</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Link columns — accordion on mobile, always open on desktop */}
                    {Object.entries(footerColumns).map(([heading, links]) => (
                        <div key={heading} className="lg:col-span-1">
                            <button
                                onClick={() =>
                                    setExpandedSection(expandedSection === heading ? null : heading)
                                }
                                className="flex w-full items-center justify-between lg:cursor-default"
                            >
                                <h4 className="text-base font-bold text-teal-700">{heading}</h4>
                                <ChevronDown
                                    size={16}
                                    className={`text-gray-400 transition-transform duration-200 lg:hidden ${expandedSection === heading ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {/* Mobile: toggle. Desktop: always visible */}
                            <ul
                                className={`mt-3 space-y-2.5 ${expandedSection === heading ? "block" : "hidden"
                                    } lg:block`}
                            >
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="block text-sm text-gray-600 underline-offset-2 transition hover:text-teal-600 hover:underline"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* ── Copyright ── */}
                </div>
            </div>

        </footer>
    );
}