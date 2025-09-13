import SunCalc from 'suncalc';
function normalize(a){ return ((a%360)+360)%360; }

export function generateKundli(dobStr, timeStr, lat=22.5726, lon=88.3639){
  // dobStr YYYY-MM-DD, timeStr HH:MM
  const dt = new Date(`${dobStr}T${timeStr}:00`);
  const sun = SunCalc.getSunPosition(dt, lat, lon);
  const moon = SunCalc.getMoonPosition(dt, lat, lon);
  const sunLon = normalize((sun.azimuth*180/Math.PI)+180);
  const moonLon = normalize((moon.parallacticAngle*180/Math.PI)+180);
  // crude rashi by longitude
  const rashis = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];
  const sunRashi = rashis[Math.floor(sunLon/30)];
  const moonRashi = rashis[Math.floor(moonLon/30)];
  return {
    datetime: dt.toISOString(),
    sun: { longitude: sunLon, rashi: sunRashi },
    moon: { longitude: moonLon, rashi: moonRashi },
    // houses and other grahas omitted for brevity
  };
}
