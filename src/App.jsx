import Navbar from './Components/Navbar';
import Herobar from './Components/Herobar';
import Quotes from './Pages/Quotes';
import Hospitals from './Pages/Hospitals';
import Solutions from './Pages/Solutions';
import HealthGPT from './Pages/HealthGPT';
import Specialties from './Pages/Specialties';
import Doctors from './Pages/Doctors';
import GotoCommunity from './Pages/GotoCommunity';
import HealthQuestions from './Pages/HealthQuestions';
import Help from './Pages/Help';
import Reviews from './Pages/Reviews';
import HexaNews from './Pages/HexaNews';
import PatientsStories from './Pages/PatientsStories';
import LatestArticles from './Pages/LatestArticles';
import LatestVideos from './Pages/LatestVideos';
import Booking from './Pages/Booking';
import Locations from './Pages/Locations';
import Faq from './Pages/Faq';
import MobileFooter from './Components/MobileFooter';
import Chatbot from './Pages/Chatbot';
import AreaPage from './Pages/AreaPage';
import Footer from './Pages/Footer';
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
