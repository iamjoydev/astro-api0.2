import SunCalc from 'suncalc';

function normalize(a){ return ((a%360)+360)%360; }

export function computePanchang(date=new Date(), lat=22.5726, lon=88.3639, tzOffset=5.5){
  const times = SunCalc.getTimes(date, lat, lon);
  const sunPos = SunCalc.getSunPosition(date, lat, lon);
  const moonPos = SunCalc.getMoonPosition(date, lat, lon);

  // crude ecliptic longitude approximations using azimuth/parallacticAngle
  const sunLon = normalize((sunPos.azimuth*180/Math.PI)+180);
  const moonLon = normalize((moonPos.parallacticAngle*180/Math.PI)+180);

  // tithi: lunar elongation / 12 deg
  const diff = normalize(moonLon - sunLon);
  const tithiIndex = Math.floor(diff/12)+1;
  const nakIndex = Math.floor(normalize(moonLon)/(360/27));
  const nakNames = ['Ashwini','Bharani','Krittika','Rohini','Mrigashirsha','Ardra','Punarvasu','Pushya','Ashlesha','Magha','Purva Phalguni','Uttara Phalguni','Hasta','Chitra','Swati','Vishakha','Anuradha','Jyeshtha','Mula','Purva Ashadha','Uttara Ashadha','Shravana','Dhanishtha','Shatabhisha','Purva Bhadrapada','Uttara Bhadrapada','Revati'];

  return {
    sunrise: times.sunrise ? times.sunrise.toISOString() : null,
    sunset: times.sunset ? times.sunset.toISOString() : null,
    moonrise: times.moonrise ? times.moonrise.toISOString() : null,
    moonset: times.moonset ? times.moonset.toISOString() : null,
    tithi: `Tithi ${tithiIndex}`,
    nakshatra: nakNames[nakIndex] || null,
    sunLongitude: sunLon,
    moonLongitude: moonLon
  };
}
