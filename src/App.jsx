import { Routes, Route } from 'react-router-dom';
import Home from './HexaComponents/Home';
import AreaPage from './HexaComponents/AreaPage';

export default function App() {

    return (

        <Routes>

            {/* ===== HOME PAGE ===== */}
            <Route path="/" element={<Home />}/>
             
            {/* ===== AREA PAGE ===== */}
            <Route path="/area" element={<AreaPage />} />

        </Routes>
    )
}
