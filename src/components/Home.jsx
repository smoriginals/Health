import React from 'react'
import Navbar from '../components/Navbar';
import Herobar from '../components/Herobar';
import MobileFooter from '../components/MobileFooter';
import Quotes from '../components/Quotes';
import Specialties from '../components/Specialties';
import Solutions from '../components/Solutions';
import Hospitals from '../components/Hospitals';
import HealthGPT from '../components/HealthGPT';
import Doctors from '../components/Doctors';
import GotoCommunity from '../components/GotoCommunity';
import HealthQuestions from '../components/HealthQuestions';
import Help from '../components/Help';
import Reviews from '../components/Reviews';
import PatientsStories from '../components/PatientsStories';
import HexaNews from '../components/HexaNews';
import LatestArticles from '../components/LatestArticles';
import LatestVideos from '../components/LatestVideos';
import Booking from '../components/Booking';
import Locations from '../components/Locations';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';


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