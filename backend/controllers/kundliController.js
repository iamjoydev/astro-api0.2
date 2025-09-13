import { generateKundli } from '../engines/kundliEngine.js';

export async function getKundli(req, res){
  const key = req.headers['x-api-key'];
  if(key !== process.env.ADMIN_API_KEY) return res.status(401).json({ error: 'unauthorized' });
  const { dob, time, lat, lon } = req.query;
  if(!dob || !time) return res.status(400).json({ error: 'dob and time required' });
  const k = generateKundli(dob, time, parseFloat(lat)||22.5726, parseFloat(lon)||88.3639);
  res.json({ meta:{service:'Joydev Sastri Ultimate API'}, kundli: k });
}
