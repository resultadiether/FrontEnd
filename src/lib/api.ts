
const apiUrl =
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_API_URL_LOCAL
    : process.env.NEXT_PUBLIC_API_URL;

export const fetchBooks = async () => {
  const res = await fetch(`${apiUrl}/books`, {
    credentials: 'include',
  });
  return res.json();
};
