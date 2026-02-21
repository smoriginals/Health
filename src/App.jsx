import Navbar from './components/Navbar';
import Herobar from './components/Herobar';
import Quotes from './pages/Quotes';
import Hospitals from './pages/Hospitals';
import Solutions from './pages/Solutions';
import HealthGPT from './pages/HealthGPT';
import Specialties from './pages/Specialties';
import Doctors from './pages/Doctors';
import GotoCommunity from './pages/GotoCommunity';
import HealthQuestions from './pages/HealthQuestions';
import Help from './pages/Help';
import Reviews from './pages/Reviews';
import HexaNews from './pages/HexaNews';
import PatientsStories from './pages/PatientsStories';
import LatestArticles from './pages/LatestArticles';
import LatestVideos from './pages/LatestVideos';
import Booking from './pages/Booking';
import Locations from './pages/Locations';
import Faq from './pages/Faq';
import MobileFooter from './components/MobileFooter';
import Chatbot from './pages/Chatbot';
import AreaPage from './pages/AreaPage';
import Footer from './pages/Footer';
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
