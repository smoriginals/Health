import React from 'react';
import OfferBanner from '../Header/OfferBanner';
import Overview from '../Conditions/Overview';
import LatestVideos from '../Main/LatestVideos';
import Doctors from '../Main/Doctors';
import Hospitals from '../Main/Hospitals';
import PatientsStories from '../Main/PatientsStories';
import HowTo from '../Conditions/HowTo';
import Faq from '../Main/Faq';
import LatestArticles from '../Main/LatestArticles';

export default function Surgery() {
    return (
        <section>
            <OfferBanner />
            <SurgeryHero />
            <Overview />
            <SurgeryTypes />
            <PreparationGuide />
            <LatestVideos />
            <Doctors />
            <Hospitals />
            <PatientsStories />
            <RecoveryTimeline />
            <HowTo />
            <Faq />
            <SurgeryRisks />
            <LatestArticles />
        </section>
    );
}

function SurgeryHero() {
    return (
        <div className="relative top-16 bg-gradient-to-b from-blue-50 to-white py-12">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mb-8">
                    <h1 className="mb-4 text-4xl font-bold text-slate-900">Surgical Procedures & Treatments</h1>
                    <p className="mb-6 text-lg text-gray-700">Comprehensive surgical care with advanced techniques and experienced specialists</p>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
                        <h3 className="mb-2 text-lg font-semibold text-slate-900">Advanced Techniques</h3>
                        <p className="text-sm text-gray-700">Minimally invasive and modern surgical procedures</p>
                    </div>
                    <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
                        <h3 className="mb-2 text-lg font-semibold text-slate-900">Expert Surgeons</h3>
                        <p className="text-sm text-gray-700">Highly qualified and experienced specialists</p>
                    </div>
                    <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
                        <h3 className="mb-2 text-lg font-semibold text-slate-900">Complete Care</h3>
                        <p className="text-sm text-gray-700">Pre-operative to post-operative support</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SurgeryTypes() {
    const types = [
        { id: 1, name: "General Surgery", desc: "Abdominal and common procedures", duration: "1-3 hrs", recovery: "5-7 days" },
        { id: 2, name: "Orthopedic Surgery", desc: "Bone and joint repairs", duration: "1-4 hrs", recovery: "4-12 weeks" },
        { id: 3, name: "Cardiac Surgery", desc: "Heart procedures", duration: "2-6 hrs", recovery: "6-8 weeks" },
        { id: 4, name: "Laparoscopic Surgery", desc: "Minimally invasive", duration: "30m-2 hrs", recovery: "2-5 days" },
        { id: 5, name: "Neurological Surgery", desc: "Brain and spine procedures", duration: "2-8 hrs", recovery: "8-12 weeks" },
        { id: 6, name: "Cosmetic Surgery", desc: "Aesthetic procedures", duration: "1-4 hrs", recovery: "3-10 days" },
    ];

    return (
        <div className="bg-white py-12">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="mb-8 text-3xl font-bold text-slate-900">Types of Surgical Procedures</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {types.map((t) => (
                        <div key={t.id} className="rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                            <h3 className="mb-2 text-lg font-semibold text-slate-900">{t.name}</h3>
                            <p className="mb-4 text-sm text-gray-700">{t.desc}</p>
                            <div className="space-y-2 border-t pt-4 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Duration:</span>
                                    <span className="font-medium">{t.duration}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Recovery:</span>
                                    <span className="font-medium">{t.recovery}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function PreparationGuide() {
    return (
        <div className="bg-gray-50 py-12">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="mb-8 text-3xl font-bold text-slate-900">Pre & Post-Operative Care</h2>
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                        <h3 className="mb-4 text-lg font-semibold text-slate-900">Before Surgery</h3>
                        <ul className="space-y-3">
                            <li className="flex gap-3">
                                <span className="h-2 w-2 rounded-full bg-teal-600 flex-shrink-0 mt-1"></span>
                                <span className="text-sm text-gray-700">Complete medical evaluation</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="h-2 w-2 rounded-full bg-teal-600 flex-shrink-0 mt-1"></span>
                                <span className="text-sm text-gray-700">Blood tests and imaging</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="h-2 w-2 rounded-full bg-teal-600 flex-shrink-0 mt-1"></span>
                                <span className="text-sm text-gray-700">Stop certain medications</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="h-2 w-2 rounded-full bg-teal-600 flex-shrink-0 mt-1"></span>
                                <span className="text-sm text-gray-700">NPO from midnight</span>
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                        <h3 className="mb-4 text-lg font-semibold text-slate-900">During Surgery</h3>
                        <ul className="space-y-3">
                            <li className="flex gap-3">
                                <span className="h-2 w-2 rounded-full bg-teal-600 flex-shrink-0 mt-1"></span>
                                <span className="text-sm text-gray-700">Anesthesia monitoring</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="h-2 w-2 rounded-full bg-teal-600 flex-shrink-0 mt-1"></span>
                                <span className="text-sm text-gray-700">Experienced surgical team</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="h-2 w-2 rounded-full bg-teal-600 flex-shrink-0 mt-1"></span>
                                <span className="text-sm text-gray-700">Strict sterilization protocols</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="h-2 w-2 rounded-full bg-teal-600 flex-shrink-0 mt-1"></span>
                                <span className="text-sm text-gray-700">Real-time safety monitoring</span>
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                        <h3 className="mb-4 text-lg font-semibold text-slate-900">After Surgery</h3>
                        <ul className="space-y-3">
                            <li className="flex gap-3">
                                <span className="h-2 w-2 rounded-full bg-teal-600 flex-shrink-0 mt-1"></span>
                                <span className="text-sm text-gray-700">Pain management</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="h-2 w-2 rounded-full bg-teal-600 flex-shrink-0 mt-1"></span>
                                <span className="text-sm text-gray-700">Wound care and monitoring</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="h-2 w-2 rounded-full bg-teal-600 flex-shrink-0 mt-1"></span>
                                <span className="text-sm text-gray-700">Physiotherapy sessions</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="h-2 w-2 rounded-full bg-teal-600 flex-shrink-0 mt-1"></span>
                                <span className="text-sm text-gray-700">Follow-up appointments</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

function RecoveryTimeline() {
    const timeline = [
        { week: "Week 1", desc: "Rest and pain management. Limited activity." },
        { week: "Week 2-3", desc: "Gradual increase in activity. Gentle exercises." },
        { week: "Week 4-6", desc: "Increased mobility. Regular physiotherapy." },
        { week: "Week 8+", desc: "Return to normal activities and work." },
    ];

    return (
        <div className="bg-white py-12">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="mb-8 text-3xl font-bold text-slate-900">Recovery Timeline</h2>
                <div className="space-y-4">
                    {timeline.map((phase, idx) => (
                        <div key={idx} className="flex gap-4 rounded-lg border border-gray-200 p-4 hover:shadow-md transition">
                            <div className="h-12 w-12 flex-shrink-0 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center">
                                {idx + 1}
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900">{phase.week}</h3>
                                <p className="text-sm text-gray-700">{phase.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function SurgeryRisks() {
    const risks = [
        {
            category: "Common Risks",
            items: ["Pain and discomfort", "Swelling and bruising", "Temporary loss of sensation", "Mild infection risk"],
        },
        {
            category: "Serious Risks",
            items: ["Severe bleeding", "Allergic reactions", "Organ damage", "Anesthesia complications"],
        },
        {
            category: "Long-term Risks",
            items: ["Scar formation", "Chronic pain", "Loss of function", "Psychological effects"],
        },
    ];

    return (
        <div className="bg-gray-50 py-12">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="mb-8 text-3xl font-bold text-slate-900">Risks & Complications</h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {risks.map((risk, idx) => (
                        <div key={idx} className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                            <h3 className="mb-4 text-lg font-semibold text-slate-900">{risk.category}</h3>
                            <ul className="space-y-2">
                                {risk.items.map((item, itemIdx) => (
                                    <li key={itemIdx} className="flex items-center gap-2 text-sm text-gray-700">
                                        <span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-8 rounded-lg bg-blue-50 border border-blue-200 p-6">
                    <h3 className="mb-2 text-lg font-semibold text-slate-900">Risk Mitigation</h3>
                    <p className="text-sm text-gray-700">
                        Our surgical team employs advanced techniques, strict sterilization protocols, and comprehensive monitoring to minimize risks. All procedures are performed in accredited hospitals with full ICU support and experienced anesthesiologists.
                    </p>
                </div>
            </div>
        </div>
    );
}
