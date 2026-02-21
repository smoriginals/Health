import Navbar from './components/Navbar.jsx'
import Herobar from './components/Herobar.jsx'
import Quotes from './pages/Quotes.jsx'
import Hospitals from './pages/Hospitals.jsx'
import Solutions from './pages/Solutions.jsx'
import HealthGPT from './pages/HealthGPT.jsx'
import Specialties from './pages/Specialties.jsx'
import Doctors from './pages/Doctors.jsx'
import GotoCommunity from './pages/GotoCommunity.jsx'
import HealthQuestions from './pages/HealthQuestions.jsx'
import Help from './pages/Help.jsx'
import Reviews from './pages/Reviews.jsx'
import HexaNews from './pages/HexaNews.jsx'
import PatientsStories from './pages/PatientsStories.jsx'
import LatestArticles from './pages/LatestArticles.jsx'
import LatestVideos from './pages/LatestVideos.jsx'
import Booking from './pages/Booking.jsx'
import Locations from './pages/Locations.jsx'
import Faq from './pages/Faq.jsx'
import MobileFooter from './components/MobileFooter.jsx'
import Chatbot from './pages/Chatbot.jsx'
import AreaPage from './pages/AreaPage.jsx'
import Footer from './pages/Footer.jsx'

import { Routes, Route } from 'react-router-dom';


export default function App() {
    return (
        <Routes>

            {/* ===== HOME PAGE ===== */}
            <Route
                path="/"
                element={
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
                }
            />

            {/* ===== AREA PAGE ===== */}
            <Route path="/area" element={<AreaPage />} />

        </Routes>
    )
}
