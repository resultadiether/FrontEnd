// src/lib/api.ts or src/utils/api.ts

export async function fetchUser() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user`, {
    method: 'GET',
    credentials: 'include', // required for Sanctum
  });

  if (!res.ok) throw new Error('Failed to fetch user');

  return await res.json();
}
