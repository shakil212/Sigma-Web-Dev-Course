// 6. The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Hello World"));     // Output: 3 (e, o, o)
console.log(countVowels("AEIOU"));           // Output: 5
console.log(countVowels("JavaScript"));      // Output: 3 (a, a, i)
console.log(countVowels("bcdfgh"));          // Output: 0 (no vowels)
