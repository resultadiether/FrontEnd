'use client';
import React from 'react';


import Link from 'next/link';

// Dashboard navigation component
const dashboardNav = [
    { label: 'Overview', href: '/dashboard/admin' },
    { label: 'Books', href: '/dashboard/admin/books' },
    { label: 'Members', href: '/dashboard/admin/members' },
    { label: 'Transactions', href: '/dashboard/admin/transactions' },
];

// Dashboard stats
const stats = [
    { label: 'Total Books', value: 3200 },
    { label: 'Total Members', value: 450 },
    { label: 'Books Issued', value: 120 },
    { label: 'Books Returned', value: 110 },
];

const recentTransactions = [
    { member: 'Alice Johnson', book: 'React for Beginners', type: 'Issued', date: '2024-06-01' },
    { member: 'Bob Smith', book: 'TypeScript Handbook', type: 'Returned', date: '2024-06-02' },
    { member: 'Carol Lee', book: 'Next.js in Action', type: 'Issued', date: '2024-06-03' },
];

export default function AdminDashboard() {
    return (
        <main className="min-h-screen bg-gray-100 p-8">
            {/* Navigation Bar */}
            <nav className="mb-8">
                <ul className="flex gap-4">
                    {dashboardNav.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className="text-blue-600 hover:underline"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
            <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white rounded shadow p-6 text-center">
                        <div className="text-2xl font-semibold">{stat.value}</div>
                        <div className="text-gray-500">{stat.label}</div>
                    </div>
                ))}
            </section>
            <section className="bg-white rounded shadow p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
                <table className="w-full text-left">
                    <thead>
                        <tr>
                            <th className="py-2">Member</th>
                            <th className="py-2">Book</th>
                            <th className="py-2">Type</th>
                            <th className="py-2">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentTransactions.map((tx, idx) => (
                            <tr key={idx} className="border-t">
                                <td className="py-2">{tx.member}</td>
                                <td className="py-2">{tx.book}</td>
                                <td className="py-2">{tx.type}</td>
                                <td className="py-2">{tx.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </main>
    );
}