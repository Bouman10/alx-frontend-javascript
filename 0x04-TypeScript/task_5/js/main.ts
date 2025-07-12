import { MajorCredits, MinorCredits, sumMajorCredits, sumMinorCredits } from './subjects';

const major1: MajorCredits = { credits: 3, __brand: 'MajorCredits' };
const major2: MajorCredits = { credits: 4, __brand: 'MajorCredits' };

const minor1: MinorCredits = { credits: 2, __brand: 'MinorCredits' };
const minor2: MinorCredits = { credits: 1, __brand: 'MinorCredits' };

const major = sumMajorCredits({ credits: 3, __brand: 'MajorCredits' }, { credits: 4, __brand: 'MajorCredits' });
const minor = sumMinorCredits({ credits: 1, __brand: 'MinorCredits' }, { credits: 2, __brand: 'MinorCredits' });

console.log('Major:', JSON.stringify(major));
console.log('Minor:', JSON.stringify(minor));
