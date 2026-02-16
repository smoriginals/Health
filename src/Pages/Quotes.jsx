import React from 'react';
import { Quote } from 'lucide-react';

export default function Quotes() {
  return (
    <>
      <section className="w-full bg-[#e6f0f5] py-20 px-4 relative overflow-hidden min-h-[20rem] md:h-96 top-16">
        {/* Top Left Quote (responsive positioning) */}
        <Quote
          size={48}
          strokeWidth={2.5}
          aria-hidden="true"
          className="absolute left-6 md:left-[12%] top-10 text-blue-900 opacity-80"
        />

        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-lg md:text-2xl leading-relaxed text-blue-900 font-medium">
            As the First Phygital Hospital, Our Mission is to Provide You with
            Simpler, Smarter, and Personalised Healthcare, Ensuring Better
            Outcomes and Transparent Costs, Delivering Peace of Mind to You and
            Your Family, from Diagnosis to Full Recovery.
          </p>
        </div>

        {/* Bottom Right Quote (responsive positioning) */}
        <Quote
          size={48}
          strokeWidth={2.5}
          aria-hidden="true"
          className="absolute right-6 md:right-[12%] bottom-10 text-blue-900 opacity-80 rotate-180"
        />
      </section>
    </>
  );
}