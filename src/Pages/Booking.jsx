import React, { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    city: '',
    treatment: '',
    query: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      text: "Get Free Consultations for 300+ Medical Conditions Across India"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      text: "Online and In-Person Consultations with Expert Specialists"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
      text: "Comprehensive Assistance Throughout Your Treatment Journey"
    }
  ];

  const cities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 
    'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Gurgaon', 'Noida'
  ];

  const treatments = [
    'Cardiology', 'Orthopedics', 'Neurology', 'Gastroenterology',
    'Oncology', 'Urology', 'General Surgery', 'Plastic Surgery',
    'Ophthalmology', 'Dermatology', 'ENT', 'Gynecology'
  ];

  return (
    <div className="w-full bg-gradient-to-br from-cyan-50 to-blue-50 py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-teal-900 mb-6 leading-tight">
                Find the right doctor and right hospital
              </h2>
              <p className="text-lg text-teal-800 leading-relaxed">
                HexaHealth is a patient-first platform that supports you through your entire treatment journey — from finding the right doctor and right hospital, using an advanced AI powered recommendation engine, to hassle-free hospital admissions, insurance, financing and post-treatment recovery.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center text-teal-600 shadow-sm">
                    {feature.icon}
                  </div>
                  <p className="text-teal-800 text-base font-medium pt-3">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-teal-900 mb-6">
                Book Appointment
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name*"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-gray-700 placeholder-gray-400"
                  />
                </div>

                {/* Mobile Input */}
                <div className="relative">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 font-medium border-r border-gray-300 pr-3">
                    +91
                  </div>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Enter your mobile number*"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    pattern="[0-9]{10}"
                    className="w-full pl-20 pr-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-gray-700 placeholder-gray-400"
                  />
                </div>

                {/* City Dropdown */}
                <div className="relative">
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-gray-700 appearance-none cursor-pointer bg-white"
                  >
                    <option value="" disabled>Select City</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Treatment Dropdown */}
                <div className="relative">
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-gray-700 appearance-none cursor-pointer bg-white"
                  >
                    <option value="" disabled>Select Treatment</option>
                    {treatments.map((treatment) => (
                      <option key={treatment} value={treatment}>{treatment}</option>
                    ))}
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Query Textarea */}
                <div>
                  <textarea
                    name="query"
                    placeholder="Enter your query..."
                    value={formData.query}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-gray-700 placeholder-gray-400 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  Submit
                  <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>

                {/* Terms and Conditions */}
                <p className="text-xs text-gray-600 text-center">
                  *By proceeding, you agree to our{' '}
                  <a href="#" className="text-teal-600 hover:underline font-medium">
                    terms and conditions
                  </a>
                </p>
              </form>
            </div>

            {/* Floating Robot Icon */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-200 to-blue-300 rounded-full flex items-center justify-center shadow-xl z-10">
              <div className="text-4xl animate-bounce">🤖</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-teal-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl"></div>
    </div>
  );
}
