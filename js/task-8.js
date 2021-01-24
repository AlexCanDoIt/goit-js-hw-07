const controlPanelRef = document.querySelector('#controls');
const inputNumberRef = controlPanelRef.querySelector('input');
const renderBtnRef = controlPanelRef.querySelector('button[data-action="render"]');
const destroyBtnRef = controlPanelRef.querySelector('button[data-action="destroy"]');
const boxesConteinerRef = document.querySelector('#boxes');

const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
const getRandomRGB = () => `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;

// const createBoxes = amount => {
//   for (let i = 0; i < amount; i += 1) {
//     const boxRef = document.createElement('div');

//     boxRef.style.backgroundColor = getRandomRGB();
//     boxRef.style.width = `${30 + (i * 10)}px`;
//     boxRef.style.height = `${30 + (i * 10)}px`;
    
//     boxesConteinerRef.append(boxRef);
//   };
// };

const createBoxes = amount => {
  for (let i = 0; i < amount; i += 1) {
    const boxRef = document.createElement('div');

    boxRef.style.cssText = `width: ${30 + (i * 10)}px; height: ${30 + (i * 10)}px; background-color: ${getRandomRGB()};`
    
    boxesConteinerRef.append(boxRef);
  };
};

const destroyBoxes = () => {
  const boxesRef = boxesConteinerRef.querySelectorAll('div');
  boxesRef.forEach(box => box.remove());
}

renderBtnRef.addEventListener('click', () => createBoxes(Number(inputNumberRef.value)));
destroyBtnRef.addEventListener('click', destroyBoxes);