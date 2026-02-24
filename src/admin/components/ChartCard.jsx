import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

export default function ChartCard({ title, data, metric }) {
    const maxValue = Math.max(...data.map(d => d[metric]));
    const scale = maxValue > 100 ? 1000 : 1;

    return (
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
            <ResponsiveContainer width="100%" height={300}>
                {metric === 'appointments' ? (
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="day" stroke="#6b7280" />
                        <YAxis stroke="#6b7280" />
                        <Tooltip />
                        <Bar dataKey={metric} fill="#3b82f6" radius={[8, 8, 0, 0]} />
                    </BarChart>
                ) : (
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="week" stroke="#6b7280" />
                        <YAxis stroke="#6b7280" />
                        <Tooltip />
                        <Line type="monotone" dataKey={metric} stroke="#10b981" strokeWidth={2} dot={{ fill: '#10b981', r: 4 }} />
                    </LineChart>
                )}
            </ResponsiveContainer>
        </div>
    );
}
