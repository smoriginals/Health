import React from 'react';

export default function GotoCommunity() {
    return (
        <>
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                    {/* Left Side: Text */}
                    <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                            Join Our Community
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Connect with fellow patients, share your experiences, and find support on your healthcare journey.
                        </p>
                        <a
                            href="#"
                            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
                        >
                            Join Now
                        </a>
                    </div>
                    {/* Right Side: Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                            alt="Community"
                            className="rounded-lg shadow-lg max-w-xs w-full"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}