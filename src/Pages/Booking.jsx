import React, { useState } from 'react';

export default function Booking() {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        city: '',
        treatment: '',
        query: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    const features = [
        {
            icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            text: "Get Free Consultations for 300+ Medical Conditions Across India"
        },
        {
            icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            text: "Online and In-Person Consultations with Expert Specialists"
        },
        {
            icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
            ),
            text: "Comprehensive Assistance Throughout Your Treatment Journey"
        }
    ];

    const cities = [
        'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata',
        'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Gurgaon', 'Noida'
    ];

    const treatments = [
        'Cardiology', 'Orthopedics', 'Neurology', 'Gastroenterology',
        'Oncology', 'Urology', 'General Surgery', 'Plastic Surgery',
        'Ophthalmology', 'Dermatology', 'ENT', 'Gynecology'
    ];

    return (
        <div className="z-[-1] relative top-0 w-full overflow-hidden bg-gradient-to-br from-cyan-50 to-blue-50 px-2 py-20">
            <div className="mx-auto max-w-7xl">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left Side - Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="mb-6 text-4xl font-bold leading-tight text-teal-900 lg:text-5xl">
                                Find the right doctor and right hospital
                            </h2>
                            <p className="text-lg leading-relaxed text-teal-800">
                                HexaHealth is a patient-first platform that supports you through your entire treatment journey — from finding the right doctor and right hospital, using an advanced AI powered recommendation engine, to hassle-free hospital admissions, insurance, financing and post-treatment recovery.
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-white text-teal-600 shadow-sm">
                                        {feature.icon}
                                    </div>
                                    <p className="pt-3 text-base font-medium text-teal-800">
                                        {feature.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Booking Form */}
                    <div className="relative">
                        <div className="rounded-3xl bg-white p-8 shadow-md lg:p-10">
                            <h3 className="mb-6 text-2xl font-bold text-teal-900">
                                Book Appointment
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Name Input */}
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name*"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full rounded-xl border border-gray-300 px-5 py-4 text-gray-700 placeholder-gray-400 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    />
                                </div>

                                {/* Mobile Input */}
                                <div className="relative">
                                    <div className="-translate-y-1/2 absolute left-5 top-1/2 border-r border-gray-300 pr-3 font-medium text-gray-600">
                                        +91
                                    </div>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        placeholder="Enter your mobile number*"
                                        value={formData.mobile}
                                        onChange={handleInputChange}
                                        required
                                        pattern="[0-9]{10}"
                                        className="w-full rounded-xl border border-gray-300 py-4 pl-20 pr-5 text-gray-700 placeholder-gray-400 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    />
                                </div>

                                {/* City Dropdown */}
                                <div className="relative">
                                    <select
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full cursor-pointer appearance-none rounded-xl border border-gray-300 bg-white px-5 py-4 text-gray-700 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    >
                                        <option value="" disabled>Select City</option>
                                        {cities.map((city) => (
                                            <option key={city} value={city}>{city}</option>
                                        ))}
                                    </select>
                                    <div className="-translate-y-1/2 pointer-events-none absolute right-5 top-1/2">
                                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Treatment Dropdown */}
                                <div className="relative">
                                    <select
                                        name="treatment"
                                        value={formData.treatment}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full cursor-pointer appearance-none rounded-xl border border-gray-300 bg-white px-5 py-4 text-gray-700 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    >
                                        <option value="" disabled>Select Treatment</option>
                                        {treatments.map((treatment) => (
                                            <option key={treatment} value={treatment}>{treatment}</option>
                                        ))}
                                    </select>
                                    <div className="-translate-y-1/2 pointer-events-none absolute right-5 top-1/2">
                                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Query Textarea */}
                                <div>
                                    <textarea
                                        name="query"
                                        placeholder="Enter your query..."
                                        value={formData.query}
                                        onChange={handleInputChange}
                                        rows="4"
                                        className="w-full resize-none rounded-xl border border-gray-300 px-5 py-4 text-gray-700 placeholder-gray-400 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 py-4 font-semibold text-white transition-all duration-200 hover:bg-cyan-700 hover:shadow-lg"
                                >
                                    Submit
                                    <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-white transition-transform group-hover:scale-110">
                                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </button>

                                {/* Terms and Conditions */}
                                <p className="text-center text-xs text-gray-600">
                                    *By proceeding, you agree to our{' '}
                                    <a href="#" className="font-medium text-teal-600 hover:underline">
                                        terms and conditions
                                    </a>
                                </p>
                            </form>
                        </div>

                        {/* Floating Robot Icon */}
                        {/*<div className="absolute -bottom-6 -right-6 z-10 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-purple-200 to-blue-300 shadow-xl">*/}
                        {/*    <div className="animate-bounce text-4xl">🤖</div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-teal-200/30 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-blue-200/30 blur-3xl"></div>
        </div>
    );
}
