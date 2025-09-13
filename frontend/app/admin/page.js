'use client';
import { useEffect, useState } from "react";
import StatusCard from "./components/StatusCard";
import UserTable from "./components/UserTable";
import SettingsForm from "./components/SettingsForm";

export default function AdminDashboard() {
  const [status, setStatus] = useState(null);
  const adminKey = typeof window !== "undefined" ? localStorage.getItem("adminKey") : null;

  useEffect(() => {
    if (adminKey) {
      fetch("http://localhost:4000/api/admin/status", {
        headers: { "x-api-key": adminKey }
      })
        .then(res => res.json())
        .then(data => setStatus(data));
    }
  }, [adminKey]);

  if (!adminKey) return <p className="p-8">Unauthorized. Please login first.</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <StatusCard status={status} />
        <SettingsForm />
      </div>
      <UserTable />
    </div>
  );
}