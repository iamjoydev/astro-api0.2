import useSWR from 'swr';
const fetcher = (url)=> fetch(url).then(r=>r.json());

export default function Page(){
  const { data, error } = useSWR('http://localhost:4000/api/daily', fetcher);
  if(error) return <div className='p-6'>Failed to load</div>;
  if(!data) return <div className='p-6'>Loading...</div>;
  return (
    <main className='p-6'>
      <h1 className='text-2xl font-bold'>Joydev Sastri — Daily Horoscope</h1>
      <p className='mt-2'>Date: {data.date}</p>
      <section className='mt-4'>
        <h2 className='font-semibold'>Panchang</h2>
        <ul>
          <li>Sunrise: {data.panchang?.sunrise}</li>
          <li>Sunset: {data.panchang?.sunset}</li>
          <li>Tithi: {data.panchang?.tithi}</li>
          <li>Nakshatra: {data.panchang?.nakshatra}</li>
        </ul>
      </section>
      <section className='mt-4'>
        <h2 className='font-semibold'>Horoscope (Aries - EN)</h2>
        <p>{data.horoscope?.aries?.en?.short}</p>
        <p className='text-sm text-orange-700'>{data.horoscope?.aries?.en?.caution}</p>
      </section>
    </main>
  );
}
