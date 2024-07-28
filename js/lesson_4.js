// // Створити список
// // Створити кнопки Add, Remove, які будуть змінювати склад списку
// // Створити input, з якого отримаємо значення, що буде передано в li
// // Парним лі вказати жовтий фон, непарним синій
// // Використовуй createElement

// const listEl = document.createElement('ul');

// const addBtnEl = document.createElement('button');
// const removeBtnEl = document.createElement('button');
// const inputEl = document.createElement('input');
// addBtnEl.textContent = 'Add';
// removeBtnEl.textContent = 'Remove';

// document.body.append(inputEl, addBtnEl, removeBtnEl, listEl);

// const createBtnClick = event => {
// 	if (inputEl.value.trim() === '') {
// 		return;
// 	}

// 	const itemEl = document.createElement('li');
// 	itemEl.textContent = inputEl.value.trim();
// 	listEl.append(itemEl);

// 	// if (listEl.children.length % 2 === 0) {
// 	// 	itemEl.style.backgroundColor = 'yellow';
// 	// } else {
// 	// 	itemEl.style.backgroundColor = 'blue';
// 	// }
// 	itemEl.style.backgroundColor = listEl.children.length % 2 === 0 ? 'yellow' : 'blue';

// 	inputEl.value = '';
// }

// const removeBtnClick = event => {
// 	if (listEl.lastElementChild) {
// 		listEl.lastElementChild.remove();
// 	}

// }

// addBtnEl.addEventListener('click', createBtnClick)
// removeBtnEl.addEventListener('click', removeBtnClick)

// Створити розмітку на основі масива даних, де у кожного елемента списку
// буде вказано ім'я, кількість лайків і перелічені теги
// в index.html додайте список ul.stats, в який буде рендеритись цей список
// const tweets = [
//   { id: "000", name: "Alex", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", name: "Oleh", likes: 2, tags: ["html", "css"] },
//   { id: "002", name: "Ihor", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", name: "Borys", likes: 8, tags: ["css", "react"] },
//   { id: "004", name: "Jhon", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// const tweetsList = document.querySelector(".stats");
// function createHtml(array) {
// 	return array.map(({name, likes,tags}) => `<li>
//         <P>Name: ${name}</P>
//         <P>Likes: ${likes}</P>
//         <P>Tags: ${tags.join(", ")}</P>
//       </li>`).join("");

// }
// const markup = createHtml(tweets);
// tweetsList.innerHTML = markup;

// Створити невелику гру
// Спочатку на екрані з'являється якась фігура рандомного коліру в рандомному місті
// Натискаючі на фігуру, вона змінює свою форму, колір, місце розташування
// const forms = [
//   "width: 100px; height: 100px; border-width: 1px;",
//   "width: 100px; height: 100px; border-radius: 50%;",
//   "width: 150px; height: 100px; border-width: 1px;",
//   "width: 200px; height: 100px; border-radius: 100px / 50px; ",
//   "width: 150px; height: 100px; transform: skew(20deg)",
// ];
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// function randomither(max) {
//   return Math.floor(Math.random() * max);
// }
// const form = document.createElement("div");
// changeForm();
// document.body.append(form);

// function changeForm() {
//   form.style.cssText = forms[randomither(forms.length)];
//   form.style.backgroundColor = getRandomHexColor();
//   form.style.position = "absolute";
//   form.style.top = `${randomither(100)}%`;
//   form.style.left = `${randomither(100)}%`;
// }

// form.addEventListener("click", changeForm)

//  При натисканні на будь-який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.
//  "Ви вибрали <product> за <price>".

const tableEl = document.querySelector("#productTable");
const productDetails = document.querySelector("#productDetails");
const showMessage = (event) => {
  if (event.target.nodeName !== "TD") return;
  const parent = event.target.parentNode;
  const product = parent.firstElementChild.textContent;
  const price = parent.lastElementChild.textContent;
  productDetails.textContent = `Ви вибрали ${product.toLowerCase()} за ${price}`;
};

tableEl.addEventListener("click", showMessage);
