const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const changeStyle = () => textRef.style.fontSize = `${inputRef.value}px`;

inputRef.addEventListener('input', changeStyle);