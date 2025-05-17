"use client";

import React from "react";
import Image from "next/image";

const books = [
  { id: 1, title: "React for Beginners", author: "John Doe", cover: "/covers/react-for-beginners.jpg" },
  { id: 2, title: "TypeScript Handbook", author: "Jane Smith", cover: "/covers/typescript-handbook.jpg" },
  { id: 3, title: "Next.js in Action", author: "Alice Johnson", cover: "/covers/nextjs-in-action.jpg" },
  { id: 4, title: "Learning JavaScript", author: "Mark Miller", cover: "/covers/learning-javascript.jpg" },
  { id: 5, title: "Advanced React Patterns", author: "Sarah Lee", cover: "/covers/advanced-react-patterns.jpg" },
  { id: 6, title: "Pro TypeScript", author: "Emily Clark", cover: "/covers/pro-typescript.jpg" },
  { id: 7, title: "Fullstack Next.js", author: "David Kim", cover: "/covers/fullstack-nextjs.jpg" },
  { id: 8, title: "JavaScript: The Good Parts", author: "Douglas Crockford", cover: "/covers/js-good-parts.jpg" },
  { id: 9, title: "React and Redux", author: "Michael Brown", cover: "/covers/react-and-redux.jpg" },
  { id: 10, title: "TypeScript in Depth", author: "Olivia Green", cover: "/covers/typescript-in-depth.jpg" },
  { id: 11, title: "Next.js Cookbook", author: "Chris White", cover: "/covers/nextjs-cookbook.jpg" },
  { id: 12, title: "JavaScript Design Patterns", author: "Anna Black", cover: "/covers/js-design-patterns.jpg" },
  { id: 13, title: "React Testing Library", author: "Paul Walker", cover: "/covers/react-testing-library.jpg" },
  { id: 14, title: "TypeScript for Professionals", author: "Sophia Turner", cover: "/covers/typescript-for-pros.jpg" },
  { id: 15, title: "Next.js for Production", author: "James Scott", cover: "/covers/nextjs-for-production.jpg" },
];

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Browse Books</h1>
      <div className="grid grid-cols-5 gap-6">
        {books.map((book) => (
          <div key={book.id} className="bg-white rounded shadow p-6 flex flex-col items-center">
            <Image
              src={book.cover}
              alt={book.title}
              width={120}
              height={180}
              className="mb-4 rounded"
            />
            <h2 className="text-xl font-semibold text-center">{book.title}</h2>
            <p className="text-gray-600 text-center mb-2">by {book.author}</p>
            <button className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Borrow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}