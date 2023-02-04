 const result = Math.pow(3,8);
 console.log(result);


 const num1 = 25;
 const num2 = 45;
 const gap = Math.abs(num1 - num2) ; 
 console.log(gap);

 if (gap < 5){
    console.log('you guys can be friend');

 }
 else {
    console.log('you guys stay apart');
 }
  
 


/---------------/  
const number = 2.451245;
const fullNumber = Math.round(number);
console.log(fullNumber);
const result1 = Math.ceil(2.000001);
console.log(result1);
const result2 = Math.floor(13.67);
console.log(result2);

//  random
// console.log(Math.random());
for(i= 0; i < 20; i++){
    const random = Math.round(Math.random()*6);
    console.log(random);

}
