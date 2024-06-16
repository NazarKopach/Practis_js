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

const answer = prompt('Enter number');
let hours = parseInt(answer / 60);
let minutes = answer % 60;
hours = String(hours).padStart(2, '0');
minutes = String(minutes).padStart(2, '0');

console.log(`${hours}:${minutes}`);
