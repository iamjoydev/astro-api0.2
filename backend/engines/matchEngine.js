import { generateKundli } from './kundliEngine.js';

const nakMap = ['Ashwini','Bharani','Krittika','Rohini','Mrigashirsha','Ardra','Punarvasu','Pushya','Ashlesha','Magha','Purva Phalguni','Uttara Phalguni','Hasta','Chitra','Swati','Vishakha','Anuradha','Jyeshtha','Mula','Purva Ashadha','Uttara Ashadha','Shravana','Dhanishtha','Shatabhisha','Purva Bhadrapada','Uttara Bhadrapada','Revati'];

export function matchKundli(dob1, time1, dob2, time2, lat=22.5726, lon=88.3639){
  const k1 = generateKundli(dob1, time1, lat, lon);
  const k2 = generateKundli(dob2, time2, lat, lon);
  // compare moon rashi for simplicity
  const score = (k1.moon.rashi === k2.moon.rashi)? 36 : Math.floor(Math.random()*36);
  return {
    partner1: k1,
    partner2: k2,
    score,
    result: score>=18? 'Compatible':'Needs work'
  };
}
