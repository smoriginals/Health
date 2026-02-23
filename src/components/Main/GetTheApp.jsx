import React from 'react';

export default function GetTheApp() {

    const OpenWhatsapp = (e) => {
        e.preventDefault();
        const whatsappUrl = "https://wa.me/919876543210?text=Hello%20Doctor%2C%20I%20would%20like%20to%20consult%20you%20regarding%20surgery%20services.";
        window.open(whatsappUrl, "_blank");
    }
    const OpenApp = (e) => {
        e.preventDefault();
        const appUrl = "https://play.google.com/store/apps/details?id=com.yourappname"; // Replace with your app's URL
        window.open(appUrl, "_blank");
    }

    return (
        <>
            <section className="relative top-16 w-full bg-gray-100 px-6 py-10 md:px-16">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 rounded-3xl bg-[#dce8ee] px-8 py-12 md:flex-row md:px-16">

                    {/* LEFT CONTENT */}
                    <div className="w-full space-y-6 text-center md:w-1/2 md:text-left">
                        <h2 className="text-3xl font-bold leading-snug text-gray-900 md:text-4xl">
                            Get a Second Opinion for Surgery
                        </h2>

                        <p className="text-lg text-gray-700">
                            By downloading our App, get consultation from our top surgeons
                            and learn more about your surgery choices.
                        </p>

                        {/* BUTTONS */}
                        <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">

                            {/* App Button */}
                            <button className="flex items-center justify-center gap-3 rounded-xl bg-teal-600 px-6 py-3 text-lg font-medium text-white shadow-md transition hover:bg-teal-700" onClick={OpenApp}>
                                Get The App
                                <span className="text-xl">📱</span>
                            </button>

                            {/* WhatsApp Button */}
                            <button className="flex items-center justify-center gap-3 rounded-xl bg-green-500 px-6 py-3 text-lg font-medium text-white shadow-md transition hover:bg-teal-700" onClick={OpenWhatsapp}>
                                Chat on WhatsApp
                                <span className="text-xl">💬</span>
                            </button>

                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex w-full justify-center md:w-1/2">
                        <img
                            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.youngisthan.in%2Fwp-content%2Fuploads%2F2018%2F09%2Ffeatured-1-11-970x702.jpg&f=1&nofb=1&ipt=8fde5514ff8e324f8ef84411465c48015080193ad6ab380eaa7b1a2a9e79baa0' 
                            alt="App Preview"
                            className="w-72 object-contain md:w-80"
                        />
                    </div>

                </div>
            </section>
        </>
    )
}