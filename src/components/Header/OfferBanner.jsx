import React from 'react';

export default function OfferBanner() {

    return (
        <>
            <div className="relative top-16 w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-8 md:py-4 h-10 md:h-20 flex items-center">
                <div className="mx-auto max-w-7xl px-4 w-full text-center">
                    <h2 className="text-sm md:text-2xl font-bold">Special Offer: Get 20% Off on Your First Booking!</h2>
                    <p className="hidden md:block mt-2 text-lg">Use code <span className="font-mono bg-white text-blue-600 px-2 py-1 rounded">FIRST20</span> at checkout. Limited time offer.</p>
                    <p className="md:hidden text-xs">Code: <span className="font-mono bg-white text-blue-600 px-1 py-0.5 rounded text-xs">FIRST20</span></p>
                </div>
            </div>
        </>
    );
}