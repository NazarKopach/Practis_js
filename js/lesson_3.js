const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

// Task 1
// Отримати масив імен усіх користувачів (поле name).
// console.log(getUserNames(users))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
// *зробити функцію універсальною, щоб вона повертала
// масив значень будь-якої заданої властивості

// const getUserNames = users => users.map(user => user.name);

// console.log(getUserNames(users));

// const getUserNamesNew = (users, prop) => users.map(user => user[prop]);

// console.log(getUserNamesNew(users, 'email'));

// Task 2
// Отримати масив користувачів віком від min до max
// console.log (getUsersWithAge (users, 20, 30));
// [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]
// console.log (getUsersWithAge (users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]

// const getUsersWithAge = (users, min, max) =>
//   users.filter((user) => user.age >= min && user.age <= max);
// console.log(getUsersWithAge(users, 20, 30));

// Task 3
// Отримати масив імен користувачів по статі (властивість gender)
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// const getUsersWithGender = (users, gender) =>
//   users.filter((user) => user.gender === gender).map((user) => user.name);

// const getUsersWithGender = (users, gender) => users.reduce((usersNames, user) => user.gender === gender ? [...usersNames, user.name] : usersNames, []);

// console.log(getUsersWithGender(users, "male"));

// Task 4
// Отримати масив всіх навичок усіх користувачів (поле skills), при цьому не повинно бути
// повторювань навичок і вони мають бути відсортовані в алфавітному порядку.
// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum',
// 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
// const getSortedUniqueSkills = (users) =>
//   users
//     .flatMap((user) => user.skills)
//     .filter((skill, index, array) => array.indexOf(skill) === index)
//     .toSorted((a, b) => a.localeCompare(b));
// console.log(getSortedUniqueSkills(users));


/// Даний словник із міст та дат виступів рок-групи
/// Необхідно перетворити словник (key-value) на масив із назв міст
/// Виведення міст має бути у хронологічному порядку
/// Міста у яких концерт вже пройшов потрібно виключити
/// Результат ["Київ", "Умань", "Одеса"]
// const concerts = {
//   Київ: new Date("2024-08-01"),
//   Умань: new Date("2024-07-02"),
//   Вінниця: new Date("2024-07-21"),
//   Одеса: new Date("2024-07-15"),
//   Хмельницький: new Date("2023-04-18"),
//   Харків: new Date("2023-07-10"),
// };
// const cities = Object.keys(concerts);
// const newConcerts = cities.filter(city => concerts[city] > new Date()).toSorted((a, b) => a.localeCompare(b));
// console.log(newConcerts);

//1. Створи клас User для створення користувача з такими властивостями:
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. конструктор очікує 1 параметр - об'єкт налаштувань з однойменними властивостями
//Додай метод getInfo(), який повертає рядок:
//`Користувачеві <name> <age> років і в нього <posts> публікацій.`

//class User {
  //constructor(obj) {
    //this.userName = obj.name;
    //this.age = obj.age;
    //this.numberOfPost = obj.numberOfPost;
  //}
  //getInfo() {
    //return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numberOfPost} публікацій.`
  //}
//}

//const user = new User({ name: 'Nazar', age: 20, numberOfPost: 4 })
//console.log(user.getInfo());


//3. Напиши класс Notes який управляє коллекцієй нотаток у
//властивості items.
//Нотатка це  об'єкт з властивостями text, priority
//Додай класу статичну властивість Priority,
//в якій буде зберігатись об'єкт з пріорітетами ("hight", "middle", "low").
//Додай методи addNote(note), removeNote(noteText)
//updatePriority(noteText, newPriority)

class Notes {
  static Priority = {
    HIGHT: 'hight',
    MIDDLE: 'middle',
    LOW: 'low',
  }
  constructor() {
    this.items = [];
  }
  addNote(note) { 
    this.items.push(note);
  }
  removeNote(noteText) {
    this.items = this.items.filter(item => item.text !== noteText);
  }
  updatePriority(noteText, newPriority) {
    const note = this.items.find(item => item.text === noteText) 
      if (note) {
        note.priority = newPriority;
     }
  }
}
const note = new Notes();
console.log(note);
 note.addNote({ text: "Note1", priority: Notes.Priority.LOW });
 note.addNote({ text: "Note2", priority: Notes.Priority.LOW });
 note.addNote({ text: "Note3", priority: Notes.Priority.HIGHT });
 note.updatePriority("Note2", Notes.Priority.MIDDLE );
 note.updatePriority("Note3", Notes.Priority.MIDDLE );
note.removeNote("Note1");
console.table(note.items);

//2. Напиши класс Client який створює об'єкт
//із властивостями login, email
//Об'яви приватні властивості #login і #email,
//доступ до яких зроби через геттер и сеттер:
// get getClientData() має повертати об'єкт з переліченими властивостями
// set changeEmail(newEmail) перезаписує пошту користувача

// 4. Створити клас Worker, у якого є властивості name, age, salary.
//У класу Worker є метод getSalary, який повертає повідомлення
//"Worker <name> has salary <salary> dollars"
//Створити клас WorkerPosition, у якого є властивість position
//і який успадковує клас Worker, додаючи метод getPosition
// який повертає повідомлення "<name> works as <position>"

// Reverse. Напишіть функцію, яка розгортає масив у зворотному порядку.
// Будь ласка, не використовуйте array.reverse(), щоб зробити завдання цікавішим.
// const data = [10, 20, 30, 40, 50, 60];
// const alphData = ["a", "b", "c", "d", "e"];

// Знайти найдорожчий продукт у категорії "meat"
// Напиши для цього функцію getMostExpensiveMeatProduct(products)
// const products = [
//   { name: 'Apple', category: 'fruits', price: 1.2, stock: 50 },
//   { name: 'Banana', category: 'fruits', price: 0.8, stock: 100 },
//   { name: 'Carrot', category: 'vegetables', price: 0.5, stock: 200 },
//   { name: 'Broccoli', category: 'vegetables', price: 1.0, stock: 150 },
//   { name: 'Milk', category: 'dairy', price: 1.5, stock: 20 },
//   { name: 'Cheese', category: 'dairy', price: 2.5, stock: 5 },
//   { name: 'Chicken', category: 'meat', price: 5.0, stock: 30 },
//   { name: 'Beef', category: 'meat', price: 7.0, stock: 25 }
// ];

// Є масив чисел, наприклад: arr = [1,2,3,4,5]
// Напишіть функцію getSums(arr), яка повертає масив його часткових сум.
// Іншими словами, виклик getSums(arr) має повертати новий масив з такої ж
// кількості елементів, в якому на кожній позиції буде сума елементів масива
// до цієї позиції включно
// Наприклад: для arr = [1,2,3,4,5]
// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
// Функція не має змінювати вхідний масив
