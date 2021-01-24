const inputRef = document.querySelector('#validation-input');

const validation = () => {
  if (inputRef.value.length >= Number(inputRef.dataset.length)) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
    return;
  }

  inputRef.classList.add('invalid');
  inputRef.classList.remove('valid');
};

inputRef.addEventListener('blur', validation);