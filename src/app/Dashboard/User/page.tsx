'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { myAppHook } from '@/app/Context/AppProvider';

const initialBooks = [
  // Fiction (10)
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', status: 'Available', image: '/book1.jpg', category: 'Fiction' },
  { title: '1984', author: 'George Orwell', status: 'Borrowed', image: '/book2.jpg', category: 'Fiction' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', status: 'Available', image: '/bok3.jpg', category: 'Fiction' },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', status: 'Available', image: '/book5.webp', category: 'Fiction' },
  { title: 'The Road', author: 'Cormac McCarthy', status: 'Borrowed', image: '/book14.jpg', category: 'Fiction' },
  { title: 'Lord of the Flies', author: 'William Golding', status: 'Available', image: '/Fic-6.jpg', category: 'Fiction' },
  { title: 'Beloved', author: 'Toni Morrison', status: 'Available', image: '/Fic-7.jpg', category: 'Fiction' },
  { title: 'Animal Farm', author: 'George Orwell', status: 'Borrowed', image: '/Fic-8.webp', category: 'Fiction' },
  { title: 'Of Mice and Men', author: 'John Steinbeck', status: 'Available', image: '/Fic-9.jpg', category: 'Fiction' },
  { title: 'The Bell Jar', author: 'Sylvia Plath', status: 'Available', image: '/Fic-10.jpg', category: 'Fiction' },

  // Romance (10)
  { title: 'Pride and Prejudice', author: 'Jane Austen', status: 'Available', image: '/book4.jpg', category: 'Romance' },
  { title: 'Me Before You', author: 'Jojo Moyes', status: 'Borrowed', image: '/Romance-2.jpg', category: 'Romance' },
  { title: 'The Notebook', author: 'Nicholas Sparks', status: 'Available', image: '/rom-3.jpg', category: 'Romance' },
  { title: 'Outlander', author: 'Diana Gabaldon', status: 'Available', image: '/rom-4.jpg', category: 'Romance' },
  { title: 'Twilight', author: 'Stephenie Meyer', status: 'Available', image: '/rom-5.jpg', category: 'Romance' },
  { title: 'The Time Traveler’s Wife', author: 'Audrey Niffenegger', status: 'Borrowed', image: '/rom-6.jpg', category: 'Romance' },
  { title: 'The Rosie Project', author: 'Graeme Simsion', status: 'Available', image: '/rom-7.jpg', category: 'Romance' },
  { title: 'It Ends With Us', author: 'Colleen Hoover', status: 'Borrowed', image: '/rom-8.jpg', category: 'Romance' },
  { title: 'The Hating Game', author: 'Sally Thorne', status: 'Available', image: '/rom-9.jpg', category: 'Romance' },
  { title: 'Beach Read', author: 'Emily Henry', status: 'Available', image: '/rom-10.avif', category: 'Romance' },

  // Educational (10)
  { title: 'A Brief History of Time', author: 'Stephen Hawking', status: 'Available', image: '/ed-1.jpg', category: 'Educational' },
  { title: 'Sapiens', author: 'Yuval Noah Harari', status: 'Borrowed', image: '/ed-2.jpg', category: 'Educational' },
  { title: 'The Selfish Gene', author: 'Richard Dawkins', status: 'Available', image: '/ed-3.jpg', category: 'Educational' },
  { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', status: 'Available', image: '/ed-4.webp', category: 'Educational' },
  { title: 'Educated', author: 'Tara Westover', status: 'Borrowed', image: '/ed-5.jpg', category: 'Educational' },
  { title: 'Factfulness', author: 'Hans Rosling', status: 'Available', image: '/ed-6.jpg', category: 'Educational' },
  { title: 'The Power of Habit', author: 'Charles Duhigg', status: 'Available', image: '/ed-7.webp', category: 'Educational' },
  { title: 'Outliers', author: 'Malcolm Gladwell', status: 'Available', image: '/ed-8.jpg', category: 'Educational' },
  { title: 'Atomic Habits', author: 'James Clear', status: 'Available', image: '/ed-9.webp', category: 'Educational' },
  { title: 'Grit', author: 'Angela Duckworth', status: 'Borrowed', image: '/ed-10.jpg', category: 'Educational' },

  // Sci-Fi (10)
  { title: 'Dune', author: 'Frank Herbert', status: 'Available', image: '/sci-1.jpg', category: 'Sci-Fi' },
  { title: 'Neuromancer', author: 'William Gibson', status: 'Borrowed', image: '/sci-2.jpg', category: 'Sci-Fi' },
  { title: 'The Martian', author: 'Andy Weir', status: 'Available', image: '/sci-3.jpg', category: 'Sci-Fi' },
  { title: 'Snow Crash', author: 'Neal Stephenson', status: 'Available', image: '/sci-4.avif', category: 'Sci-Fi' },
  { title: 'Ender’s Game', author: 'Orson Scott Card', status: 'Available', image: '/sci-5.jpg', category: 'Sci-Fi' },
  { title: 'Foundation', author: 'Isaac Asimov', status: 'Available', image: '/sci-6.jpg', category: 'Sci-Fi' },
  { title: 'The Left Hand of Darkness', author: 'Ursula K. Le Guin', status: 'Available', image: '/sci-7.jpg', category: 'Sci-Fi' },
  { title: 'Brave New World', author: 'Aldous Huxley', status: 'Borrowed', image: '/sci-8.jpg', category: 'Sci-Fi' },
  { title: 'Ready Player One', author: 'Ernest Cline', status: 'Available', image: '/sci-9.jpg', category: 'Sci-Fi' },
  { title: 'The Time Machine', author: 'H.G. Wells', status: 'Available', image: '/sci-10.jpg', category: 'Sci-Fi' },

  // History (10)
  { title: 'Guns, Germs, and Steel', author: 'Jared Diamond', status: 'Available', image: '/his-1.jpg', category: 'History' },
  { title: 'The History of the Ancient World', author: 'Susan Wise Bauer', status: 'Available', image: '/his-2.jpg', category: 'History' },
  { title: 'A People’s History of the United States', author: 'Howard Zinn', status: 'Available', image: '/his-3.jpg', category: 'History' },
  { title: 'The Wright Brothers', author: 'David McCullough', status: 'Borrowed', image: '/his-4.jpg', category: 'History' },
  { title: '1776', author: 'David McCullough', status: 'Available', image: '/his-5.jpg', category: 'History' },
  { title: 'Team of Rivals', author: 'Doris Kearns Goodwin', status: 'Available', image: '/his-6.jpg', category: 'History' },
  { title: 'The Rise and Fall of the Third Reich', author: 'William L. Shirer', status: 'Available', image: '/his-7.jpg', category: 'History' },
  { title: 'The Diary of a Young Girl', author: 'Anne Frank', status: 'Borrowed', image: '/his-8.jpg', category: 'History' },
  { title: 'Night', author: 'Elie Wiesel', status: 'Available', image: '/his-9.jpg', category: 'History' },
  { title: 'The Silk Roads', author: 'Peter Frankopan', status: 'Available', image: '/his-10.jpg', category: 'History' },
];

const categories = ['All', 'Fiction', 'Romance', 'Educational', 'Sci-Fi', 'History'];

export default function UserDashboard() {
  const { user } = myAppHook();
  const [books, setBooks] = useState(initialBooks);
  const [activeCategory, setActiveCategory] = useState('All');

  const handleBorrow = (index: number) => {
    const updated = [...books];
    updated[index].status = 'Borrowed';
    setBooks(updated);
  };

  const handleReturn = (index: number) => {
    const updated = [...books];
    updated[index].status = 'Available';
    setBooks(updated);
  };

  const filteredBooks = activeCategory === 'All' ? books : books.filter((book) => book.category === activeCategory);
  const borrowedCount = books.filter((book) => book.status === 'Borrowed').length;

  return (
    <main className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/USER.BG.webp')" }}>
      <div className="backdrop-blur-sm bg-black/50 min-h-screen text-white font-sans">
        <div className="max-w-6xl mx-auto px-4 py-20">
          {/* User Profile */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-full max-w-md shadow-lg text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-md">
                <Image src={'/user.logo.jpg'} alt={user?.name || 'Guest'} width={96} height={96} className="object-cover" />
              </div>
              <h2 className="text-2xl font-bold text-white"> Welcome {user?.name || 'Guest'}, Browse your favorite Books</h2>
              <p className="text-sm text-gray-300">{user?.email || 'Not logged in'}</p>
              <p className="mt-2 text-sm text-blue-300 font-medium">
                📦 Borrowed Books: <span className="font-semibold text-white">{borrowedCount}</span>
              </p>
            </div>
          </div>

          {/* Header */}
          <header className="text-center mb-6">
            <h1 className="text-4xl font-extrabold drop-shadow-lg">📚 Your Library</h1>
            <p className="text-lg text-gray-200 mt-2">Browse and manage your books by category.</p>
          </header>

          {/* Category Filters */}
          <div className="flex justify-center flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat ? 'bg-blue-600 text-white' : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Book Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredBooks.map((book, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex flex-col overflow-hidden">
                <div className="relative w-full aspect-[3/4]">
                  <Image src={book.image} alt={book.title} fill className="object-cover" />
                </div>

                <div className="p-3 flex flex-col flex-grow">
                  <h3 className="text-base font-semibold text-white truncate">{book.title}</h3>
                  <p className="text-sm text-gray-300 truncate">by {book.author}</p>

                  <span className={`mt-1 text-xs font-semibold inline-block px-2 py-0.5 rounded-full w-fit ${
                    book.status === 'Available' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {book.status}
                  </span>

                  <div className="mt-3 flex flex-col gap-1">
                    <button
                      disabled={book.status !== 'Available'}
                      onClick={() => handleBorrow(books.indexOf(book))}
                      className={`w-full px-3 py-1.5 text-sm font-semibold rounded ${
                        book.status === 'Available' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-white cursor-not-allowed'
                      }`}
                    >
                      Borrow
                    </button>
                    <button
                      disabled={book.status !== 'Borrowed'}
                      onClick={() => handleReturn(books.indexOf(book))}
                      className={`w-full px-3 py-1.5 text-sm font-semibold rounded ${
                        book.status === 'Borrowed' ? 'bg-yellow-500 text-white hover:bg-yellow-600' : 'bg-gray-300 text-white cursor-not-allowed'
                      }`}
                    >
                      Return
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}
