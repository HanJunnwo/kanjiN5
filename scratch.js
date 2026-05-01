const fs = require('fs');
const content = fs.readFileSync('src/data/kanji.ts', 'utf8');
const meanings = [];
const regex = /meaning:\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
  meanings.push(match[1]);
}
const dupMeanings = meanings.filter((item, index) => meanings.indexOf(item) !== index);
console.log('Duplicate meanings:', dupMeanings);

const onyomis = [];
const regexO = /onyomi:\s*"([^"]+)"/g;
while ((match = regexO.exec(content)) !== null) {
  onyomis.push(match[1]);
}
const dupOnyomi = onyomis.filter((item, index) => onyomis.indexOf(item) !== index);
console.log('Duplicate onyomi:', dupOnyomi);
