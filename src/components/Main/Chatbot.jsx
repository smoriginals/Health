import React from 'react';
import { BotMessageSquare } from 'lucide-react';
import AskGpt from '../Main/AskGpt';
export default function Chatbot() {
    return (
        <>
            <AskGpt>
                <button
                    className="
                fixed bottom-24
                right-4 z-10 flex h-14 w-14
                animate-bounce items-center justify-center rounded-full bg-blue-500 text-white shadow-xl transition hover:bg-blue-700 active:scale-95 md:bottom-6 md:right-6"
                >
                    <BotMessageSquare size={24} />
                </button>
            </AskGpt>
        </>
    );
}