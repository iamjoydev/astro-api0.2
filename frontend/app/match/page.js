'use client';
import { useState } from 'react';
export default function Page(){
  const [dob1,setDob1]=useState('1990-01-01'), [time1,setTime1]=useState('06:30');
  const [dob2,setDob2]=useState('1992-02-02'), [time2,setTime2]=useState('07:10');
  const [res,setRes]=useState(null);
  async function gen(){ const r=await fetch(`http://localhost:4000/api/match?dob1=${dob1}&time1=${time1}&dob2=${dob2}&time2=${time2}`, { headers:{ 'x-api-key': process.env.NEXT_PUBLIC_ADMIN_KEY || 'c5eac...' } }); const j=await r.json(); setRes(j); }
  return (<div className='p-6'><h1>Match</h1><input type='date' value={dob1} onChange={e=>setDob1(e.target.value)} /> <input type='time' value={time1} onChange={e=>setTime1(e.target.value)} /> <br/> <input type='date' value={dob2} onChange={e=>setDob2(e.target.value)} /> <input type='time' value={time2} onChange={e=>setTime2(e.target.value)} /> <button onClick={gen}>Check</button><pre>{res?JSON.stringify(res,null,2):''}</pre></div>)
}
