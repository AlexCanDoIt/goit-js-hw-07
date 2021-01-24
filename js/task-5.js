const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const onInput = () => {
  outputRef.textContent = inputRef.value ? inputRef.value : 'незнакомец';
};

inputRef.addEventListener('input', onInput);