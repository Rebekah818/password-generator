// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Write prompt for character length
 

// Write password generator function
function generatePassword() {
  window.alert("Please enter your password");
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCEDEFGHIJKLMNOPQRSTUVWXYZ";
  var number = "0123456789";
  var special = "!@#$%^&*";
  var retVal = "";
  var length = window.prompt("Password should 8 - 128 characters");
  var lConfirm = confirm("lower?"); 
  var uConfirm = confirm("uppercase?");
  var specialConfirm = confirm ("special characters?")
  var numberConfirm = confirm("numbers?")
  var passwordChoices = "";

  if (lConfirm) {
    passwordChoices += lowercase
  };
  if (uConfirm) {
    passwordChoices += uppercase
  };
  if (special) {
    passwordChoices += special
  };
  if (number) {
    passwordChoices += numbers
  };
  for (var i = 0; i < length; ++i) {
    var currentchar = passwordChoices.charAt(Math.floor(Math.random() * passwordChoices.length));
    retVal += currentchar
  };
  return retVal;

};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
