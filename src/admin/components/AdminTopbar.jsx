import React, { useState } from 'react';
import { Menu, X, LogOut, Bell, Moon, Sun, ChevronDown } from 'lucide-react';

export default function AdminTopbar({ user, onLogout, darkMode, setDarkMode, sidebarOpen, setSidebarOpen }) {
    const [profileOpen, setProfileOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 z-30 flex items-center justify-between px-4">
            {/* Left */}
            <div className="flex items-center gap-4">
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition"
                >
                    {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">HexaHealth Admin</h1>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
                {/* Dark Mode Toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition"
                    title="Toggle dark mode"
                >
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                {/* Notifications */}
                <button className="relative p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition">
                    <Bell size={20} />
                    <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        3
                    </span>
                </button>

                {/* Profile Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setProfileOpen(!profileOpen)}
                        className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition"
                    >
                        <img
                            src={user?.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin'}
                            alt={user?.name}
                            className="h-8 w-8 rounded-full"
                        />
                        <span className="hidden md:inline text-sm font-medium text-gray-900 dark:text-white">
                            {user?.name}
                        </span>
                        <ChevronDown size={16} />
                    </button>

                    {profileOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700">
                            <div className="p-3 border-b border-gray-200 dark:border-slate-700">
                                <p className="text-sm font-medium text-gray-900 dark:text-white">{user?.name}</p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">{user?.email}</p>
                            </div>
                            <button
                                onClick={onLogout}
                                className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-slate-700 transition"
                            >
                                <LogOut size={16} />
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
