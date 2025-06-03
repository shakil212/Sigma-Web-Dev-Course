// 4. The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function isValidPassword(password) {
    const hasMinimumLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);

    return hasMinimumLength && hasUppercase && hasLowercase && hasDigit;
}

// Example usage:
console.log(isValidPassword("Password123")); // true
console.log(isValidPassword("password"));    // false (no uppercase or digit)
console.log(isValidPassword("PASSWORD"));    // false (no lowercase or digit)
console.log(isValidPassword("Pass12"));      // false (too short)
