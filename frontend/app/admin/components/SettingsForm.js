'use client';
import { useState } from "react";

export default function SettingsForm() {
  const [lat, setLat] = useState("22.5726");
  const [lon, setLon] = useState("88.3639");
  const [languages, setLanguages] = useState(["en", "bn", "hi"]);

  const handleSave = () => {
    alert("Settings saved (demo)");
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-lg font-semibold mb-4">Settings</h2>
      <label className="block mb-2">Latitude</label>
      <input className="border p-2 w-full mb-4" value={lat} onChange={e => setLat(e.target.value)} />
      <label className="block mb-2">Longitude</label>
      <input className="border p-2 w-full mb-4" value={lon} onChange={e => setLon(e.target.value)} />
      <label className="block mb-2">Languages</label>
      <input className="border p-2 w-full mb-4" value={languages.join(",")} onChange={e => setLanguages(e.target.value.split(","))} />
      <button onClick={handleSave} className="bg-indigo-600 text-white px-4 py-2 rounded">Save</button>
    </div>
  );
}