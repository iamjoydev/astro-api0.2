const SIGNS = ['aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','sagittarius','capricorn','aquarius','pisces'];

const TEMPLATES = {
  en: {
    positive: [
      "A fresh opportunity appears — take a small step today.",
      "Your energy is up; focus on relationships and clear communication.",
      "Financial improvement is possible; avoid risky gambles."
    ],
    caution: [
      "Avoid hurried decisions regarding money.",
      "Take care with travel plans; double-check timings.",
      "Emotional misunderstandings may arise; listen first."
    ]
  },
  bn:{
    positive:[
      "একটি নতুন সুযোগ আসছে — আজ ছোট একটি পদক্ষেপ নিন।",
      "আপনার শক্তি বৃদ্ধি পেয়েছে; সম্পর্ক ও যোগাযোগে মনোযোগ দিন।",
      "আর্থিক উন্নতি সম্ভব; ঝুঁকি নেবেন না।"
    ],
    caution:[
      "অর্থ নিয়ে তাড়াহুড়ো সিদ্ধান্ত এড়ান।",
      "ভ্রমণ পরিকল্পনা যাচাই করুন।",
      "ভাবনাগত ভুল বোঝাবুঝি হতে পারে; আগে শুনুন।"
    ]
  },
  hi:{
    positive:[
      "एक नया अवसर सामने आ रहा है — आज छोटा कदम उठाएँ।",
      "आपकी ऊर्जा अच्छी है; संबंधों तथा संवाद पर ध्यान दें।",
      "वित्तीय सुधार संभव है; जोखिम न लें।"
    ],
    caution:[
      "पैसे के फैसले में जल्दबाज़ी न करें।",
      "यात्रा योजनाओं की पुष्टि करें।",
      "भावनात्मक गलतफहमी हो सकती है; पहले सुनें।"
    ]
  }
};

function pick(arr, seed){
  return arr[Math.abs(seed)%arr.length];
}

export function generateDailyHoroscopes(panchang, date=new Date()){
  const res = {};
  // seed from moonLongitude to vary messages
  const seed = Math.floor((panchang.moonLongitude||0));
  for(const s of SIGNS){
    res[s] = {
      en: { short: pick(TEMPLATES.en.positive, seed), caution: pick(TEMPLATES.en.caution, seed+1) },
      bn: { short: pick(TEMPLATES.bn.positive, seed), caution: pick(TEMPLATES.bn.caution, seed+1) },
      hi: { short: pick(TEMPLATES.hi.positive, seed), caution: pick(TEMPLATES.hi.caution, seed+1) }
    };
  }
  return res;
}

// weekly: rotate templates slightly per day
export function generateWeeklyHoroscopes(panchang){
  const weekly = {};
  for(const s of SIGNS){
    weekly[s] = { en: [], bn: [], hi: [] };
    for(let d=0; d<7; d++){
      weekly[s].en.push({ day: d, text: generateDailyHoroscopes(panchang)[s].en.short });
      weekly[s].bn.push({ day: d, text: generateDailyHoroscopes(panchang)[s].bn.short });
      weekly[s].hi.push({ day: d, text: generateDailyHoroscopes(panchang)[s].hi.short });
    }
  }
  return weekly;
}
