// src/utils/user.js
import api from './api';

export async function fetchUser() {
  try {
    const res = await api.get('/api/user');
    return res.data;
  } catch (err) {
    throw new Error('Failed to fetch user');
  }
}
