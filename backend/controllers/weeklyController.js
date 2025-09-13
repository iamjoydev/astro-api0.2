import { computePanchang } from '../engines/panchangEngine.js';
import { generateWeeklyHoroscopes } from '../engines/horoscopeEngine.js';

export async function getWeekly(req, res){
  const key = req.headers['x-api-key'];
  if(key !== process.env.ADMIN_API_KEY) return res.status(401).json({ error: 'unauthorized' });
  const lat = parseFloat(process.env.DEFAULT_LAT) || 22.5726;
  const lon = parseFloat(process.env.DEFAULT_LON) || 88.3639;
  const panchang = computePanchang(new Date(), lat, lon);
  const weekly = generateWeeklyHoroscopes(panchang);
  res.json({ meta:{service:'Joydev Sastri Ultimate API'}, weekly });
}
