import React from 'react';
import OfferBanner from '../Header/OfferBanner';
import Symptoms from '../Conditions/Symptoms';
import Overview from '../Conditions/Overview';
import LatestVideos from '../Main/LatestVideos';
import Doctors from '../Main/Doctors';
import Hospitals from '../Main/Hospitals';
import PatientsStories from '../Main/PatientsStories';
import DiseaseTypes from './DiseaseTypes';
import HowTo from '../Conditions/HowTo';
import Faq from '../Main/Faq';
import Reference from './Reference';
import LatestArticles from '../Main/LatestArticles';
import GetTheApp from '../Main/GetTheApp';
export default function Piles() {
    return (
        <section>
            <OfferBanner />
            <Symptoms />
            <Overview />
            <LatestVideos />
            <Doctors />
            <Hospitals />
            <PatientsStories />
            <DiseaseTypes />
            <HowTo />
            <Faq />
            <Reference />
            <LatestArticles />
            <GetTheApp />
        </section>
    );
}