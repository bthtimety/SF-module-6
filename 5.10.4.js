const userName = prompt("Введите имя:");
const userYear = +prompt("Введите год рождения:");
const currentYear = 2024;
const mod = (currentYear - userYear) % 10;
if (userYear !== +userYear || userYear > currentYear) {
    alert("Введен некорректный год. \nГод должен быть числом и не превышать текущий.");
} else {
    switch (mod) {
        case 1:
            alert(`${userName}: ${currentYear - userYear} год`);
            break;
        case 2:
            alert(`${userName}: ${currentYear - userYear} года`);
            break;
        case 3:
            alert(`${userName}: ${currentYear - userYear} года`);
            break;
        case 4:
            alert(`${userName}: ${currentYear - userYear} года`);
            break;
        default:
            alert(`${userName}: ${currentYear - userYear} лет`);
    }
}