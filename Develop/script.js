var upperArray = ['A',
'B',
'C',
'D',
'E',
'F',
'G',
'H',
'I',
'J',
'K',
'L',
'M',
'N',
'O',
'P',
'Q',
'R',
'S',
'T',
'U',
'V',
'W',
'X',
'Y',
'Z']

var lowerArray = ['a',
'b',
'c',
'd',
'e',
'f',
'g',
'h',
'i',
'j',
'k',
'l',
'm',
'n',
'o',
'p',
'q',
'r',
's',
't',
'u',
'v',
'w',
'x',
'y',
'z']

var numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

var symbolArray = ['@',
'%',
'+',
'\\',
'/',
"'",
'!',
'#',
'$',
'^',
'?',
':',
',',
')',
'(',
'}',
'{',]




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function userInfo(){
  var length = parseInt(prompt("Please enter password length from 8 - 128"))
  console.log(length);
  if (Number.isNaN(length)) {
    alert("Not a valid value!")
    return null;
  } 
  if (length < 8 || length > 128) {
    alert("Please input value between 8 - 128")
    return null;
  }
  var numberCase = confirm("Do you want to include numbers?")
  var upperCase = confirm("Do you want to include UPPERCASE letters?")
  var lowerCase = confirm("Do you want to include lowercase letters?")
  var symbolCase = confirm("Do you want to include symbol characters?")
  console.log(upperCase);

if (numberCase === false &&
    upperCase === false &&
    lowerCase === false &&
    symbolCase === false ) {
      alert("Please select one option")
      return null;
    }

    var passwordOptions = {
      passwordlength: length,
      number: numberCase,
      upper: upperCase,
      lower: lowerCase,
      symbols: symbolCase
    }

    return passwordOptions;
}

function randomPassword(array) {
  var randomIndex = Math.floor(Math.random() * array.length)
  var randomEL = array[randomIndex]
  return randomEL;
}

function generatePassword() {
  var options = userInfo();
  var characters = [];
  var results = [];
  var guarantee = [];

  if (!options) {
    return null;
  }

  if (options.number) {
    characters = characters.concat(numberArray);
    guarantee.push(randomPassword(numberArray));
  }

  if (options.lower) {
    characters = characters.concat(lowerArray);
    guarantee.push(randomPassword(lowerArray));
  }
  if (options.upper) {
    characters = characters.concat(upperArray);
    guarantee.push(randomPassword(upperArray));
  }
  if (options.symbols) {
    characters = characters.concat(symbolArray);
    guarantee.push(randomPassword(symbolArray));
  }

  for ( i = 0; i < options.passwordlength; i++) {
    var randomChar = randomPassword(characters);
    results.push(randomChar);
  }
  for (let i = 0; i < guarantee.length; i++) {
    results[i] = guarantee[i]
  }

console.log(results.join(''));

  return results.join("")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
