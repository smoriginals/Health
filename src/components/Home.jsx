import React from 'react'
import Navbar from '../components/Navbar';
import Herobar from '../components/Herobar';
import MobileFooter from '../components/MobileFooter';
import Quotes from '../pages/Quotes';
import Specialties from '../pages/Specialties';
import Solutions from '../pages/Solutions';
import Hospitals from '../pages/Hospitals';
import HealthGPT from '../pages/HealthGPT';
import Doctors from '../pages/Doctors';
import GotoCommunity from '../pages/GotoCommunity';
import HealthQuestions from '../pages/HealthQuestions';
import Help from '../pages/Help';
import Reviews from '../pages/Reviews';
import PatientsStories from '../pages/PatientsStories';
import HexaNews from '../pages/HexaNews';
import LatestArticles from '../pages/LatestArticles';
import LatestVideos from '../pages/LatestVideos';
import Booking from '../pages/Booking';
import Locations from '../pages/Locations';
import Faq from '../pages/Faq';
import Footer from '../pages/Footer';
import Chatbot from '../pages/Chatbot';


export default function Home() {
    return (
        <>
            <Navbar />
            <Herobar />
            <Quotes />
            <Specialties />
            <Solutions />
            <Hospitals />
            <HealthGPT />
            <Doctors />
            <GotoCommunity />
            <HealthQuestions />
            <Help />
            <Reviews />
            <PatientsStories />
            <HexaNews />
            <LatestArticles />
            <LatestVideos />
            <Booking />
            <Locations />
            <Faq />
            <Help />
            <Footer />
            <MobileFooter />
            <Chatbot />
        </>
    );
}