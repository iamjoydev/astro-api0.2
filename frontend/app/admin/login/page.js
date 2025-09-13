'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [apiKey, setApiKey] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (apiKey) {
      localStorage.setItem("adminKey", apiKey);
      router.push("/admin");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-600 to-indigo-700">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        <h1 className="text-xl font-bold mb-4 text-center">Admin Login</h1>
        <input
          type="password"
          placeholder="Enter API Key"
          className="w-full border p-2 rounded mb-4"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />
        <button
          className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}