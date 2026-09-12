function generatePassword(length, nums, lowercaseletters, uppercaseletters, specialchars){
    
    const numChars = "0123456789";
    const lowerChars = "abcdefghijklmnopqrstuvwxys";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialChars = "!@#$%^&*(){};:.,?";

    let allowedChars = "";
    let password = "";
    
    allowedChars += nums ? numChars : "";
    allowedChars += lowercaseletters ? lowerChars : "";
    allowedChars += uppercaseletters ? upperChars : "";
    allowedChars += specialchars ? specialChars : "";

    if(length <= 0){
        return `(The password length atleast an 1 character)`;
    }
    if(allowedChars.length === 0){
        return `(Atleat 1 character should be selected)`;
    }
    for(let i = 0; i < length; i ++){
        const passIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[passIndex];
    }

    return password;
}

const passLength = 12;
const includeNumbers = true;
const includeLowerCase = true;
const includeUpperCase = true;
const includeSpecialChars = true;

const password = generatePassword(passLength,
                                  includeNumbers,
                                   includeLowerCase,
                                    includeSpecialChars,
                                     includeSpecialChars)
 console.log(`Generated password is: ${password}`);                                   