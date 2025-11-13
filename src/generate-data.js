// generate-data.js
const SEASONS_2025 = [
  { name: 'Spring 1', solarTerm: 'Start of Spring', date: '2025-02-03', ganzhi: '戊寅', elements: ['土','木'] },
  { name: 'Spring 2', solarTerm: 'Rain Water', date: '2025-02-19', ganzhi: '', elements: [] },
  { name: 'Spring 3', solarTerm: 'Waking of Insects', date: '2025-03-05', ganzhi: '己卯', elements: ['土','木'] },
  { name: 'Spring 4', solarTerm: 'Spring Equinox', date: '2025-03-20', ganzhi: '', elements: [] },
  { name: 'Spring 5', solarTerm: 'Pure Brightness', date: '2025-04-04', ganzhi: '庚辰', elements: ['金','土'] },
  { name: 'Spring 6', solarTerm: 'Grain Rain', date: '2025-04-20', ganzhi: '', elements: [] },

  { name: 'Summer 1', solarTerm: 'Start of Summer', date: '2025-05-05', ganzhi: '辛巳', elements: ['金','火'] },
  { name: 'Summer 2', solarTerm: 'Grain Buds', date: '2025-05-21', ganzhi: '', elements: [] },
  { name: 'Summer 3', solarTerm: 'Grain in Ear', date: '2025-06-05', ganzhi: '壬午', elements: ['水','火'] },
  { name: 'Summer 4', solarTerm: 'Summer Solstice', date: '2025-06-21', ganzhi: '', elements: [] },
  { name: 'Summer 5', solarTerm: 'Minor Heat', date: '2025-07-06', ganzhi: '癸未', elements: ['水','土'] },
  { name: 'Summer 6', solarTerm: 'Major Heat', date: '2025-07-23', ganzhi: '', elements: [] },

  { name: 'Autumn 1', solarTerm: 'Start of Autumn', date: '2025-08-07', ganzhi: '甲申', elements: ['木','金'] },
  { name: 'Autumn 2', solarTerm: 'End of Heat', date: '2025-08-23', ganzhi: '', elements: [] },
  { name: 'Autumn 3', solarTerm: 'White Dew', date: '2025-09-07', ganzhi: '乙酉', elements: ['木','金'] },
  { name: 'Autumn 4', solarTerm: 'Autumn Equinox', date: '2025-09-23', ganzhi: '', elements: [] },
  { name: 'Autumn 5', solarTerm: 'Cold Dew', date: '2025-10-08', ganzhi: '丙戌', elements: ['火','土'] },
  { name: 'Autumn 6', solarTerm: 'Frost’s Descent', date: '2025-10-23', ganzhi: '', elements: [] },

  { name: 'Winter 1', solarTerm: 'Start of Winter', date: '2025-11-07', ganzhi: '丁亥', elements: ['火','水'] },
  { name: 'Winter 2', solarTerm: 'Minor Snow', date: '2025-11-22', ganzhi: '', elements: [] },
  { name: 'Winter 3', solarTerm: 'Major Snow', date: '2025-12-06', ganzhi: '戊子', elements: ['土','水'] },
  { name: 'Winter 4', solarTerm: 'Winter Solstice', date: '2025-12-21', ganzhi: '', elements: [] },
  { name: 'Winter 5', solarTerm: 'Minor Cold', date: '2026-01-05', ganzhi: '己丑', elements: ['土','土'] },
  { name: 'Winter 6', solarTerm: 'Major Cold', date: '2026-01-20', ganzhi: '', elements: [] }
];

// Write to JSON
const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, '../docs/data.json');
fs.writeFileSync(outputPath, JSON.stringify(SEASONS_2025, null, 2));

console.log('24 seasons data generated successfully!');
