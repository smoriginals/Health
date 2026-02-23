import React from 'react';
import { Check, Calendar, MessageCircle } from 'lucide-react';
import BookingAppointments from '../Main/BookingAppointments';



export default function Treatments() {

    const OpenWhatsapp = (e) => {
        e.preventDefault();
        const whatsappUrl = "https://wa.me/919876543210?text=Hello%20Doctor%2C%20I%20would%20like%20to%20consult%20you%20regarding%20cardiology%20services.";
        window.open(whatsappUrl, "_blank");
    }


    return (
        <>
            <div className="relative top-16 mx-auto flex max-w-7xl flex-col items-center px-6 py-4 md:flex-row md:justify-between md:py-4">

                {/* LEFT CONTENT */}
                <div className="max-w-2xl">

                    <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
                        Cardiology Department – Services and Surgeries
                    </h1>

                    <p className="mt-4 text-gray-600 md:text-lg">
                        Looking for hassle-free surgeries in Cardiology? Experience top-notch care and seamless procedures with our expert Cardiology team.
                    </p>

                    {/* FEATURES */}
                    <div className="mt-8 space-y-4">

                        {[
                            "Free consultations for 50+ conditions across India",
                            "In-person and offline consultations with experienced doctors",
                            "Personalised assistance throughout the treatment",
                            "Post-treatment care and support",
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                                    <Check size={14} className="text-green-600" />
                                </div>
                                <p className="text-gray-700">{item}</p>
                            </div>
                        ))}

                    </div>

                    {/* BUTTONS */}
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                        <BookingAppointments>
                            <button className="flex w-full items-center justify-center gap-2 rounded-full bg-[#1e7fa3] px-6 py-3 font-semibold text-white transition hover:bg-[#176c8b]">
                                <Calendar size={18} />
                                Book Appointment
                            </button>
                        </BookingAppointments>

                        <button className="flex items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700" onClick={OpenWhatsapp }>
                            <MessageCircle size={18} />
                            WhatsApp Expert
                        </button>

                    </div>

                </div>

                {/* RIGHT IMAGE */}
                <div className="mt-12 md:ml-12 md:mt-0">
                    <img
                        src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.youngisthan.in%2Fwp-content%2Fuploads%2F2018%2F09%2Ffeatured-1-11-970x702.jpg&f=1&nofb=1&ipt=8fde5514ff8e324f8ef84411465c48015080193ad6ab380eaa7b1a2a9e79baa0'
                        alt="Cardiology consultation"
                        className="w-full max-w-md object-contain"
                    />
                </div>

            </div>
        </>
    )
}
