import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, User, Calendar, Pill, Settings } from 'lucide-react';

export default function AdminSidebar({ sidebarOpen }) {
    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
        { icon: Users, label: 'Doctors', path: '/admin/doctors' },
        { icon: User, label: 'Patients', path: '/admin/patients' },
        { icon: Calendar, label: 'Appointments', path: '/admin/appointments' },
        { icon: Pill, label: 'Treatments', path: '/admin/treatments' },
    ];

    return (
        <aside className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-gray-900 text-white transition-all duration-300 ${
            sidebarOpen ? 'w-64' : 'w-0 -ml-64'
        } md:w-64 md:ml-0 overflow-y-auto`}>
            <nav className="p-4 space-y-2">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                                isActive
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-300 hover:bg-gray-800'
                            }`
                        }
                    >
                        <item.icon size={20} />
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}
