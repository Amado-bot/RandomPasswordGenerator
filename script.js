// Assignment code here

// available specialCharacters for generator
const specialCharacters = ['#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.','@','%','+','\\','/',"'",'!'];
//available numbers for generator
const numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//lowercase characters available
const lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p','q', 'r', 's', 't', 'u', 'v','w', 'x', 'y', 'z'];
//uppercase characters available
const uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F','G','H', 'I', 'J', 'K', 'L', 'M','N', 'O', 'P', 'Q', 'R', 'S','T','U', 'V', 'W', 'X', 'Y','Z'];

//function that returns password parameters
const passwordParams = () => {
    //How long would you like the password
    const length = parseInt(prompt(`How long would you like your password  to be?`));

    //check how long the user wants his password
    if (isNaN(length) === true) {
        alert('Input must be a number');
    }
    //check that the password is atleast 8 characters long
    if (length > 8) {
        alert('Password must be at least 8 characters long');
        return
    }
    if (length > 128){
        alert('Password must be less than 128 characters long');
        return;
    }

    //ask what kind if characters in password
    const hasSpecialCharacters = confirm(`Click Ok to add special Characters`);
    const hasNumberCharacters = confirm(`Click OK to confirm including numeric characters.`);
    const hasLowercaseCharacters = confirm(`Click OK to include lower case characters.`);
    const hasUpperCaseCharacters = confirm(`Click OK to include Upper case characters.`);

    //confirm that user requested atlest one type of character
    if (
        hasSpecialCharacters === false &&
         hasNumberCharacters === false &&
          hasLowercaseCharacters === false &&
           hasUpperCaseCharacters === false) {
               alert(`Choose atleast one type of character`);
               return;
           }
    //stores  user input
    let passwordOptions = {
        length:length,
        hasSpecialCharacters:hasSpecialCharacters,
        hasNumberCharacters:hasNumberCharacters,
        hasLowercaseCharacters:hasLowercaseCharacters,
        hasUpperCaseCharacters:hasUpperCaseCharacters
    };
    return passwordOptions;
        
};

//get random characters from arrays
const getRandom =(array) => {
    const randomIndex = Math.floor(Math.random()*array.length);
    const randomElement = array[randomIndex];

    return randomElement;
};

//generate password according to user input
const generatePassword = () => {
    const options = passwordParams;
    const result = [];

    let possibleCharacters = [];

    let definiteCharacters = [];

    if (options.hasSpecialCharacters){
        possibleCharacters = possibleCharacters.concat(specialCharacters);
        definiteCharacters.push(getRandom(specialCharacters));
    };
    if (options.hasNumberCharacters){
        possibleCharacters = possibleCharacters.concat(numberCharacters);
        definiteCharacters.push(getRandom(numberCharacters));
    };
    if (options.hasLowerCaseCharacters){
        possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
        definiteCharacters.push(getRandom(lowerCaseCharacters));
    };
    if (options.uppercaseCharacters){
        possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
        definiteCharacters.push(getRandom(uppercaseCharacters));
    }

    //takes password length and returns random characters into the empty array
    for (var i = 0; i < possibleCharacters.length; i++) {
        let possibleCharacters= getRandom(possibleCharacters);
        result.push(possibleCharacters);
    };
    for (let i = 0; i < definiteCharacters.length; i++) {
        result.push(definiteCharacters[i]);
    };

    return result.join('');
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
