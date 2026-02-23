import React from "react";

export default function Departments() {
    const departments = [
        "Cardiology",
        "Orthopedics",
        "Neurology",
        "Gastroenterology",
        "Urology",
        "Oncology",
        "Gynecology",
        "Pediatrics",
        "Dermatology",
        "Endocrinology",
        "Nephrology",
        "Pulmonology",
        "Cardiology",
        "Orthopedics",
        "Neurology",
        "Gastroenterology",
        "Urology",
        "Oncology",
        "Gynecology",
        "Pediatrics",
        "Dermatology",
        "Endocrinology",
        "Nephrology",
        "Pulmonology",
        "Cardiology",
        "Orthopedics",
        "Neurology",
        "Gastroenterology",
        "Urology",
        "Oncology",
        "Gynecology",
        "Pediatrics",
        "Dermatology",
        "Endocrinology",
        "Nephrology",
        "Pulmonology",
    ];

    return (
        <>
            <section className="w-full px-6 py-16">
                <div className="mx-auto max-w-6xl text-center">

                    <h1 className="text-3xl font-bold text-gray-900">
                        Departments We Cover
                    </h1>

                    {/* GRID CONTAINER */}
                    <div
                        className="
            mt-10
            grid
            h-96
            grid-cols-2 gap-5
            overflow-y-auto pr-2 md:h-auto md:grid-cols-3 md:overflow-visible"
                    >
                        {departments.map((dept, index) => (
                            <div
                                key={index}
                                className="
                flex
                items-center
                justify-center rounded-xl border border-gray-100 bg-white px-4 py-4 text-center shadow-sm transition duration-300 hover:shadow-md"
                            >
                                <span className="text-sm font-medium text-gray-800 md:text-base">
                                    {dept}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
}