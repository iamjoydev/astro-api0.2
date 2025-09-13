import useSWR from 'swr';
const fetcher = (url)=> fetch(url).then(r=>r.json());
export default function Page(){
  const { data } = useSWR('http://localhost:4000/api/daily', fetcher);
  if(!data) return <div className='p-6'>Loading...</div>;
  return (<div className='p-6'><h1 className='text-xl'>Panchang</h1><pre>{JSON.stringify(data.panchang,null,2)}</pre></div>)
}
