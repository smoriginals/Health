import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function AdminLogin({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Simulate authentication
        setTimeout(() => {
            if (email === 'admin@hexahealth.com' && password === 'admin123') {
                onLogin({
                    id: 1,
                    name: 'Admin User',
                    email: email,
                    role: 'administrator',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin'
                });
            } else {
                setError('Invalid email or password');
            }
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo/Header */}
                <div className="text-center mb-8">
                    <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-xl mb-4">
                        HexaHealth Admin
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
                    <p className="text-gray-600">Sign in to your admin account</p>
                </div>

                {/* Login Form */}
                <div className="bg-white rounded-lg shadow-xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="admin@hexahealth.com"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                                {error}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                        >
                            {loading ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>

                    {/* Demo Credentials */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-600 mb-3 font-semibold">Demo Credentials:</p>
                        <p className="text-sm text-gray-600 mb-1">
                            <strong>Email:</strong> admin@hexahealth.com
                        </p>
                        <p className="text-sm text-gray-600">
                            <strong>Password:</strong> admin123
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
