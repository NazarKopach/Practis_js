//Використовуя if...else,
//напишіть код, який буде питати:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
//то показати через alert: "Вірно!"
//в противному випадку відобразити:"Не знаєте? ECMAScript!"

// const answer = prompt("Яка офіційна назва JavaScript?");
// if (answer === "ECMAScript") {
//     alert("Вірно!");
// } else {
//     alert("Не знаєте? ECMAScript!");
// }


// alert(answer === "ECMAScript" ? ("Вірно!") : ("Не знаєте? ECMAScript!"));

//=========TASK2==========//

//Напишіть программу, яка отримує від користувача
//число (кількість хвилин) и виводить у консоль
//рядок у форматі годин та хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const answer = prompt('Enter number');
// let hours = parseInt(answer / 60);
// let minutes = answer % 60;
// hours = String(hours).padStart(2, '0');
// minutes = String(minutes).padStart(2, '0');

// console.log(`${hours}:${minutes}`);

//=========TASK3==========//

//Напишіть цикл, який виводить в консоль
//числа от max до min по зменьшенню
//Виведіть в консоль суму усіх парних чисел
// const max = Number(prompt("Enter max number"));
// const min = Number(prompt("Enter min number"));
// let summ = 0;
// for (let i = max; i >= min; i--) {
//     console.log(i);
//     if (i % 2 === 0) {
//         summ += i;
               
//     }
// }
// console.log(summ);

// function amount(max, min) {
//     let summ = 0;
//         for (let i = max; i >= min; i--) {
//         console.log(i);
//         if (i % 2 === 0) {
//         summ += i;
//         }
//     }
//     return summ;
// }
// console.log(amount(20, 10));

//=========TASK4==========//

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = Number(prompt("Enter number from 1 to 4"));
// let result = '';
// switch (num) {
//     case 1:
//         result = 'зима';
//         break;
//     case 2:
//         result = 'весна';
//         break;
//     case 3:
//         result = 'літо';
//         break;
//     case 4:
//         result = 'осінь';
//         break;
//     default:
//         result = 'Enter number from 1 to 4';
// }
// console.log(result)

// function checkSeasons(num) {
//     switch (num) {
//         case 1:
//             return 'зима';
//         case 2:
//             return 'весна';
//         case 3:
//             return 'літо';
//         case 4:
//             return 'осінь';
        
//         default:
//             return 'Enter number from 1 to 4'
//     }

// }
// console.log(checkSeasons(2))

//=========TASK5==========//

//Напишіть код, який буде питати
//логін за допомогою prompt и логіровати результат
//в консоль браузера
//Якщо користувач вводить "Адмін",
//то prompt запрашує пароль.
//Якщо ничого не ввели чи нажата клавіша Esc
//вивести строку "Скасовано"
//В противному випадку вивести рядок "Я вас не знаю"
//Пароль перевіряти так:
//Якщо введен пароль "Я головний",
//то вивести рядок "Вітаю!"
//в іншому випадку виводити рядок "Невірний пароль!"

const userLogin = prompt('Enter login');
console.log(userLogin);

if (userLogin === 'Адмін') {
	const userPassword = prompt('Enter Password');
	if (userPassword === 'Я головний') {
		alert('Вітаю!');
	} else {
		alert('Невірний пароль!');
	}
} else if (userLogin === null || userLogin === '') {
	alert('Скасовано');
} else {
	alert('Я вас не знаю');
}
