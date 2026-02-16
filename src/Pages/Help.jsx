import React from 'react';

export default function Help() {
    return (
        <div className="flex justify-center items-stretch gap-8 p-8 flex-wrap">

            {/* Left Side */}
            <section className="
        flex-1 min-w-[300px] basis-[320px]
        bg-[#f5f7fa]
        rounded-2xl
        shadow-sm
        p-8
        flex flex-col items-center
      ">
                <img
                    src="https://img.icons8.com/color/96/000000/health-graph.png"
                    alt="AI Health Report"
                    className="mb-4"
                />

                <h2 className="mb-2 text-xl font-semibold">
                    AI Health Report
                </h2>

                <p className="text-center">
                    Download our app to access features on the go. Available for iOS and Android.
                </p>

                <ul className="list-none p-0 mt-4 w-full">
                    <li className="mb-2">
                        <a
                            href="https://apps.apple.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                inline-block
                bg-[#0070c9]
                text-white
                px-4 py-2
                rounded-lg
                font-bold
                no-underline
              "
                        >
                            Download on the App Store
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://play.google.com/store"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Get it on Google Play
                        </a>
                    </li>
                </ul>
            </section>

            {/* Right Side */}
            <section className="
        flex-1 min-w-[300px] basis-[320px]
        bg-[#fff7f0]
        rounded-2xl
        shadow-sm
        p-8
        flex flex-col items-center
      ">
                <img
                    src="https://img.icons8.com/color/96/000000/chatbot.png"
                    alt="Your Wellness Companion"
                    className="mb-4"
                />

                <h2 className="mb-2 text-xl font-semibold">
                    Your Wellness Companion
                </h2>

                <p className="text-center">
                    Need help? Chat with our virtual assistant for instant support.
                </p>

                <button
                    onClick={() => alert("Chatbot coming soon!")}
                    className="
            mt-4
            bg-orange-500
            text-white
            border-none
            rounded-lg
            px-6 py-3
            text-base
            font-bold
            cursor-pointer
            shadow-sm
            hover:bg-orange-600
            transition
          "
                >
                    Ask the Bot
                </button>
            </section>

        </div>
    );
}