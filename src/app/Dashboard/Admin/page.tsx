'use client';
import React from 'react';
import Link from 'next/link';

// Dashboard navigation
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

// Recent transactions
const recentTransactions = [
  { member: 'Alice Johnson', book: 'React for Beginners', type: 'Issued', date: '2024-06-01' },
  { member: 'Bob Smith', book: 'TypeScript Handbook', type: 'Returned', date: '2024-06-02' },
  { member: 'Carol Lee', book: 'Next.js in Action', type: 'Issued', date: '2024-06-03' },
];

export default function AdminDashboard() {
  return (
    <main
      className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/admin-bg.jpg')", // replace or remove if no image
        backgroundSize: 'cover',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">📚 Admin Dashboard</h1>
          <nav>
            <ul className="flex flex-wrap gap-4 text-blue-700 font-medium">
              {dashboardNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-900 hover:underline transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/* Stats Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Recent Transactions Table */}
        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Recent Transactions
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border-separate border-spacing-y-2">
              <thead>
                <tr className="text-gray-600">
                  <th className="px-4 py-2">Member</th>
                  <th className="px-4 py-2">Book</th>
                  <th className="px-4 py-2">Type</th>
                  <th className="px-4 py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((tx, idx) => (
                  <tr
                    key={idx}
                    className="bg-gray-50 hover:bg-gray-100 rounded transition"
                  >
                    <td className="px-4 py-3 rounded-l">{tx.member}</td>
                    <td className="px-4 py-3">{tx.book}</td>
                    <td
                      className={`px-4 py-3 font-medium ${
                        tx.type === 'Issued' ? 'text-green-600' : 'text-blue-600'
                      }`}
                    >
                      {tx.type}
                    </td>
                    <td className="px-4 py-3 text-gray-500 rounded-r">{tx.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
