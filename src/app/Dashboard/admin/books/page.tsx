'use client';

import { useEffect, useState } from 'react';
import { fetchBooks } from '@/lib/api'; // adjust path if needed

const BooksPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks().then(setBooks);
  }, []);

  return (
    <div>
      <h1>Books</h1>
      {books.map((book: any) => (
        <div key={book.id}>{book.title}</div>
      ))}
    </div>
  );
};

export default BooksPage;
