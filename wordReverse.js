function reverseWord(str){
    const word = str.split(' ');
    const result = [];
    for( let i = word.length-1;i >= 0; i-- ){
        const element = word[i];
      result.push(element);
    }
   const reversed = result.join(' ');
   console.log(reversed);
   return reversed;
   
}
const myString = 'i am a good boy';
reverseWord(myString);

