'use client';
import { useState } from 'react';
export default function Page(){
  const [dob,setDob]=useState('1990-01-01'); const [time,setTime]=useState('06:30'); const [res,setRes]=useState(null);
  async function gen(){ const r=await fetch(`http://localhost:4000/api/kundli?dob=${dob}&time=${time}`, { headers:{ 'x-api-key': process.env.NEXT_PUBLIC_ADMIN_KEY || 'c5eac...' } }); const j=await r.json(); setRes(j); }
  return (<div className='p-6'><h1>Kundli Generator</h1><input value={dob} onChange={e=>setDob(e.target.value)} type='date' /><input value={time} onChange={e=>setTime(e.target.value)} type='time' /><button onClick={gen}>Generate</button><pre>{res?JSON.stringify(res,null,2):''}</pre></div>)
}
