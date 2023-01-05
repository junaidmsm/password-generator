// DOM elements
const resultEL = document.getElementById('result');
const lengthEL = document.getElementById('length');
const uppercaseEL = document.getElementById('uppercase');
const lowercaseEL = document.getElementById('lowercase');
const numbersEL = document.getElementById('numbers');
const symbolsEL = document.getElementById('symbols');
const generateEL = document.getElementById('generate');
const clipboardEL = document.getElementById('clipboard');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Generate event listen
generateEL.addEventListener('click', () => {
  const length = +lengthEL.value;
  const hasLower = lowercaseEL.checked;
  const hasUpper = uppercaseEL.checked;
  const hasNumber = numbersEL.checked;
  const hasSymbols = symbolsEL.checked;

  resultEL.innerText = generatePassword(
    hasLower. 
    hasUpper, 
    hasNumber, 
    hasSymbol, 
    length
    ); 
});

// Generate password function
function generatePassword(lower, upper, number, symbol, length) {
// 1. Init pw var
// 2. filter out unchecked types
// 3. Loop over length call generator function for each type
// 4. Add final pw to the pw var and return

let generatedPassword = '';

const typesCount = lower + upper + number + symbol;

console.log('typesCount: ', typesCount);

const typesArr = [ { lower }, { upper }, { number }, { symbol }] .filter
(item => Object.values(item [0])
);

console.log('typesArr: ', typesArr);

if(typesCount === 0){
  return'';


for(let i = 0; i < length; i+=typesCount) {
  typesArr.forEach(type =>{
const funcName = object.keys(type)[0]

}generatedPassword += randomFunc[funcName]();
});
}
}



function getRandomLower (){
  return String.fromCharCode(Math.floor(Math.Random () *26) + 97);
}

function getRandomUpper (){
  return String.fromCharCode(Math.floor(Math.Random () *26) + 65);

}
// copy password to clipboard
clipboardEL.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = resultEL.innertext;

  if(!password) {
    return;
  }
} )
textarea.value = password;
document.body.appendChild(textarea);
textarea.select();
document.exacCommand('copy');
textarea.remove();
alert('password copied to clipboard');

// 2.Filterout unchecked types
// 3. Loop over length call generator function for each type
// 4. add final pw to the pw var and return


let generatePassword = '';


const typesCount = lower, upper, number, symbol
}
console.log('typesCount: ',typesCount);

const typesArr = [ { lower }, { upper }, { number }, { symbol }] .filter(item => Object.values(item [0]));


console.log('typeasArr: ', typesArr);
}// console.log('typesArr: ', typeasArr);

if(typesCount === 0){
  return'';


  for(let i = 0; i < length; i+=typesCount) {
    typesArr.forEach(type =>{});
    const funcName = object.keys(type)[0];
    console.log('funcName:', funcName);
    // console.log('funcName: ',funcName);

    generatedPassword += randomFunc[funcName]();

  })

  const finalPassword = generatedPassword.slice(0, length));

  return finalPassword;
}
 function generatePassword(lower, upper, number,symbol, length){}
// innit pw var
   return String.fromCharCode(Math.floor(Math.Random () *26) + 65);  
}
  
function getRandomNumber (){
  return String.fromCharCode(Math.floor(Math.Random () *10) + 65);
}

function getRandomSymbol (){
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
  
console.log(getRandomUpper());


function generatePassword(){
  

  
  // 1. Prompt the user for the password criteria
  //    a. password length 8 < 128
  //    b. Lowercase, uppercase, numbers, special characters
  // 2. Validate the input
  // 3. Generate password based on criteria
  // 4. Display password to the page




}
  
  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
