import React from 'react';
import { Users, Calendar, Stethoscope, TrendingUp, Activity, DollarSign } from 'lucide-react';
import DashboardCard from '../components/DashboardCard';
import ChartCard from '../components/ChartCard';

export default function Dashboard() {
    const stats = [
        {
            title: 'Total Patients',
            value: '1,247',
            change: '+12%',
            icon: Users,
            color: 'blue',
            bgColor: 'bg-blue-50 dark:bg-blue-900/20'
        },
        {
            title: 'Total Appointments',
            value: '385',
            change: '+8%',
            icon: Calendar,
            color: 'green',
            bgColor: 'bg-green-50 dark:bg-green-900/20'
        },
        {
            title: 'Total Doctors',
            value: '42',
            change: '+3%',
            icon: Stethoscope,
            color: 'purple',
            bgColor: 'bg-purple-50 dark:bg-purple-900/20'
        },
        {
            title: 'Revenue',
            value: '?45,230',
            change: '+15%',
            icon: DollarSign,
            color: 'orange',
            bgColor: 'bg-orange-50 dark:bg-orange-900/20'
        },
    ];

    const appointmentData = [
        { day: 'Mon', appointments: 65 },
        { day: 'Tue', appointments: 78 },
        { day: 'Wed', appointments: 72 },
        { day: 'Thu', appointments: 85 },
        { day: 'Fri', appointments: 92 },
        { day: 'Sat', appointments: 54 },
        { day: 'Sun', appointments: 40 },
    ];

    const revenueData = [
        { week: 'Week 1', revenue: 8000 },
        { week: 'Week 2', revenue: 9200 },
        { week: 'Week 3', revenue: 8800 },
        { week: 'Week 4', revenue: 11500 },
    ];

    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Welcome to HexaHealth Admin Panel</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <DashboardCard key={idx} stat={stat} />
                ))}
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ChartCard
                    title="Weekly Appointments"
                    data={appointmentData}
                    metric="appointments"
                />
                <ChartCard
                    title="Weekly Revenue"
                    data={revenueData}
                    metric="revenue"
                />
            </div>

            {/* Recent Activity */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
                <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="flex items-center gap-4 pb-4 border-b border-gray-200 dark:border-slate-700 last:border-0">
                            <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                                <Activity size={20} className="text-blue-600" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-900 dark:text-white">New appointment booked</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Dr. Smith - 2 hours ago</p>
                            </div>
                            <span className="text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">New</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
