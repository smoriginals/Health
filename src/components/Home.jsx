import React from 'react'
import Navbar from '../../src/components/Navbar';
import Herobar from '../../src/components/Herobar';
import MobileFooter from '../../src/components/MobileFooter';
import Quotes from '../../src/components/Quotes';
import Specialties from '../../src/components/Specialties';
import Solutions from '../../src/components/Solutions';
import Hospitals from '../../src/components/Hospitals';
import HealthGPT from '../../src/components/HealthGPT';
import Doctors from '../../src/components/Doctors';
import GotoCommunity from '../../src/components/GotoCommunity';
import HealthQuestions from '../../src/components/HealthQuestions';
import Help from '../../src/components/Help';
import Reviews from '../../src/components/Reviews';
import PatientsStories from '../../src/components/PatientsStories';
import HexaNews from '../../src/components/HexaNews';
import LatestArticles from '../../src/components/LatestArticles';
import LatestVideos from '../../src/components/LatestVideos';
import Booking from '../../src/components/Booking';
import Locations from '../../src/components/Locations';
import Faq from '../../src/components/Faq';
import Footer from '../../src/components/Footer';
import Chatbot from '../../src/components/Chatbot';


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