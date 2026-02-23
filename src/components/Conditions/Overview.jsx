import React from "react";

export default function Overview() {
    return (
        <>
        <section className="relative top-16 py-4">
            {/* Full-width container */}
            <div className="w-full px-4">

                {/* Centered content wrapper */}
                <div className="mx-auto max-w-5xl">

                    {/* Top Tabs (Overview / Doctors / Hospitals / FAQs) */}
                    <div className="mb-8 border-b">
                        <div className="flex gap-8 text-sm font-medium text-gray-600">
                            <button className="border-b-2 border-teal-600 pb-3 text-teal-600">
                                Overview
                            </button>
                            <button className="pb-3 hover:text-teal-600">
                                Doctors
                            </button>
                            <button className="pb-3 hover:text-teal-600">
                                Hospitals
                            </button>
                            <button className="pb-3 hover:text-teal-600">
                                FAQs
                            </button>
                        </div>
                    </div>

                    {/* Reviewed Section */}
                    <div className="mb-6 flex flex-col gap-2 text-sm text-gray-700 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p>
                                <span className="font-medium text-gray-900">
                                    Medically Reviewed
                                </span>{" "}
                                by{" "}
                                <span className="font-medium text-teal-600">
                                    Dr. Hemant Kumar Khowal
                                </span>
                            </p>

                            <p>
                                Written by{" "}
                                <span className="font-medium text-teal-600">
                                    Sangeeta Sharma
                                </span>
                            </p>
                        </div>

                        {/* Badge */}
                        <div className="mt-3 w-fit rounded-lg border border-green-500 bg-green-50 px-4 py-2 text-xs font-medium text-green-700 md:mt-0">
                            HexaHealth <br />
                            <span className="font-normal text-[10px]">
                                Medically Reviewed
                            </span>
                        </div>
                    </div>

                    {/* Table of Contents Card */}
                    <div className="rounded-2xl border bg-gray-50 p-8 shadow-sm">
                        <h2 className="mb-6 text-lg font-semibold text-gray-900">
                            Table of Contents
                        </h2>

                        <ul className="space-y-3 text-sm text-teal-600">
                            <li>1 What is Piles?</li>
                            <li>2 Types of Piles Disease</li>
                            <li>3 Signs and Symptoms of Piles</li>
                            <li>4 Haemorrhoids Causes</li>
                            <li>5 How to Prevent Piles?</li>
                            <li>6 Piles Diagnosis</li>
                            <li>7 Treatment for Haemorrhoids</li>
                            <li>8 Risks and Complications of Piles</li>
                            <li>9 Diet for Piles</li>
                            <li>10 Takeaway</li>
                        </ul>
                    </div>

                    {/* Description Paragraph */}
                    <div className="text-md space-y-6 py-10 leading-relaxed text-gray-700">
                        <p>
                            <span className="font-semibold">Piles</span> or Haemorrhoids is a
                            swelling containing enlarged blood vessels and tissues found inside
                            the rectum or under the skin around the anus. Piles is also known
                            as <span className="font-semibold">Bawaseer (बवासीर)</span> in Hindi.
                            This condition is common in people within the age group of 45–65 years.
                        </p>

                        <p>
                            Depending on the location, haemorrhoids can be internal, external,
                            or prolapsed. Let's read about Piles representation by real images,
                            symptoms, causes, types, diagnosis, prevention, treatment, and more.
                        </p>
                    </div>

                    {/* Table */}
                    <div className="overflow-hidden rounded-2xl border shadow-sm">
                        <table className="w-full border-collapse text-sm">
                            <tbody className="divide-y">
                                <tr>
                                    <td className="w-1/3 bg-gray-50 px-6 py-4 font-semibold text-gray-800">
                                        Disease Name
                                    </td>
                                    <td className="px-6 py-4 text-gray-700">
                                        Piles
                                    </td>
                                </tr>

                                <tr>
                                    <td className="bg-gray-50 px-6 py-4 font-semibold text-gray-800">
                                        Alternative Name
                                    </td>
                                    <td className="px-6 py-4 text-gray-700">
                                        Haemorrhoids, Bawaseer (बवासीर)
                                    </td>
                                </tr>

                                <tr>
                                    <td className="bg-gray-50 px-6 py-4 font-semibold text-gray-800">
                                        Symptoms
                                    </td>
                                    <td className="px-6 py-4 text-gray-700">
                                        Pain, Discomfort, Swelling, Itchiness, Redness, Lump formation
                                    </td>
                                </tr>

                                <tr>
                                    <td className="bg-gray-50 px-6 py-4 font-semibold text-gray-800">
                                        Causes
                                    </td>
                                    <td className="px-6 py-4 text-gray-700">
                                        Straining while passing stools, Constipation, Pregnancy, Chronic diarrhoea
                                    </td>
                                </tr>

                                <tr>
                                    <td className="bg-gray-50 px-6 py-4 font-semibold text-gray-800">
                                        Diagnosis
                                    </td>
                                    <td className="px-6 py-4 text-gray-700">
                                        Visual inspection, Digital examination, Proctoscopy
                                    </td>
                                </tr>

                                <tr>
                                    <td className="bg-gray-50 px-6 py-4 font-semibold text-gray-800">
                                        Treated by
                                    </td>
                                    <td className="px-6 py-4 text-gray-700">
                                        General Surgeon (Proctologist)
                                    </td>
                                </tr>

                                <tr>
                                    <td className="bg-gray-50 px-6 py-4 font-semibold text-gray-800">
                                        Treatment Options
                                    </td>
                                    <td className="px-6 py-4 text-gray-700">
                                        Haemorrhoidal Artery Ligation, Sclerotherapy, Stapler surgery, Laser surgery
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* What is Piles section */}
                    <div className="text-md space-y-6 py-10 leading-relaxed text-gray-700">
                        <h1 className='text-3xl font-bold'>What is Piles</h1>
                        <p>
                            Piles, also known as Haemorrhoids, are a common medical condition that affects many people. They are essentially swollen blood vessels located in the anus or lower rectum. It can cause discomfort, pain, itching, and bleeding, especially during bowel movements.

                            While the exact cause of piles is unclear, factors such as constipation, pregnancy, obesity, and prolonged sitting or standing can contribute to their development.

                            Piles can be uncomfortable; they are not considered serious health concerns. They can often be managed effectively with simple lifestyle changes such as eating a high-fibre diet, drinking plenty of fluids, and exercising regularly.
                        </p>
                    </div>

                </div>

                {/* Full-width video section */}
                <div className="w-full bg-gray-50 py-10">
                    <div className="mx-auto max-w-5xl px-4">
                        <div className="relative w-full overflow-hidden rounded-2xl shadow-lg" style={{ paddingTop: "56.25%" }}>
                            <iframe
                                className="absolute left-0 top-0 h-full w-full"
                                src="https://www.youtube.com/embed/I3X3X3X3X3X"
                                title="Piles (Haemorrhoids) Explained"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>

            </div>
           </section>
        </>
    );
}