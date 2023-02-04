const userName = 'blackPink';
const userInput = 'blackPinK';
console.log(userName.toLowerCase());
console.log(userName.toUpperCase());
console.log(userName.toLocaleLowerCase());
if(userName .toLocaleLowerCase() === userInput.toLocaleLowerCase()){
    console.log("valid user");
}
else{
    console.log('invalid user');
}