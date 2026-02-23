import Navbar from './components/Header/Navbar';

import Footer from './components/Footer/Footer';
import MobileFooter from './components/Footer/MobileFooter';

import Home from './components/Main/Home';

import AreaPage from './components/Main/AreaPage';
//import OfferBanner from './components/Header/OfferBanner';
import { Routes, Route } from 'react-router-dom';
import Cardiology from './pages/cardiology';
import Piles from './components/Conditions/Piles';
import Investors from './components/Investors/Investors';
import Surgery from './components/Treatments/Surgery';

export default function App() {

    return (
        <>
            
            <Navbar />

            {/*<OfferBanner />*/}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/area" element={<AreaPage />} />
                <Route path="/cardiology" element={<Cardiology />} />
                <Route path="/condition/:slug" element={<Piles />} />
                <Route path="/treatment/:slug" element={<Surgery />} />
                <Route path='/investors' element={<Investors />} />
            </Routes>

            <Footer />
            <MobileFooter />
        </>
    )
}
