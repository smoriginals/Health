import React, { useState } from 'react';
import { Search, Plus, Edit2, Trash2 } from 'lucide-react';

export default function TreatmentsManagement() {
    const [searchTerm, setSearchTerm] = useState('');
    const [treatments, setTreatments] = useState([
        {
            id: 1,
            name: 'Coronary Angioplasty',
            slug: 'coronary-angioplasty',
            department: 'Cardiology',
            description: 'Minimally invasive procedure to treat heart blockage',
            status: 'active'
        },
        {
            id: 2,
            name: 'Knee Replacement',
            slug: 'knee-replacement',
            department: 'Orthopedics',
            description: 'Surgical replacement of damaged knee joint',
            status: 'active'
        },
        {
            id: 3,
            name: 'Laser Piles Surgery',
            slug: 'laser-piles-surgery',
            department: 'Proctology',
            description: 'Minimally invasive laser treatment for hemorrhoids',
            status: 'active'
        },
        {
            id: 4,
            name: 'Cataract Surgery',
            slug: 'cataract-surgery',
            department: 'Ophthalmology',
            description: 'Surgical removal and replacement of clouded lens',
            status: 'inactive'
        },
    ]);

    const [showForm, setShowForm] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({ name: '', slug: '', department: '', description: '', status: 'active' });

    const filteredTreatments = treatments.filter(treatment =>
        treatment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        treatment.department.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const departments = ['Cardiology', 'Orthopedics', 'Proctology', 'Ophthalmology', 'Neurology', 'ENT'];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingId) {
            setTreatments(treatments.map(t => t.id === editingId ? { ...formData, id: editingId } : t));
            setEditingId(null);
        } else {
            setTreatments([...treatments, { ...formData, id: Date.now() }]);
        }
        setFormData({ name: '', slug: '', department: '', description: '', status: 'active' });
        setShowForm(false);
    };

    const handleEdit = (treatment) => {
        setFormData(treatment);
        setEditingId(treatment.id);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        setTreatments(treatments.filter(t => t.id !== id));
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Treatments & Departments</h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">Manage medical treatments and departments</p>
                </div>
                <button
                    onClick={() => {
                        setShowForm(!showForm);
                        setFormData({ name: '', slug: '', department: '', description: '', status: 'active' });
                        setEditingId(null);
                    }}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                >
                    <Plus size={20} />
                    Add Treatment
                </button>
            </div>

            {/* Add/Edit Form */}
            {showForm && (
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        {editingId ? 'Edit Treatment' : 'Add New Treatment'}
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Treatment Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Slug (e.g., laser-piles-surgery)"
                                value={formData.slug}
                                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                className="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <select
                                value={formData.department}
                                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                                className="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                            >
                                <option value="">Select Department</option>
                                {departments.map(dept => (
                                    <option key={dept} value={dept}>{dept}</option>
                                ))}
                            </select>
                            <select
                                value={formData.status}
                                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                className="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                            >
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                        <textarea
                            placeholder="Description"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                            rows="3"
                        />
                        <div className="flex gap-4">
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
                            >
                                {editingId ? 'Update' : 'Add'} Treatment
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    setShowForm(false);
                                    setEditingId(null);
                                }}
                                className="bg-gray-300 dark:bg-slate-600 hover:bg-gray-400 dark:hover:bg-slate-500 text-gray-900 dark:text-white px-6 py-2 rounded-lg transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Search */}
            <div>
                <div className="relative">
                    <Search size={20} className="absolute left-3 top-2.5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search by name or department..."
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
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Treatment Name</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Department</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Description</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Status</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTreatments.map((treatment, idx) => (
                            <tr key={treatment.id} className={`border-b border-gray-200 dark:border-slate-700 ${idx % 2 === 0 ? 'bg-gray-50 dark:bg-slate-800' : 'bg-white dark:bg-slate-750'}`}>
                                <td className="px-6 py-4">
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">{treatment.name}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{treatment.slug}</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{treatment.department}</td>
                                <td className="px-6 py-4 text-gray-700 dark:text-gray-300 max-w-xs truncate">{treatment.description}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                        treatment.status === 'active'
                                            ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                                            : 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                                    }`}>
                                        {treatment.status.charAt(0).toUpperCase() + treatment.status.slice(1)}
                                    </span>
                                </td>
                                <td className="px-6 py-4 flex gap-3">
                                    <button
                                        onClick={() => handleEdit(treatment)}
                                        className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded transition" title="Edit"
                                    >
                                        <Edit2 size={16} className="text-blue-600" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(treatment.id)}
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
