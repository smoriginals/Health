import React from 'react';
import community from "../assets/community.webp";
export default function GotoCommunity() {
    return (
        <>
            <section className="bg-white px-4 py-20">
                <div className="mx-auto flex max-w-7xl flex-col items-center text-center md:flex-row md:items-start md:text-left">
                    {/* Left Side: Text */}
                    <div className="mb-10 w-full md:mb-0 md:w-1/2 md:pr-12">
                        <h2 className="mb-4 text-2xl font-bold text-blue-900 md:text-3xl">
                            Hexa Community: Ask Health Questions, Get Expert Answers
                        </h2>
                        <p className="mb-8 text-gray-600">
                            Connect with healthcare experts and fellow patients, explore related topics, and get trusted guidance to make confident, informed health decisions.
                        </p>
                        <a
                            href="#"
                            className="inline-block rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
                        >
                            Go to Community
                        </a>
                    </div>
                    {/* Right Side: Image */}
                    <div className="flex w-full justify-center md:w-1/2">
                        <img
                            src={community}
                            alt="Community"
                            className="h-80 w-full max-w-xs rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}