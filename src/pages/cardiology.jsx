import React from "react"

import OfferBanner from "../components/Header/OfferBanner"
import Treatments from "../components/Cardiology/Treatments"
import CardioService from "../components/Cardiology/CardioService"
import Doctors from "../components/Main/Doctors"
import Hospitals from "../components/Main/Hospitals"
import Booking from "../components/Main/Booking"
import WhyUs from "../components/Cardiology/WhyUs"
import GetTheApp from "../components/Main/GetTheApp"
import PatientsStories from "../components/Main/PatientsStories"  
import Faq from "../components/Main/Faq"
import Departments from "../components/Cardiology/Departments"

export default function CardiologyHero() {
    return (
        <section className="w-full bg-white">

            <OfferBanner />
            <CardioService />
            <Treatments />
            <Doctors />
            <Hospitals />
            <Booking />     
            <WhyUs />
            <PatientsStories />
            <GetTheApp />
            <Faq />
            <Departments />
        </section>
    )
}