let word = prompt("Введите слово");

const arrayWord = Array.from(word.toUpperCase().replaceAll(' ', ''));
const arrayReversedWord = Array.from(word.toUpperCase().replaceAll(' ', '')).reverse();

let isPalindrome = true;

for (let i = 0; i < arrayWord.length; i++) {
    if (arrayWord[i] !== arrayReversedWord[i]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log(`Слово "${word}" является палиндромом`);
}
else {
    console.log(`Слово "${word}" не является палиндромом`);
}