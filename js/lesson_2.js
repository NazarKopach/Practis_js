// * Масиви: літерал масиву, елементи, індексація, довжина
//  Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.

// const styles = ['Джаз', 'Блюз'];

// styles.push('Рок-н-рол');

// const index = styles.indexOf('Блюз');
// console.log(index);
// if (index !== -1) {
//     styles[index] = 'Класика';
// }
// console.log(styles.shift());

// styles.unshift('Реп', 'Реггі');
// console.log(styles);
// for (const word of styles) {
//     console.log(word);
// }
//TODO:=========task-1=================
// Знайти всі елементи масиву, що містять задану підстроку, та об'єднати їх у новий масив, після чого вивести у консоль лог повідомлення "Масив елементів, що містять підстроку substring: ..." Результат повинен бути розділений комами та пробілами.(використати indexOf)

// const wordsArray = ['JavaScript', 'HTML', 'CSS', 'React'];
// const substring = 'S';
// function findSubString(array, sub) {
//     const newArray = [];
//     for (const word of array) {
//         if (word.toLowerCase().indexOf(sub.toLowerCase()) !== -1) {
//             newArray.push(word);
//         }
//     }
//     return `Масив елементів, що містять підстроку ${sub}: ${newArray.join(', ')}`;
// }
// console.log(findSubString(wordsArray, substring));

//TODO:=========task-2=================
// Порахуй кількість слів у рядку, використовуючи методи масивів і створи новий рядок, роділений дефісами у нижньому регістрі.

// const message = "JavaScript is a popular programming language.";
// // const splitMassage = message.split(" ");
// // const lengthMassage = splitMassage.length;
// // const newMassege = message.toLowerCase().split(" ").join("-");
// const newMassege = message.toLowerCase().replaceAll(" ", "-");
// console.log(newMassege);

//TODO:=========task-3=================
// Створи 2 масиви чисел. Обьеднай їх за допомогою методу масиву. Створи нові масив і за допомогою циклу for або for..of, в перший масив збери усі парні числи, а в другій усі не парні і виведи їх в консоль.

// const firstArray = [1, 2, 3, 5, 4];
// const secondArray = [10, 21, 33, 55, 44];
// const newArray = firstArray.concat(secondArray);
// const evenArray = [];
// const oddArray = [];
// for (const number of newArray) {
//   number % 2 === 0 ? evenArray.push(number) : oddArray.push(number);
// }
// console.log(evenArray, oddArray);


//TODO:============task-04==============
//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']
// const musicGenres = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп'];
// function logItems(array) {
//     for (let i = 0; i < array.length; i++){
//         console.log(`${i+1} - ${array[i]}`)
//     }
// }
// logItems(musicGenres)

// * Літерал об'єкта
//TODO:============task-1=========================
// Створіть об'єкт "людина" з властивостями "ім'я", "хобі" і "вік". Напишіть метод "greet", який буде виводити на екран привітання з ім'ям людини.
// Послідовно:
// 1 додати поле mood зі значенням 'happy'
// 2 замінити hobby на 'skydiving'

// const human = {
//     name: 'Mango',
//     hobby: 'football',
//     age: 27,
//     greet() { // method
//         console.log(`Hello ${this.name}!`);
//     }
    
// }
// human.mood = 'happy';
// human.hobby = 'skydiving';
// console.log(human);
// human.greet();

// const human1 = Object.create(human);
// human1.name = 'Kiwi';
// human1.greet();

// for (const key in human) {
//     console.log(key);
//     console.log(human[key]);
// }


//TODO:============task-2======================================================
// У нас є об'єкт, у якому зберігатимуться зарплати
// нашої команди
// Напишіть код для сумування всіх зарплат і
// збережіть його результат у змінній sum.
// Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//   };

//   function totalSalaries(object) {
//     let total = 0;
//     for (const key in object) {
//         total += object[key];
//     }
//     return total;
//   }
//   console.log(totalSalaries(salaries));

//   function totalSalaries(object) {
//     let total = 0;
//     for (const number of Object.values(object)) {
//         total += number;
//     }
//     return total;
//   }
//   console.log(totalSalaries(salaries));

//   console.log(Object.keys(salaries));

//   console.log(Object.values(salaries));

//   console.log(Object.entries(salaries));