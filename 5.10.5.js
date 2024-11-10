let userAge = +prompt("Введите возраст:");
let availableCredit = 0;

if (userAge !== +userAge) {
    alert("Возраст должен быть числом");
}

else {

    if (userAge >= 18 && userAge <= 21) {
        availableCredit = 50000;
    }
    else if (userAge >= 22 && userAge <= 35) {
        availableCredit = 400000;
    }
    else if (userAge >= 36 && userAge <= 65) {
        availableCredit = 1000000;
    }

    if (!availableCredit) {
        alert("Видимо, Вам кредит не нужен. Всего доброго!");
    }

    else {
        let userCredit = +prompt(`Мы можем выдать вам максимум ${availableCredit}.
                                                    \nВведите сумму, кратную 1000.`);

        if (userCredit !== +userCredit || userCredit > availableCredit) {
            alert("Введена некорректная сумма кредита." +
                "\nСумма кредита должна быть числом и не превышать положенный максимум.");
        }

        else if (userCredit % 1000 !== 0) {
            alert(`Вы ввели значение, не кратное 1000. Мы можем выдать ${Math.floor(userCredit / 1000) * 1000}.`);
        }

        else {
            alert("Кредит одобрен");
        }

    }
}
