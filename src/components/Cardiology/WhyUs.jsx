import React from 'react';

export default function WhyUs() {

    return (
        <>
            <section className="relative top-16 w-full px-6 py-6 md:px-16">
                <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 md:flex-row">

                    {/* LEFT IMAGE */}
                    <div className="flex w-full justify-center md:w-1/2">
                        <img
                            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.youngisthan.in%2Fwp-content%2Fuploads%2F2018%2F09%2Ffeatured-1-11-970x702.jpg&f=1&nofb=1&ipt=8fde5514ff8e324f8ef84411465c48015080193ad6ab380eaa7b1a2a9e79baa0'
                            alt="Doctors Team"
                            className="w-full max-w-md object-contain md:max-w-lg"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="w-full space-y-2 p-4 md:w-1/2">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                                Why Choose Our Care?
                            </h2>
                            <p className="text-md mt-3 text-gray-600">
                                We simplify your healthcare journey with complete transparency and expert support.
                            </p>
                        </div>

                        {/* FEATURES LIST */}
                        <div className="space-y-2">

                            <div className="flex items-start gap-4">
                                <span className="text-2xl">👨‍⚕️</span>
                                <p className="text-lg font-medium text-gray-800">
                                    Highly Qualified Specialists
                                </p>
                            </div>

                            <div className="flex items-start gap-4">
                                <span className="text-2xl">🏥</span>
                                <p className="text-lg font-medium text-gray-800">
                                    Trusted & Certified Hospitals
                                </p>
                            </div>

                            <div className="flex items-start gap-4">
                                <span className="text-2xl">📞</span>
                                <p className="text-lg font-medium text-gray-800">
                                    24/7 Dedicated Support Team
                                </p>
                            </div>

                            <div className="flex items-start gap-4">
                                <span className="text-2xl">📄</span>
                                <p className="text-lg font-medium text-gray-800">
                                    Fast Insurance Processing
                                </p>
                            </div>

                            <div className="flex items-start gap-4">
                                <span className="text-2xl">💳</span>
                                <p className="text-lg font-medium text-gray-800">
                                    Flexible Payment Options
                                </p>
                            </div>

                            <div className="flex items-start gap-4">
                                <span className="text-2xl">💙</span>
                                <p className="text-lg font-medium text-gray-800">
                                    Complete Post-Treatment Care
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}