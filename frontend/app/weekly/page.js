import useSWR from 'swr';
const fetcher = (url)=> fetch(url).then(r=>r.json());
export default function Page(){
  const { data } = useSWR('http://localhost:4000/api/weekly', fetcher);
  if(!data) return <div className='p-6'>Loading...</div>;
  return (<div className='p-6'><h1 className='text-xl'>Weekly</h1><pre>{JSON.stringify(data.weekly,null,2)}</pre></div>)
}
