import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './layout/AdminLayout';
import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/Dashboard';
import DoctorsManagement from './pages/DoctorsManagement';
import PatientsManagement from './pages/PatientsManagement';
import AppointmentsManagement from './pages/AppointmentsManagement';
import TreatmentsManagement from './pages/TreatmentsManagement';
import ProtectedRoute from './components/ProtectedRoute';

export default function Admin() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [adminUser, setAdminUser] = useState(null);

    const handleLogin = (user) => {
        setIsAuthenticated(true);
        setAdminUser(user);
        localStorage.setItem('adminAuth', JSON.stringify(user));
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setAdminUser(null);
        localStorage.removeItem('adminAuth');
    };

    // Check if user is already logged in
    React.useEffect(() => {
        const savedAuth = localStorage.getItem('adminAuth');
        if (savedAuth) {
            setAdminUser(JSON.parse(savedAuth));
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <Router>
            <Routes>
                {/* Login Route */}
                <Route 
                    path="/login" 
                    element={
                        isAuthenticated ? 
                            <Navigate to="/admin/dashboard" /> : 
                            <AdminLogin onLogin={handleLogin} />
                    } 
                />

                {/* Protected Admin Routes */}
                <Route
                    path="/*"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <AdminLayout user={adminUser} onLogout={handleLogout}>
                                <Routes>
                                    <Route path="dashboard" element={<Dashboard />} />
                                    <Route path="doctors" element={<DoctorsManagement />} />
                                    <Route path="patients" element={<PatientsManagement />} />
                                    <Route path="appointments" element={<AppointmentsManagement />} />
                                    <Route path="treatments" element={<TreatmentsManagement />} />
                                    <Route path="*" element={<Navigate to="dashboard" />} />
                                </Routes>
                            </AdminLayout>
                        </ProtectedRoute>
                    }
                />

                {/* Default redirect */}
                <Route path="/" element={<Navigate to={isAuthenticated ? "/admin/dashboard" : "/admin/login"} />} />
            </Routes>
        </Router>
    );
}