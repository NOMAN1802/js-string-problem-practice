const lyrics = 'tumi bondhu kala pakhi ame jano ki, bosonto kale tumai bolta pari ni.sada sada kala kala';

const searchString = 'PaKhi';
// const doseExist = lyrics.includes(searchString);
const lyricLowerCase = lyrics.toLowerCase();
const searchStringLowerCase = searchString.toLowerCase();
const doseExist = lyricLowerCase.includes(searchStringLowerCase);
// console.log(doseExist);

const doesExistOneLine = lyrics.toLowerCase(). includes(searchString.toLowerCase());
// console.log(doesExistOneLine);

// -------------------------------------------------------------------------------------

console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('tumi'));

if(lyrics.indexOf('sadia')  !== -1){
    console.log('exist  inside the string');

}
else {
    console.log("does not exist");
}
// start with 
console.log(lyrics.startsWith('tumi'));

// end with
const fileName = 'muBioData.pdf';
const otherFile = 'myPic.png';
fileName.endsWith('.pdf')