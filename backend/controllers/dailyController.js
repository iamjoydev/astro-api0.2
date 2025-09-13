import fs from 'fs';
import path from 'path';
import { computePanchang } from '../engines/panchangEngine.js';
import { generateDailyHoroscopes } from '../engines/horoscopeEngine.js';

export async function regenerateDaily(){
  const lat = parseFloat(process.env.DEFAULT_LAT) || 22.5726;
  const lon = parseFloat(process.env.DEFAULT_LON) || 88.3639;
  const panchang = computePanchang(new Date(), lat, lon);
  const horoscopes = generateDailyHoroscopes(panchang);
  const today = new Date();
  const out = {
    meta: { service: 'Joydev Sastri Ultimate API', generatedAt: today.toISOString() },
    date: today.toISOString().split('T')[0],
    location: { lat, lon },
    panchang,
    horoscope: horoscopes
  };
  const outPath = path.join(process.cwd(), 'data', 'daily.json');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf8');
  return out;
}

export async function getDailyController(req, res){
  const key = req.headers['x-api-key'];
  if(key !== process.env.ADMIN_API_KEY) return res.status(401).json({ error: 'unauthorized' });
  // if data exists, serve from cache
  const outPath = path.join(process.cwd(), 'data', 'daily.json');
  if(fs.existsSync(outPath)){
    const raw = fs.readFileSync(outPath, 'utf8');
    return res.type('application/json').send(raw);
  }
  const out = await regenerateDaily();
  res.json(out);
}
