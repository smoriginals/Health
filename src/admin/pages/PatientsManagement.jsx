import React, { useState } from 'react';
import { Search, Eye, Edit2, Trash2 } from 'lucide-react';

export default function PatientsManagement() {
    const [searchTerm, setSearchTerm] = useState('');
    const [patients, setPatients] = useState([
        {
            id: 1,
            name: 'Rajesh Kumar',
            age: 45,
            gender: 'Male',
            email: 'rajesh@email.com',
            phone: '+91 98765 43210',
            lastAppointment: '2024-01-15',
            status: 'active'
        },
        {
            id: 2,
            name: 'Priya Sharma',
            age: 32,
            gender: 'Female',
            email: 'priya@email.com',
            phone: '+91 98765 43211',
            lastAppointment: '2024-01-10',
            status: 'active'
        },
        {
            id: 3,
            name: 'Amit Patel',
            age: 56,
            gender: 'Male',
            email: 'amit@email.com',
            phone: '+91 98765 43212',
            lastAppointment: '2024-01-05',
            status: 'inactive'
        },
    ]);

    const [selectedPatient, setSelectedPatient] = useState(null);

    const filteredPatients = patients.filter(patient =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = (id) => {
        setPatients(patients.filter(p => p.id !== id));
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Patients Management</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">View and manage all patients</p>
            </div>

            {/* Search */}
            <div>
                <div className="relative">
                    <Search size={20} className="absolute left-3 top-2.5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search by name or email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-slate-700 border-b border-gray-200 dark:border-slate-600">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Name</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Age</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Gender</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Phone</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Last Appointment</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPatients.map((patient, idx) => (
                            <tr key={patient.id} className={`border-b border-gray-200 dark:border-slate-700 ${idx % 2 === 0 ? 'bg-gray-50 dark:bg-slate-800' : 'bg-white dark:bg-slate-750'}`}>
                                <td className="px-6 py-4">
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">{patient.name}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{patient.email}</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{patient.age}</td>
                                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{patient.gender}</td>
                                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{patient.phone}</td>
                                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{patient.lastAppointment}</td>
                                <td className="px-6 py-4 flex gap-2">
                                    <button
                                        onClick={() => setSelectedPatient(patient)}
                                        className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded transition" title="View"
                                    >
                                        <Eye size={16} className="text-blue-600" />
                                    </button>
                                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded transition" title="Edit">
                                        <Edit2 size={16} className="text-green-600" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(patient.id)}
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

            {/* Patient Details Modal */}
            {selectedPatient && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-8 max-w-md w-full">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{selectedPatient.name}</h2>
                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Age:</span>
                                <span className="font-medium text-gray-900 dark:text-white">{selectedPatient.age}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Gender:</span>
                                <span className="font-medium text-gray-900 dark:text-white">{selectedPatient.gender}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Email:</span>
                                <span className="font-medium text-gray-900 dark:text-white">{selectedPatient.email}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Phone:</span>
                                <span className="font-medium text-gray-900 dark:text-white">{selectedPatient.phone}</span>
                            </div>
                        </div>
                        <button
                            onClick={() => setSelectedPatient(null)}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
