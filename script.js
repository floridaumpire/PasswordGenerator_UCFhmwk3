// Arrays for special characters, lowercase letters, uppercase letters, and numbers
/*
*/
// Assignment Code
var generateBtn = document.querySelector("#generate");
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];
const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

/*
var passwordLength = window.prompt("How Long of a Password do you want?");
console.log(passwordLength); */
var word = "";

// Ask for PW length
//Test for a viable password
function generatePassword(){
  var passwordText = document.querySelector("#password");
  passwordText.value = " ";
  var passwordLength = window.prompt ("Enter Choice for PW Length")
  console.log(passwordLength);

  /*var length = parseInt()*/

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password needs to be between the number 8 and 128 and it is " + passwordLength + ".");
  }
  else {
    //Ask for UPPERCASE letter
    var passwordLowercase = confirm("WOudl you like to include lowercase letter in your password?");
    var passwordUppercase = confirm("WOudl you like to include UPPERCASE letter in your password?");
    var passwordSpecChar = confirm("WOudl you like to include SpEcIaL letter in your password?");
    var passwordNumber = confirm("WOudl you like to include Numbers in your password?");
    /*var passwordLowercase = prompt ("WOudl you like to include lowercase letter in your password?")
    if passwordLowercase {
      var passLower = confirm("Include Lower Case?");
    }
    //Ask for UPPERCASE letter
    var passwordUppercase = prompt ("Woudl you like to include UPPERcase letter in your password?")
    if (toUppercase (passwordUppercase) == "Yes") {
      var passUpper = confirm("Include Upper Case?");
    }
    //Ask for SPECIAL CHARACTER letter
    var passwordSpecChar = prompt ("Woudl you like to include Special Cases in your password?")
    if (toSpecial (passwordSpecChar) == "Yes") {
      var passSpecial = confirm("Include Special Chars?");
    }
    //Ask for NUMBER CHARACTER letter
    var passwordNumber = prompt ("Woudl you like to include Numbers in your password?")
    if (toNumber (passwordNumber) == "Yes") {
      var passNumber = confirm("Include Lower Case?");
    }
*/
    var finalPasswordArray = [];
    if (passwordLowercase) {
      finalPasswordArray = finalPasswordArray.concat(lowercase)
    }
    if (passwordUppercase) {
      finalPasswordArray = finalPasswordArray.concat(uppercase)
    }
    if (passwordSpecChar) {
      finalPasswordArray = finalPasswordArray.concat(specialChars)
    }
    if (passwordNumber) {
      finalPasswordArray = finalPasswordArray.concat(numberChars)
    }
    console.log(finalPasswordArray);
    console.log(passwordLength);
    console.log(finalPasswordArray);
    
    
    //pick target number (pwLength) of characeter from built array (finalPasswordArray)
    for (let index=0; index < passwordLength; index++) {
    // get random values from array
      console.log(index);
      word += finalPasswordArray[Math.floor(Math.random() * finalPasswordArray.length)];
    }
    return word;
  } 
}

generatePassword();




// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


