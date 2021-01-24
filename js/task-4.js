const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const counterValueRef = document.querySelector('span#value');
let counterValue = Number(counterValueRef.textContent);

const decrement = () => counterValue -= 1;
const increment = () => counterValue += 1;

decrementBtnRef.addEventListener('click', () => {
  decrement();
  counterValueRef.textContent = counterValue;
});

incrementBtnRef.addEventListener('click', () => {
  increment();
  counterValueRef.textContent = counterValue;
});