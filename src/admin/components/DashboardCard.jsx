import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function DashboardCard({ stat }) {
    const Icon = stat.icon;
    
    return (
        <div className={`${stat.bgColor} rounded-lg p-6 border border-gray-200 dark:border-slate-700`}>
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stat.value}</p>
                    <p className="text-sm text-green-600 dark:text-green-400 mt-2 font-medium">{stat.change} from last month</p>
                </div>
                <div className={`p-3 bg-${stat.color}-100 dark:bg-${stat.color}-900/20 rounded-lg`}>
                    <Icon size={24} className={`text-${stat.color}-600`} />
                </div>
            </div>
        </div>
    );
}
