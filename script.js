// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate the password
function generatePassword() {

// Variables for allowable characters
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '1234567890';
  var specialChars = '!"#$%(*)+,-./:;<=>?@[]^_`{|}~';
  var multiSelect = "";
  var randomKey = "";

  // Prompt to allow user to input password length
  var keyLength = prompt( 'Enter password length. Must be between 8 to 128 characters long.');

  // return window if length does not meet criteria
  if (keyLength <8 || keyLength >128 || isNaN(keyLength)) {
    alert('You password does not meet the criteria. Please enter desired password length between 8 and 128 characters.');
    return;

    // Once valid number is input, confirm windows to select other password criteria
  } else {
    var upperCaseLetters = confirm ('Select OK to use uppercase letters.');
    var lowerCaseLetters = confirm ('Select OK to use lowercase letters.');
    var numberOptions = confirm ('Select OK to use numbers.');
    var specialSymbols = confirm ('Select OK to use special characters (ex. !#$%).');
  }

  if (upperCaseLetters) {multiSelect += upperCase;}
  if (lowerCaseLetters) {multiSelect += lowerCase;}
  if (numberOptions) {multiSelect += numbers;}
  if (specialSymbols) {multiSelect += specialChars;}

  // for loop to repeat if critera is not met and ends once password is generated
  for (i = 0; i < keyLength; i++) {
    randomKey += multiSelect[Math.floor(Math.random() * multiSelect.length)]
  }
  return(randomKey);

}

// Write password to the #password input
function writePassword(randomKey) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password.length === 0) {
    return;
  }
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
