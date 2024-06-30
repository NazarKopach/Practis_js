// * Масиви: літерал масиву, елементи, індексація, довжина
//  Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.

const styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-рол');

const index = styles.indexOf('Блюз');
console.log(index);
if (index !== -1) {
    styles[index] = 'Класика';
}
console.log(styles.shift());

styles.unshift('Реп', 'Реггі');
console.log(styles);
for (const word of styles) {
    console.log(word);
}
//TODO:=========task-1=================
// Знайти всі елементи масиву, що містять задану підстроку, та об'єднати їх у новий масив, після чого вивести у консоль лог повідомлення "Масив елементів, що містять підстроку substring: ..." Результат повинен бути розділений комами та пробілами.(використати indexOf)

const wordsArray = ['JavaScript', 'HTML', 'CSS', 'React'];
const substring = 'S';
function findSubString(array, sub) {
    const newArray = [];
    for (const word of array) {
        if (word.toLowerCase().indexOf(sub.toLowerCase()) !== -1) {
            newArray.push(word);
        }
    } 
    return `Масив елементів, що містять підстроку ${sub}: ${newArray.join(', ')}`;
}
console.log(findSubString(wordsArray, substring));