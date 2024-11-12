const userName = prompt("Введите имя:");
const userYear = +prompt("Введите год рождения:");
const currentYear = 2024;
if (userYear !== +userYear || userYear > currentYear) {
    alert("Введен некорректный год. \nГод должен быть числом и не превышать текущий.");
} else {
    alert(`${userName}: ${currentYear - userYear}`);
}