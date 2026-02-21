import Navbar from './components/Header/Navbar';

import Footer from './components/Footer/Footer';
import MobileFooter from './components/Footer/MobileFooter';

import Home from './components/Main/Home';

import AreaPage from './components/Main/AreaPage';

import { Routes, Route } from 'react-router-dom';
export default function App() {

    return (
        <>

            <Navbar />
            

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/area" element={<AreaPage />} />
            </Routes>

            <Footer />
            <MobileFooter />
        </>
    )
}
