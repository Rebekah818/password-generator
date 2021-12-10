// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

window.alert("Please enter your password")
window.alert("Password should 8 - 128 characters")

// Write password generator function
function generatePassword() {
  var length = "" 
      charset = "abcdefghijklmnopqrstuvwxyzABCEDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
      retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * 128));
    }
    return retVal;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
