import React, { useState } from 'react';

export default function PatientsStories() {
  const [expandedStory, setExpandedStory] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Sharma",
      videoTag: "SURGERY FOR PILES",
      videoSubtext: "IT WAS A SEEMLESSS PROCESS OF HEXAHEALTH 🎵",
      hasVideo: true,
      story: "I got connected with HexaHealth and they did everything on my behalf. Even when I got admitted to the hospital, they were there for me like my brother, and I did not need anybody else do things for me. It was a very seamless process which HexaHealth have done for me.",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      name: "Anupama",
      videoTag: "SURGERY FOR FISSURE",
      videoSubtext: "# HEXAHEALTH AAPKO FREEDOM DETA HAI KHUDSE DOCTOR CHOOSE KARNE KA 🎵",
      hasVideo: true,
      story: "Baaki jagah par last minute complications hote hain. Lekin, mujhe laga ki iske baad aur koi aur problem ya pain bhi kam hoga. Maine socha ye bahut achi company hai, humne HexaHealth ke saath tie-up kiya hai. Ye bahut achi baat jo mujhe lagi...",
      fullStory: "Baaki jagah par last minute complications hote hain. Lekin, mujhe laga ki iske baad aur koi aur problem ya pain bhi kam hoga. Maine socha ye bahut achi company hai, humne HexaHealth ke saath tie-up kiya hai. Ye bahut achi baat jo mujhe lagi. HexaHealth ne mujhe complete freedom di doctor choose karne ki aur hospital choose karne ki.",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      name: "Siddhant",
      videoTag: null,
      hasVideo: false,
      story: "Mujhe HexaHealth ke baare mein online pata chala. HexaHealth ne ek Plastic Surgeon, Dr. Priyanka Sharma, se connect karvaya. It was very good aur main suggest karunga agar aap log bhi Surgery kara rahe ho toh HexaHealth ke through hi karao. Main toh kaafi khush hun...",
      fullStory: "Mujhe HexaHealth ke baare mein online pata chala. HexaHealth ne ek Plastic Surgeon, Dr. Priyanka Sharma, se connect karvaya. It was very good aur main suggest karunga agar aap log bhi Surgery kara rahe ho toh HexaHealth ke through hi karao. Main toh kaafi khush hun. HexaHealth ki team ne har step pe guidance di aur process ko bahut simple bana diya.",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      name: "Madhu",
      videoTag: "SURGERY FOR HERNIA",
      videoSubtext: "# HEXAHEALTH BAHUT HELPFUL HAI 🎵",
      hasVideo: true,
      story: "Karib 2-3 saal se Hernia se pareshaan thi. Kisi relative ne mujhe HexaHealth ke baare mein bataya aur main online appointment book kari. Agar koi bhi aage kisi ko dikkat aati hai toh main unhe HexaHealth ke baare mein bataungi. HexaHealth kaafi helpful hai aur apne budget ke andar bhi hai.",
      image: "/api/placeholder/400/300"
    }
  ];

  const toggleStory = (id) => {
    setExpandedStory(expandedStory === id ? null : id);
  };

  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-teal-900 mb-4">
            Real Patients, Real Stories
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl">
            Experience how HexaHealth transformed treatment journeys with trust, and care into successful recovery stories.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${
                testimonial.hasVideo ? 'flex gap-6' : 'bg-white'
              } ${!testimonial.hasVideo ? 'rounded-2xl p-6 shadow-md border border-gray-100' : ''}`}
            >
              {/* Video Card */}
              {testimonial.hasVideo && (
                <div className="flex-shrink-0 w-72 relative group cursor-pointer">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    {/* Video Thumbnail */}
                    <div className="bg-gradient-to-br from-teal-900 to-teal-700 aspect-[9/12] relative">
                      {/* Simulated video thumbnail - replace with actual image */}
                      <div className="absolute inset-0 bg-black/20"></div>
                      
                      {/* HexaHealth Logo */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-2">
                        <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">H</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-800">HexaHealth</span>
                      </div>

                      {/* Video Tag */}
                      {testimonial.videoTag && (
                        <div className="absolute top-16 left-4 bg-orange-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold">
                          {testimonial.videoTag}
                        </div>
                      )}

                      {/* Video Subtext */}
                      {testimonial.videoSubtext && (
                        <div className="absolute bottom-20 left-4 right-4">
                          <p className="text-white text-sm font-semibold leading-tight">
                            {testimonial.videoSubtext}
                          </p>
                        </div>
                      )}

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                          <svg className="w-8 h-8 text-teal-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>

                      {/* Patient Name */}
                      <div className="absolute bottom-4 right-4 text-white font-bold text-lg">
                        {testimonial.name}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Text Content */}
              <div className={`flex-1 ${testimonial.hasVideo ? 'bg-white rounded-2xl p-6 shadow-md border border-gray-100' : ''}`}>
                <h3 className="text-2xl font-bold text-teal-900 mb-4">
                  {testimonial.name}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {expandedStory === testimonial.id && testimonial.fullStory
                    ? testimonial.fullStory
                    : testimonial.story}
                </p>
                {testimonial.fullStory && (
                  <button
                    onClick={() => toggleStory(testimonial.id)}
                    className="text-teal-600 font-semibold hover:text-teal-700 transition-colors inline-flex items-center gap-1"
                  >
                    {expandedStory === testimonial.id ? '...Read Less' : '...Read More'}
                  </button>
                )}
              </div>
            </div>
          ))}

          {/* Floating Robot Icon */}
          <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full flex items-center justify-center shadow-xl z-10 animate-bounce">
            <div className="text-4xl">🤖</div>
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:scale-105 inline-flex items-center gap-2">
            View All Success Stories
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
