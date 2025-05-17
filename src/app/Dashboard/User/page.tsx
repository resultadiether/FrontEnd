'use client';
import React from 'react';
import Image from 'next/image';

const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    status: 'Available',
    image: '/book1.jpg',
  },
  {
    title: '1984',
    author: 'George Orwell',
    status: 'Borrowed',
    image: '/book2.jpg',
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    status: 'Available',
    image: '/bok3.jpg',
  },
  // Add more mock books
  ...Array.from({ length: 12 }, (_, i) => ({
    title: `Sample Book ${i + 1}`,
    author: `Author ${i + 1}`,
    status: i % 2 === 0 ? 'Available' : 'Borrowed',
    image: '/books/sample.jpg',
  })),
];

export default function UserDashboard() {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/USER.BG.webp')",
      }}
    >
      <div className="backdrop-blur-sm bg-black/40 min-h-screen">
        <div className="container mx-auto px-4 py-12 pt-24">
          <header className="mb-10">
            <h1 className="text-4xl font-extrabold text-white drop-shadow-lg mb-2 tracking-tight">
              📚 Browse Books
            </h1>
            <p className="text-white text-lg leading-relaxed max-w-xl drop-shadow-md">
              Welcome! Borrow or return books from our digital library. Explore a wide variety of titles and manage your loans easily.
            </p>
          </header>

          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
              >
                <div className="relative w-full aspect-[2/3]">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-semibold text-lg text-gray-800">{book.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">by {book.author}</p>
                  <p
                    className={`text-xs font-medium inline-block px-2 py-1 rounded-full w-max ${
                      book.status === 'Available'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {book.status}
                  </p>
                  <div className="mt-4 flex gap-2">
                    {book.status === 'Available' ? (
                      <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                        Borrow
                      </button>
                    ) : (
                      <button
                        className="px-3 py-1 bg-gray-400 text-white text-sm rounded cursor-not-allowed"
                        disabled
                      >
                        Borrowed
                      </button>
                    )}
                    <button className="px-3 py-1 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600">
                      Return
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
