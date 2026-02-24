import React, { useState } from 'react';
import { Search, Plus, Edit2, Trash2, ChevronDown } from 'lucide-react';

export default function DoctorsManagement() {
    const [searchTerm, setSearchTerm] = useState('');
    const [doctors, setDoctors] = useState([
        {
            id: 1,
            name: 'Dr. Rajesh Kumar',
            specialization: 'Cardiology',
            status: 'active',
            patients: 45,
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=doctor1',
            email: 'rajesh@hexahealth.com'
        },
        {
            id: 2,
            name: 'Dr. Priya Sharma',
            specialization: 'Orthopedics',
            status: 'active',
            patients: 38,
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=doctor2',
            email: 'priya@hexahealth.com'
        },
        {
            id: 3,
            name: 'Dr. Amit Patel',
            specialization: 'General Surgery',
            status: 'inactive',
            patients: 25,
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=doctor3',
            email: 'amit@hexahealth.com'
        },
    ]);

    const [filterSpecialization, setFilterSpecialization] = useState('all');
    const [editingId, setEditingId] = useState(null);

    const filteredDoctors = doctors.filter(doc =>
        (doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
         doc.specialization.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (filterSpecialization === 'all' || doc.specialization === filterSpecialization)
    );

    const handleDelete = (id) => {
        setDoctors(doctors.filter(doc => doc.id !== id));
    };

    const specializations = [...new Set(doctors.map(d => d.specialization))];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Doctors Management</h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">Manage all doctors in the system</p>
                </div>
                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
                    <Plus size={20} />
                    Add Doctor
                </button>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                    <div className="relative">
                        <Search size={20} className="absolute left-3 top-2.5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by name or specialization..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>
                </div>
                <select
                    value={filterSpecialization}
                    onChange={(e) => setFilterSpecialization(e.target.value)}
                    className="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                >
                    <option value="all">All Specializations</option>
                    {specializations.map(spec => (
                        <option key={spec} value={spec}>{spec}</option>
                    ))}
                </select>
            </div>

            {/* Table */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-slate-700 border-b border-gray-200 dark:border-slate-600">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Doctor</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Specialization</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Patients</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Status</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredDoctors.map((doctor, idx) => (
                            <tr key={doctor.id} className={`border-b border-gray-200 dark:border-slate-700 ${idx % 2 === 0 ? 'bg-gray-50 dark:bg-slate-800' : 'bg-white dark:bg-slate-750'}`}>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={doctor.avatar}
                                            alt={doctor.name}
                                            className="h-10 w-10 rounded-full"
                                        />
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">{doctor.name}</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{doctor.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{doctor.specialization}</td>
                                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{doctor.patients}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                        doctor.status === 'active'
                                            ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                                            : 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                                    }`}>
                                        {doctor.status.charAt(0).toUpperCase() + doctor.status.slice(1)}
                                    </span>
                                </td>
                                <td className="px-6 py-4 flex gap-3">
                                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded transition" title="Edit">
                                        <Edit2 size={16} className="text-blue-600" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(doctor.id)}
                                        className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded transition" title="Delete"
                                    >
                                        <Trash2 size={16} className="text-red-600" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
