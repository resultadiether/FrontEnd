import { useEffect, useState } from 'react';
import axios from 'axios';
import { myAppHook } from "../../Context/AppProvider";


const AdminUsers = () => {
  const { authToken } = myAppHook();
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authToken) return;

    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/Admin/user`, {
      headers: { Authorization: `Bearer ${authToken}` },
    })
    .then(res => {
      if (res.data.status) {
        setUsers(res.data.users);
      }
    })
    .catch(err => {
      console.error('Failed to fetch users:', err);
    })
    .finally(() => {
      setLoading(false);
    });
  }, [authToken]);

  if (loading) return <p>Loading users...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users Management</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2 capitalize">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
