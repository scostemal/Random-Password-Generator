// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = 8;

var choiceArr = [];
var lowercaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialChar = ['!','@','#','$','%','^','&','*','<','>','/','~','+','?'];
var numberChar = ['1','2','3','4','5','6','7','8','9','0',];


function generatePassword() {
  var password = "";
  for (var i = 0; i < passwordLength; i++ ) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length)
    password = password + choiceArr[randomIndex];
  }
  return password;
}


function getPrompts() {
  choiceArr = [];

  passwordLength = parseInt(prompt("Enter a number between 8 and 128 for the length of your password"));

// Check to make sure user input is a number between 8 and 128

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert ("Please input a number between 8 and 128");
    return false;
  }
    
// Ask the user if they would like to include lowercase letters in their password.

  if (confirm("Would you like to include lowercase letters?")) {
    choiceArr = choiceArr.concat(lowercaseChar);
  }

// Ask the user if they would like to include uppercase letters in their password.

  if (confirm("Would you like to include uppercase letters?")) {
    choiceArr = choiceArr.concat(uppercaseChar);
  }

// Ask the user if they would like to include numbers in their password.

  if (confirm("Would you like to include numbers?")) {
    choiceArr = choiceArr.concat(numberChar);
  }

// Ask the user if they would like to include special characters in their password.

  if (confirm("Would you like to include special characters?")) {
    choiceArr = choiceArr.concat(specialChar);
  }
  return true;

}

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();

    passwordText.value = newPassword;
  }
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
