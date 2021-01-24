const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createListItem = item => {
  const itemRef = document.createElement('li');
  itemRef.textContent = item;
  return itemRef;
};
const ingredientsList = ingredients.map(ingredient => createListItem(ingredient));

const listRef = document.querySelector('ul#ingredients');
listRef.append(...ingredientsList);