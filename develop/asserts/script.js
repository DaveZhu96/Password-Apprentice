//Dom element
const resultEl=document.getElementById('result');
const lengthEl=document.getElementById('characterAmountNumber');
const uppercaseEl=document.getElementById('includeUppercase');
const lowercaseEl=document.getElementById('includeLowercase');
const numbersEl=document.getElementById('includeNumbers');
const symbolEl=document.getElementById('includeSymbols');
const generateEl=document.getElementById('generate');
const clipboardEl=document.getElementById('clipbpard');





const randomFunction = {
      lower: getRandomLower,
     upper: getRandomUpper,
     number: getRandomNumber,
     symbol: getRandomSymbol,

};

generateEl.addEventListener('click', ()=> {
  const length = +lengthEl.value;
  const hasLower= lowercaseEl.checked;
  const hasUpper= uppercaseEl.checked;
  const hasNumber= numbersEl.checked;
  const hasSymbol= symbolEl.checked;
  


resultEl.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol,length);
});

clipboardEl.addEventListener('click',()=> {
  const textarea = document.createElement ('textarea');
  const password= resultEl.innerText;
if(!password) {
  return;
}

textarea.value=password;
document.body.appendChild(textarea);
textarea.select();
document.execCommand("copy");
textarea.remove();
alert("Password copied to clipboard!");
});


//generate password function

function generatePassword(lower, upper, number, symbol, length){

  let generatedPassword = "";

  const typesCount = lower + upper + number + symbol;

  //console.log("typesCount:  ", typesCount);
  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
  (
    item => Object. values(item)[0]
    );
//console.log("tylesArr: ", typesArr)

if(typesCount ===0) {
  return "";
}

for(let i=0; i<length; i+= typesCount){
  typesArr.forEach(type =>{
    const funcName= Object.keys(type)[0];
    //console.log("funName: ", funcName);

    generatedPassword += randomFunction[funcName]();
  });
}
const finalPassword=generatedPassword.slice(0,length);

return finalPassword;
}









//Generator functions

function getRandomLower(){
return String.fromCharCode(Math.floor(Math.random()*26) + 65);
} 

function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random()*26) + 97);
  } 

  function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10) + 48);
    } 

    function getRandomSymbol(){
      var symbols= "!@#$%^&*(){}[]:;<,>.?/~`"
      return symbols[Math.floor(Math.random()* symbols.length)];
      } 






