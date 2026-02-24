import React, { useState } from 'react';
import { Menu, X, LogOut, Bell, Moon, Sun } from 'lucide-react';
import AdminSidebar from '../components/AdminSidebar';
import AdminTopbar from '../components/AdminTopbar';

export default function AdminLayout({ children, user, onLogout }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? 'dark' : ''}>
            <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
                {/* Top Navigation */}
                <AdminTopbar 
                    user={user} 
                    onLogout={onLogout} 
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />

                <div className="flex">
                    {/* Sidebar */}
                    <AdminSidebar sidebarOpen={sidebarOpen} />

                    {/* Main Content */}
                    <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'md:ml-64' : ''}`}>
                        <div className="p-4 md:p-8 mt-16">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
