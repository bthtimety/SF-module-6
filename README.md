Задание 5.10.1


Напишите скрипт, который с помощью метода prompt() запрашивает у пользователя любое число. И после этого выводит на экран в методе alert():
в первой строке — само число;
во второй строке — квадрат этого числа;
в третьей строке — куб этого числа.

Задание 5.10.2


На сайте имеется поле для ввода промокода. Пользователь может заполнить его и получить скидку, если промокод верен.
Ваша задача написать проверку для промокода: «скидка». Используйте prompt() для получения значений, а alert() для вывода фразы «Промокод применён» или «Промокод не работает». Учитывайте случаи когда пользователь может ввести «скиДка», «Скидка», «СКИДКА».

Задание 5.10.3


С помощью метода prompt() получите от пользователя его имя, а затем год рождения.
Сохраните эти данные в переменные.
Затем вычислите возраст пользователя и выведите с помощью alert() сообщение вида: «Владимир: 25».

Задание 5.10.4


Перепишите задание 5.10.3.
Определите остаток от деления количества лет на 10. В зависимости от этого выведите в алерт «Антон: 21 год» или «Антон: 24 года», или «Антон: 25 лет» и т.д. То есть для всех чисел с остатком 1 должно быть «_год», для чисел с остатком 2, 3, 4 – «_года», а для всех остальных – «_лет».

Задание 5.10.5


Напишите программу, которая будет сообщать пользователю, на какую сумму он может взять кредит. Сумма кредита зависит от возраста пользователя.
Например:
Если клиенту нет 18 лет, то кредит он не получит.
Если клиенту от 18 до 21, то он может получить максимум 50000.
Если клиенту от 22 до 35, то он сможет получить максимум 400000.
Если клиенту от 36 до 65, то ему одобрят максимум 1000000.
Клиент может получить только сумму, кратную 1000.
В программе должна присутствовать проверка на вводимое пользователем значение. Допускаются только значения типа number.

Задание 6.6.1


Напишите проверку, которая позволит определить, является слово палиндромом или нет.

Задание 6.6.2


Есть массив:

    const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ]; 
Создайте новый массив и запишите в него только уникальные значения из массива arr. Выведите получившийся массив в консоль.

Задание 6.6.3


Запросите у пользователя любое число. На основании ответа создайте массив и заполните его числами от нуля до введённого числа. Не забудьте привести полученное от пользователя значение к типу number.

Задание 6.6.4


С помощью цикла нарисуйте в консоли заполненное поле для игры «Крестики-нолики». Выведите результат в консоль.

Задание 6.6.5


Есть объект obj. В одном из ключей объекта — массив. Добавьте в новый массив arrValues значения всех ключей объекта. Если значение — массив, добавьте каждый элемент в массив arrValues.
Выведите получившийся массив в консоль.
