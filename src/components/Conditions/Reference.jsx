import React from "react";

export default function Reference() {

    const references = [
        {
            text: "National Institute of Diabetes and Digestive and Kidney Diseases. Hemorrhoids. (2021).",
            link: "#"
        },
        {
            text: "Definition & facts of hemorrhoids. National Institute of Diabetes and Digestive and Kidney Diseases",
            link: "#"
        },
        {
            text: "Definition & facts of hemorrhoids. National Institute of Diabetes and Digestive and Kidney Diseases.",
            link: "#"
        },
        {
            text: "Lohsiriwat V. Treatment of hemorrhoids: A coloproctologist’s view. World Journal of Gastroenterology. 2015;21(31):9245.",
            link: "#"
        },
        {
            text: "Lawrence A, McLaren ER. External Hemorrhoid [Internet]. PubMed. Treasure Island (FL): StatPearls Publishing; 2020.",
            link: "#"
        },
        {
            text: "Gardner I. Benign anorectal disease: hemorrhoids, fissures, and fistulas. Annals of Gastroenterology [Internet]. 2019.",
            link: "#"
        },
        {
            text: "Lohsiriwat V. Treatment of hemorrhoids: A coloproctologist’s view. World Journal of Gastroenterology. 2015;21(31):9245.",
            link: "#"
        },
        {
            text: "Das K, Ghosh S, Das A, Ghosh A, Mondal R, Banerjee T, et al. Treatment of haemorrhoids with individualized homoeopathy: an open observational pilot study. Journal of Intercultural Ethnopharmacology. 2016;5(4):335.",
            link: "#"
        }
    ];

    const experts = [
        {
            role: "Reviewer",
            name: "Dr. Hemant Kumar Khowal",
            qualification: "MBBS, MS General Surgery, Fellowship in Minimal Access Surgery",
            experience: "14 Years Experience",
            description: "Dr Hemant Kumar Khowal is a well-known General Surgeon and a proctologist. He has 14 years of experience in general surgery and worked as an expert general surgeon in different cities in India. He has worked in many reputed hospitals...",
            image: "https://randomuser.me/api/portraits/women/45.jpg" // replace with actual path or URL
        },
        {
            role: "Author",
            name: "Sangeeta Sharma",
            qualification: "BSc. Biochemistry | MSc. Biochemistry (Oxford College Bangalore)",
            experience: "6 Years Experience",
            description: "She has extensive experience in content and regulatory writing with reputed organisations like Sun Pharmaceuticals and Innodata. Skilled in SEO and passionate about creating informative and engaging medical content...",
            image: "https://randomuser.me/api/portraits/men/32.jpg" // random placeholder
        }
    ];

    return (
        <>
            <div className="relative top-16 bg-white px-4">
                <div className="mx-auto max-w-5xl">

                    {/* Heading */}
                    <h2 className="mb-6 text-2xl font-semibold text-gray-900">References</h2>

                    {/* Intro Text */}
                    <p className="mb-6 leading-relaxed text-gray-700">
                        All the articles on HexaHealth are supported by verified medically-recognized sources such as peer-reviewed academic research papers, research institutions, and medical journals. Our medical reviewers also check references of the articles to prioritize accuracy and relevance. Refer to our detailed editorial policy for more information.
                    </p>

                    {/* References List */}
                    <ul className="list-decimal space-y-3 pl-6 leading-relaxed text-gray-700">
                        {references.map((ref, idx) => (
                            <li key={idx}>
                                <a
                                    href={ref.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    {ref.text}
                                </a>
                            </li>
                        ))}
                    </ul>

                </div>
            <div className="mx-auto max-w-5xl space-y-10 py-6">

                {/* Disclaimer */}
                <p className="text-md mb-8 italic text-gray-600">
                    Disclaimer: The information provided here is for educational and learning purposes only. It doesn't cover every medical condition and might not be relevant to your personal situation. This information isn't medical advice, isn't meant for diagnosing any condition, and shouldn't replace talking to a certified medical or healthcare professional.
                </p>

                {/* Experts */}
                {experts.map((expert, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6"
                    >
                        <img
                            src={expert.image}
                            alt={expert.name}
                            className="h-24 w-24 flex-shrink-0 rounded-full object-cover"
                        />
                        <div className="flex-1">
                            <p className="text-sm text-gray-500">{expert.role}</p>
                            <h3 className="text-lg font-semibold text-blue-700">{expert.name}</h3>
                            <p className="text-sm text-gray-700">{expert.qualification}</p>
                            <p className="text-sm text-gray-700">{expert.experience}</p>
                            <p className="mt-2 text-sm text-gray-600">
                                {expert.description}{' '}
                                <span className="cursor-pointer text-blue-600 hover:underline">
                                    View More
                                </span>
                            </p>
                        </div>
                    </div>
                ))}

                {/* Buttons */}
                <div className="mt-6 flex flex-col gap-4 md:flex-row md:gap-4">
                    <button className="w-full rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 md:w-auto">
                        Talk to Expert Now
                    </button>
                    <button className="w-full rounded-lg bg-green-600 px-5 py-2 text-white hover:bg-green-700 md:w-auto">
                        Chat on WhatsApp Now
                    </button>
                </div>

            </div>
            </div>
        </>
    );
}