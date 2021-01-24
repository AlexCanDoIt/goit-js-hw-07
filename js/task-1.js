console.log('Task #1');

const listRef = document.querySelector('ul#categories');
const itemRef = listRef.querySelectorAll('li.item');

console.log(`В списке ${itemRef.length} категории.`);

itemRef.forEach((item, idx) => {
  const hesder = item.querySelector('h2').textContent;
  const itemsAmount = item.querySelectorAll('li').length;
  
  console.log(`Категория №${idx + 1}: ${hesder}`);
  console.log(`Количество элементов: ${itemsAmount}`);
});
