import React, { useState } from 'react';
import { Search, CheckCircle, XCircle, Clock } from 'lucide-react';

export default function AppointmentsManagement() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [appointments, setAppointments] = useState([
        {
            id: 1,
            patientName: 'Rajesh Kumar',
            doctorName: 'Dr. Rajesh Kumar',
            date: '2024-01-20',
            time: '10:00 AM',
            status: 'confirmed',
            reason: 'General Checkup'
        },
        {
            id: 2,
            patientName: 'Priya Sharma',
            doctorName: 'Dr. Priya Sharma',
            date: '2024-01-21',
            time: '2:30 PM',
            status: 'pending',
            reason: 'Orthopedic Consultation'
        },
        {
            id: 3,
            patientName: 'Amit Patel',
            doctorName: 'Dr. Amit Patel',
            date: '2024-01-15',
            time: '11:00 AM',
            status: 'completed',
            reason: 'Post-Surgery Follow-up'
        },
        {
            id: 4,
            patientName: 'Neha Singh',
            doctorName: 'Dr. Rajesh Kumar',
            date: '2024-01-22',
            time: '9:30 AM',
            status: 'canceled',
            reason: 'General Checkup'
        },
    ]);

    const filteredAppointments = appointments.filter(apt =>
        (apt.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
         apt.doctorName.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (filterStatus === 'all' || apt.status === filterStatus)
    );

    const handleStatusChange = (id, newStatus) => {
        setAppointments(appointments.map(apt =>
            apt.id === id ? { ...apt, status: newStatus } : apt
        ));
    };

    const getStatusColor = (status) => {
        switch(status) {
            case 'confirmed': return 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400';
            case 'pending': return 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400';
            case 'completed': return 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400';
            case 'canceled': return 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400';
            default: return '';
        }
    };

    const getStatusIcon = (status) => {
        switch(status) {
            case 'confirmed': return <CheckCircle size={16} />;
            case 'pending': return <Clock size={16} />;
            case 'canceled': return <XCircle size={16} />;
            default: return null;
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Appointments Management</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Manage all appointments</p>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                    <div className="relative">
                        <Search size={20} className="absolute left-3 top-2.5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by patient or doctor..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>
                </div>
                <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                >
                    <option value="all">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="completed">Completed</option>
                    <option value="canceled">Canceled</option>
                </select>
            </div>

            {/* Table */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-slate-700 border-b border-gray-200 dark:border-slate-600">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Patient</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Doctor</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Date & Time</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Reason</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Status</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredAppointments.map((appointment, idx) => (
                            <tr key={appointment.id} className={`border-b border-gray-200 dark:border-slate-700 ${idx % 2 === 0 ? 'bg-gray-50 dark:bg-slate-800' : 'bg-white dark:bg-slate-750'}`}>
                                <td className="px-6 py-4 text-gray-900 dark:text-white font-medium">{appointment.patientName}</td>
                                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{appointment.doctorName}</td>
                                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{appointment.date} at {appointment.time}</td>
                                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{appointment.reason}</td>
                                <td className="px-6 py-4">
                                    <span className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold w-fit ${getStatusColor(appointment.status)}`}>
                                        {getStatusIcon(appointment.status)}
                                        {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                                    </span>
                                </td>
                                <td className="px-6 py-4 flex gap-2">
                                    {appointment.status === 'pending' && (
                                        <>
                                            <button
                                                onClick={() => handleStatusChange(appointment.id, 'confirmed')}
                                                className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded text-xs hover:bg-green-200 transition"
                                            >
                                                Confirm
                                            </button>
                                            <button
                                                onClick={() => handleStatusChange(appointment.id, 'canceled')}
                                                className="px-3 py-1 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded text-xs hover:bg-red-200 transition"
                                            >
                                                Cancel
                                            </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
