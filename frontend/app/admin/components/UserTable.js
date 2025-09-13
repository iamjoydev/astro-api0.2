'use client';
import { useEffect, useState } from "react";

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const adminKey = typeof window !== "undefined" ? localStorage.getItem("adminKey") : null;

  const fetchUsers = () => {
    fetch("http://localhost:4000/api/admin/users", { headers: { "x-api-key": adminKey } })
      .then(res => res.json())
      .then(data => setUsers(data));
  };

  useEffect(() => {
    if (adminKey) fetchUsers();
  }, [adminKey]);

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 mt-6">
      <h2 className="text-lg font-semibold mb-4">API Users</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="border-b p-2">ID</th>
            <th className="border-b p-2">Key</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={i}>
              <td className="border-b p-2">{u.id}</td>
              <td className="border-b p-2">{u.key}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}