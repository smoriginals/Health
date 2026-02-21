import React from 'react';
import Herobar from '../Header/Herobar';
import Quotes from '../Main/Quotes';
import Specialties from '../Main/Specialties';
import Solutions from '../Main/Solutions';
import Hospitals from '../Main/Hospitals';
import HealthGPT from '../Main/HealthGPT';
import Doctors from '../Main/Doctors';
import GotoCommunity from '../Main/GotoCommunity';
import HealthQuestions from '../Main/HealthQuestions';
import Help from '../Main/Help';
import Reviews from '../Main/Reviews';
import PatientsStories from '../Main/PatientsStories';
import HexaNews from '../Main/HexaNews';
import LatestArticles from '../Main/LatestArticles';
import LatestVideos from '../Main/LatestVideos';
import Booking from '../Main/Booking';
import Locations from '../Main/Locations';
import Faq from '../Main/Faq';
import Chatbot from '../Main/Chatbot';


export default function Home() {
    return (
        <>
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
            <Chatbot />
        </>
    )
}