'use client';
import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid,
} from 'recharts';

const sidebarNav = [
  { label: 'Dashboard', key: 'dashboard' },
  { label: 'Users', key: 'users' },
  { label: 'Books', key: 'books' },
  { label: 'Borrow/Return', key: 'transactions' },
];

const stats = [
  { label: 'Total Books', value: 3200 },
  { label: 'Total Members', value: 450 },
  { label: 'Books Issued', value: 120 },
  { label: 'Books Returned', value: 110 },
];

const chartData = [
  { name: 'Jan', books: 3000, issued: 100, returned: 90 },
  { name: 'Feb', books: 3100, issued: 110, returned: 95 },
  { name: 'Mar', books: 3150, issued: 120, returned: 100 },
  { name: 'Apr', books: 3200, issued: 130, returned: 110 },
];

type Book = {
  id: number;
  title: string;
  author: string;
  category: string;
};

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: 'React for Beginners', author: 'Alice Johnson', category: 'Fiction' },
    { id: 2, title: 'TypeScript Handbook', author: 'Bob Smith', category: 'Educational' },
    { id: 3, title: 'Next.js in Action', author: 'Carol Lee', category: 'Fiction' },
  ]);

  const [form, setForm] = useState<{ id?: number; title: string; author: string; category: string }>({
    title: '',
    author: '',
    category: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title.trim() || !form.author.trim() || !form.category.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    if (isEditing && form.id !== undefined) {
      setBooks((prev) =>
        prev.map((b) =>
          b.id === form.id ? { id: form.id!, title: form.title, author: form.author, category: form.category } : b
        )
      );
      setIsEditing(false);
    } else {
      const newBook: Book = {
        id: Date.now(),
        title: form.title,
        author: form.author,
        category: form.category,
      };
      setBooks((prev) => [newBook, ...prev]);
    }

    setForm({ title: '', author: '', category: '' });
  }

  function handleEdit(book: Book) {
    setForm(book);
    setIsEditing(true);
  }

  function handleDelete(id: number) {
    if (confirm('Are you sure you want to delete this book?')) {
      setBooks((prev) => prev.filter((b) => b.id !== id));
      if (isEditing && form.id === id) {
        setForm({ title: '', author: '', category: '' });
        setIsEditing(false);
      }
    }
  }

  return (
    <main className="flex min-h-[calc(100vh-64px)] w-screen pt-16 bg-gray-100">
  {/* Sidebar */}
  <nav className="flex flex-col w-64 bg-blue-900 text-white rounded-tr-3xl rounded-br-3xl shadow-lg p-8 sticky top-16 h-[calc(100vh-64px)]">
    <h2 className="text-2xl font-bold mb-8">Admin Menu</h2>
    <ul className="flex flex-col gap-5 font-semibold text-white text-lg">
      {sidebarNav.map((item) => (
        <li key={item.key}>
          <button
            onClick={() => setActiveTab(item.key)}
            className={`w-full text-left px-3 py-2 rounded-md transition ${
              activeTab === item.key
                ? 'bg-white text-blue-900 font-bold'
                : 'hover:bg-blue-700'
            }`}
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  </nav>

  {/* Main Content */}
  <div className="flex-1 container mx-auto px-6 py-12 max-w-7xl overflow-auto bg-gray-50 rounded-lg shadow-inner">
    <header className="mb-10">
      <h1 className="text-4xl font-extrabold text-gray-800 flex items-center gap-3">
        <span>📊</span> {sidebarNav.find((n) => n.key === activeTab)?.label}
      </h1>
    </header>

    {activeTab === 'dashboard' && (
      <>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
              <div className="text-4xl font-bold text-blue-700">{stat.value.toLocaleString()}</div>
              <div className="text-gray-600 mt-2 uppercase tracking-wide text-sm">{stat.label}</div>
            </div>
          ))}
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-md mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Library Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" stroke="#3b82f6" />
              <YAxis stroke="#3b82f6" />
              <Tooltip />
              <Bar dataKey="books" fill="#3b82f6" barSize={40} radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>

          <h3 className="text-xl font-semibold text-gray-700 mt-10 mb-4">Issuance Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#3b82f6" />
              <YAxis stroke="#3b82f6" />
              <Tooltip />
              <Line type="monotone" dataKey="issued" stroke="#10b981" strokeWidth={3} />
              <Line type="monotone" dataKey="returned" stroke="#6366f1" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </section>
      </>
    )}

    {/* Users Section */}
    {activeTab === 'users' && (
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-blue-800">Users Section</h2>
        <p>Display user list here...</p>
      </div>
    )}

    {activeTab === 'books' && (
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-blue-800">{isEditing ? 'Edit Book' : 'Add New Book'}</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            value={form.title}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-xl"
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={form.author}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-xl"
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-xl"
          />
          <button type="submit" className="md:col-span-3 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
            {isEditing ? 'Update Book' : 'Add Book'}
          </button>
        </form>

        <h2 className="text-xl font-bold text-gray-700 mb-4">Book List</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100 text-sm text-gray-700">
              <th className="p-2">Title</th>
              <th className="p-2">Author</th>
              <th className="p-2">Category</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id} className="border-b">
                <td className="p-2">{book.title}</td>
                <td className="p-2">{book.author}</td>
                <td className="p-2">{book.category}</td>
                <td className="p-2 space-x-2">
                  <button onClick={() => handleEdit(book)} className="text-blue-600 hover:underline">Edit</button>
                  <button onClick={() => handleDelete(book.id)} className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}

    {activeTab === 'transactions' && (
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-blue-800">Borrow / Return Section</h2>
        <p>Display transaction records here...</p>
      </div>
    )}
  </div>
</main>
  );
}
