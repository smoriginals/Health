import React from 'react';
import { Quote } from 'lucide-react';

export default function Quotes() {
    return (
        <>
            <div className="relative top-16 h-80 w-full overflow-hidden bg-gradient-to-t from-blue-200 to-blue-100 p-6">
                {/* Top Left Quote (responsive positioning) */}
                <Quote size={40} stroke='#00507D' fill='#00507D'/>

                <div className="mx-auto max-w-4xl p-4 px-4 text-center">
                    <p className="text-lg font-medium leading-relaxed text-[#00507D] md:text-2xl">
                        As the First Phygital Hospital, Our Mission is to Provide You with
                        Simpler, Smarter, and Personalised Healthcare, Ensuring Better
                        Outcomes and Transparent Costs, Delivering Peace of Mind to You and
                        Your Family, from Diagnosis to Full Recovery.
                    </p>
                </div>
                <Quote size={40} stroke='#00507D' fill='#00507D' className='bottom-15 absolute right-5'/>
            </div>

        </>
    );
}