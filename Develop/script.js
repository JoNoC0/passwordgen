
// global variables that will be used in "array" 
var upperArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

var lowerArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

var numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

var symbolArray = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',]




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// function that will ask user to enter a number value in a prompt
function userInfo(){
  var length = parseInt(prompt("Please enter password length from 8 - 128."))
//  conditional statement checking to see if value is not a number(isNaN)
  if (Number.isNaN(length)) {
    // alert pop up when the entered value is not a number(iNaN)
    alert("Not a valid value!")
    // return null will stop and start over. If the value entered is not a number(iNaN)
    return null;
  } 
  // conditional statement checking if value entered is between 8 - 128
  if (length < 8 || length > 128) {
    // alert popup when value entered is not between 8-128
    alert("Please input value between 8 - 128")
    // return will stop and start over. If the value entered is not between 8-128
    return null;
  }
  // confirm pop-up for "true or false" response
  var numberCase = confirm("Do you want to include numbers?")
  var upperCase = confirm("Do you want to include UPPERCASE letters?")
  var lowerCase = confirm("Do you want to include lowercase letters?")
  var symbolCase = confirm("Do you want to include symbol characters?")
 
// conditional statement that if user doesn't select any, "cancel or false", from confirm pop-up 
if (numberCase === false &&
    upperCase === false &&
    lowerCase === false &&
    symbolCase === false ) {
      // alert message will pop-up asking to select an option 
      alert("Please select one option")
      // return will stop when responses are not true or selcted
      return null;
    }
// object with properties "name and value"
    var passwordOptions = {
      passwordLength: length,
      number: numberCase,
      upper: upperCase,
      lower: lowerCase,
      symbols: symbolCase
    }
    return passwordOptions;
}
// 
function randomPassword(array) {
  var randomIndex = Math.floor(Math.random() * array.length)
  var randomEL = array[randomIndex]
  return randomEL;
}
// generates password from user input selection
function generatePassword() {
  var options = userInfo();
  var characters = [];
  var results = [];
  var guarantee = [];
// when there is no user input then code will stop
  if (!options) {
    return null;
  }
// concatenate(combine) two arrays 
  if (options.number) {
    characters = characters.concat(numberArray);
    // will guarantee atleast one array is pushed to randomPassword as output
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
// loop to push the outcome to 'results' variable empty array
  for ( i = 0; i < options.passwordLength; i++) {
    var randomChar = randomPassword(characters);
    results.push(randomChar);
  }
  // loop to output values in array with ".length"
  for (let i = 0; i < guarantee.length; i++) {
    results[i] = guarantee[i]
  }

console.log(results.join(''));
// retuns joined array with no character, spaces
  return results.join("")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
