import React from 'react'
import Navbar from '../HexaComponents/Navbar';
import Herobar from '../HexaComponents/Herobar';
import MobileFooter from '../HexaComponents/MobileFooter';
import Quotes from '../HexaComponents/Quotes';
import Specialties from '../HexaComponents/Specialties';
import Solutions from '../HexaComponents/Solutions';
import Hospitals from '../HexaComponents/Hospitals';
import HealthGPT from '../HexaComponents/HealthGPT';
import Doctors from '../HexaComponents/Doctors';
import GotoCommunity from '../HexaComponents/GotoCommunity';
import HealthQuestions from '../HexaComponents/HealthQuestions';
import Help from '../HexaComponents/Help';
import Reviews from '../HexaComponents/Reviews';
import PatientsStories from '../HexaComponents/PatientsStories';
import HexaNews from '../HexaComponents/HexaNews';
import LatestArticles from '../HexaComponents/LatestArticles';
import LatestVideos from '../HexaComponents/LatestVideos';
import Booking from '../HexaComponents/Booking';
import Locations from '../HexaComponents/Locations';
import Faq from '../HexaComponents/Faq';
import Footer from '../HexaComponents/Footer';
import Chatbot from '../HexaComponents/Chatbot';


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