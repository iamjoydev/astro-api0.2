import { matchKundli } from '../engines/matchEngine.js';

export async function getMatch(req, res){
  const key = req.headers['x-api-key'];
  if(key !== process.env.ADMIN_API_KEY) return res.status(401).json({ error: 'unauthorized' });
  const { dob1, time1, dob2, time2 } = req.query;
  if(!dob1||!time1||!dob2||!time2) return res.status(400).json({ error: 'dob1,time1,dob2,time2 required' });
  const out = matchKundli(dob1, time1, dob2, time2);
  res.json({ meta:{service:'Joydev Sastri Ultimate API'}, match: out });
}
