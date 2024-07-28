// Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement

const listEl = document.createElement('ul');

const addBtnEl = document.createElement('button');
const removeBtnEl = document.createElement('button');
const inputEl = document.createElement('input');
addBtnEl.textContent = 'Add';
removeBtnEl.textContent = 'Remove';

document.body.append(inputEl, addBtnEl, removeBtnEl, listEl);

const createBtnClick = event => {
	if (inputEl.value.trim() === '') {
		return;
	}

	const itemEl = document.createElement('li');
	itemEl.textContent = inputEl.value.trim();
	listEl.append(itemEl);

	// if (listEl.children.length % 2 === 0) {
	// 	itemEl.style.backgroundColor = 'yellow';
	// } else {
	// 	itemEl.style.backgroundColor = 'blue';
	// }
	itemEl.style.backgroundColor = listEl.children.length % 2 === 0 ? 'yellow' : 'blue';

	inputEl.value = '';
}

const removeBtnClick = event => {
	if (listEl.lastElementChild) {
		listEl.lastElementChild.remove();
	}
	
}

addBtnEl.addEventListener('click', createBtnClick)
removeBtnEl.addEventListener('click', removeBtnClick)

