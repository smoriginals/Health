import React from "react";
import { FileText, BarChart2, Users, Mail, Download, Globe, Stethoscope, User } from "lucide-react";

export default function Investors() {
    const reports = [
        { id: 1, title: "Annual Report 2024", url: "#" },
        { id: 2, title: "Quarterly Results Q4 2024", url: "#" },
        { id: 3, title: "Investor Presentation - FY24", url: "#" },
    ];

    const highlights = [
        { id: 1, label: "Revenue (FY24)", value: "₹ 120 Cr" },
        { id: 2, label: "EBITDA Margin", value: "22%" },
        { id: 3, label: "PAT (FY24)", value: "₹ 18 Cr" },
    ];

    const leadership = [
        { id: 1, name: "Dr. A. Kumar", role: "Founder & CEO" },
        { id: 2, name: "Ms. R. Sharma", role: "CFO" },
        { id: 3, name: "Mr. S. Gupta", role: "COO" },
    ];

    return (
        <div className="relative top-16 bg-white py-2">
            <div className="mx-auto max-w-6xl px-4">
                {/* Hero */}
                <div className="mb-10 rounded-lg bg-gradient-to-r from-cyan-100 to-blue-50 p-8">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900">Investor Relations</h1>
                            <p className="mt-2 text-sm text-gray-700">
                                Welcome to the Investors section. Find our financial reports, governance
                                information and latest corporate updates.
                            </p>
                        </div>

                        <div className="mt-4 flex items-center gap-3 md:mt-0">
                            <a
                                href="#reports"
                                className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm text-white hover:bg-black/80"
                            >
                                <FileText size={16} />
                                View Reports
                            </a>

                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            >
                                <Mail size={16} />
                                Contact IR
                            </a>
                        </div>
                    </div>
                </div>

                {/* Financial Highlights */}
                <section className="mb-10">
                    <h2 className="mb-4 text-2xl font-semibold text-gray-900">Financial Highlights</h2>

                    <div className="grid gap-4 sm:grid-cols-3">
                        {highlights.map((h) => (
                            <div key={h.id} className="rounded-lg border p-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-xs font-medium text-gray-500">{h.label}</p>
                                        <p className="mt-2 text-xl font-bold text-slate-900">{h.value}</p>
                                    </div>
                                    <BarChart2 size={32} className="text-teal-600" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Latest Reports */}
                <section id="reports" className="mb-10">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-semibold text-gray-900">Latest Reports & Filings</h2>
                        <a href="#" className="inline-flex items-center gap-2 text-sm text-teal-600 hover:underline">
                            <Download size={14} />
                            Download All
                        </a>
                    </div>

                    <ul className="mt-4 space-y-3">
                        {reports.map((r) => (
                            <li key={r.id} className="flex items-center justify-between rounded-lg border p-3">
                                <div className="flex items-center gap-3">
                                    <FileText size={18} className="text-teal-600" />
                                    <div>
                                        <p className="font-medium text-gray-900">{r.title}</p>
                                        <p className="text-xs text-gray-500">Published: 2024</p>
                                    </div>
                                </div>
                                <a href={r.url} className="inline-flex items-center gap-2 text-sm text-teal-600 hover:underline">
                                    <Download size={14} />
                                    PDF
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Corporate Governance */}
                <section className="mb-10">
                    <h2 className="mb-4 text-2xl font-semibold text-gray-900">Corporate Governance</h2>
                    <p className="mb-4 text-gray-700">
                        We follow industry best practices on corporate governance including an independent board, audit
                        and risk committees, and transparent disclosure policies.
                    </p>

                    <div className="grid gap-4 sm:grid-cols-3">
                        <div className="rounded-lg border p-4">
                            <h3 className="font-medium text-gray-900">Board of Directors</h3>
                            <p className="mt-2 text-sm text-gray-600">Independent and executive directors with healthcare and finance expertise.</p>
                        </div>
                        <div className="rounded-lg border p-4">
                            <h3 className="font-medium text-gray-900">Committees</h3>
                            <p className="mt-2 text-sm text-gray-600">Audit, Risk, Nomination & Remuneration, CSR committees.</p>
                        </div>
                        <div className="rounded-lg border p-4">
                            <h3 className="font-medium text-gray-900">Investor Policies</h3>
                            <p className="mt-2 text-sm text-gray-600">Shareholder rights, disclosure norms and dividend policy.</p>
                        </div>
                    </div>
                </section>

                {/* Leadership */}
                <section className="mb-10">
                    <h2 className="mb-4 text-2xl font-semibold text-gray-900">Leadership</h2>

                    <div className="grid gap-4 sm:grid-cols-3">
                        {leadership.map((l) => (
                            <div key={l.id} className="flex flex-col items-center gap-3 rounded-lg border p-4 text-center">
                                <div className="h-20 w-20 rounded-full bg-gray-100 flex items-center justify-center">
                                    {l.name.startsWith("Dr.") ? (
                                        <Stethoscope size={36} className="text-teal-600" />
                                    ) : (
                                        <User size={36} className="text-teal-600" />
                                    )}
                                </div>
                                <h3 className="text-md font-medium text-gray-900">{l.name}</h3>
                                <p className="text-sm text-gray-600">{l.role}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Investor FAQs */}
                <section className="mb-10">
                    <h2 className="mb-4 text-2xl font-semibold text-gray-900">Investor FAQs</h2>

                    <div className="space-y-4">
                        <details className="rounded-lg border p-4">
                            <summary className="cursor-pointer font-medium">How can I get the latest financial results?</summary>
                            <p className="mt-2 text-sm text-gray-600">Visit the Reports section above or subscribe to investor updates via email.</p>
                        </details>

                        <details className="rounded-lg border p-4">
                            <summary className="cursor-pointer font-medium">Who should I contact for investor relations?</summary>
                            <p className="mt-2 text-sm text-gray-600">Use the contact section below or email ir@hexahealth.example (placeholder).</p>
                        </details>
                    </div>
                </section>

                {/* Contact / IR */}
                <section id="contact" className="mb-10">
                    <h2 className="mb-4 text-2xl font-semibold text-gray-900">Contact Investor Relations</h2>

                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="rounded-lg border p-4">
                            <h3 className="font-medium text-gray-900">Investor Relations Team</h3>
                            <p className="mt-2 text-sm text-gray-600">For queries related to reports, governance and investments, please reach out.</p>

                            <div className="mt-4 space-y-2 text-sm text-gray-700">
                                <div className="flex items-center gap-2"><Mail size={14} /> ir@hexahealth.example</div>
                                <div className="flex items-center gap-2"><Globe size={14} /> www.hexahealth.example</div>
                                <div className="flex items-center gap-2">+91 98765 43210</div>
                            </div>
                        </div>

                        <div className="rounded-lg border p-4">
                            <h3 className="font-medium text-gray-900">Subscribe for Updates</h3>
                            <p className="mt-2 text-sm text-gray-600">Get quarterly updates and investor alerts via email.</p>

                            <form className="mt-4 flex gap-2">
                                <input className="flex-1 rounded-md border px-3 py-2 text-sm" placeholder="Your email" />
                                <button className="rounded-md bg-teal-600 px-4 py-2 text-sm text-white">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Footer CTA */}
                <div className="mt-8 rounded-lg border p-6 text-center">
                    <p className="mb-3 text-gray-700">Looking to connect with our leadership or request detailed filings?</p>
                    <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm text-white hover:bg-black/80">
                        <Users size={16} /> Contact Investor Relations
                    </a>
                </div>
            </div>
        </div>
    );
}
