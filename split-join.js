const lyrics = 'tumi bondhu kala pakhi ame jano ki. bosonto kale tumai bolta pari ni.sada sada kala kala';
const parts = lyrics.split(' ');
const sentence = lyrics.split('.')
const chars = lyrics.split('');
// console.log(chars);


// slice string 
const partial = lyrics.slice(5, 8);
// console.log(partial);
const partial2 = lyrics.substring(5, 8);
// console.log(partial2);

const lines = [
    'Tumi bondhu kala pakhi ame jano ki',
    'bosonto kale tumai bolta pari ni',
    'Sada sada kala kala',
    'Rong jomasa sada kala.'
  ];
  const newSong = lines.join('. ');
  console.log(newSong);