const MONTHLY_DATA = [
  { date: '2025-02-03', ganzhi: '戊寅', elements: ['土','木'], solarTerm: '立春' },
  { date: '2025-03-05', ganzhi: '己卯', elements: ['土','木'], solarTerm: '惊蛰' },
  { date: '2025-04-04', ganzhi: '庚辰', elements: ['金','土'], solarTerm: '清明' },
  { date: '2025-05-05', ganzhi: '辛巳', elements: ['金','火'], solarTerm: '立夏' },
  { date: '2025-06-05', ganzhi: '壬午', elements: ['水','火'], solarTerm: '芒种' },
  { date: '2025-07-06', ganzhi: '癸未', elements: ['水','土'], solarTerm: '小暑' },
  { date: '2025-08-07', ganzhi: '甲申', elements: ['木','金'], solarTerm: '立秋' },
  { date: '2025-09-07', ganzhi: '乙酉', elements: ['木','金'], solarTerm: '白露' },
  { date: '2025-10-08', ganzhi: '丙戌', elements: ['火','土'], solarTerm: '寒露' },
  { date: '2025-11-07', ganzhi: '丁亥', elements: ['火','水'], solarTerm: '立冬' },
  { date: '2025-12-06', ganzhi: '戊子', elements: ['土','水'], solarTerm: '大雪' },
  { date: '2026-01-05', ganzhi: '己丑', elements: ['土','土'], solarTerm: '小寒' },
];

function getCurrentData() {
  const today = new Date();
  let monthEntry = MONTHLY_DATA[0];
  
  for (let i = 0; i < MONTHLY_DATA.length; i++) {
    const entryDate = new Date(MONTHLY_DATA[i].date);
    if (today >= entryDate) monthEntry = MONTHLY_DATA[i];
    else break;
  }

  return {
    elements: monthEntry.elements,
    solarTerm: monthEntry.solarTerm,
    lastUpdated: new Date().toISOString()
  };
}

// Generate and write to docs/data.json
const fs = require('fs');
const path = require('path');

const data = getCurrentData();
const outputPath = path.join(__dirname, '../docs/data.json');

fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
console.log('Data updated successfully!');