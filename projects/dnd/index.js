/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
import './dnd.html';

const homeworkContainer = document.querySelector('#app');

function random(from, to) {
  return parseInt(from + Math.random() * to - from);;
}

let currentDrag;
let startX = 0;
let startY = 0;

document.addEventListener('mousemove', (e) => {
  if (currentDrag == true) {
    currentDrag.style.left = e.clientX - startX + 'px';
    currentDrag.style.top = e.clientY - startY + 'px';
  } 
});

export function createDiv() {
  let div = document.createElement('div');
  let minNum = 20;
  let maxNum = 200;
  let maxColor = 0xffffff;

  div.className = 'draggable-div';
  div.style.background = "#" + random(0, maxColor).toString(16);
  div.style.left = random(0, window.innerWidth) + 'px';
  div.style.top = random(0, window.innerHeight) + 'px';
  div.style.width = random(minNum, maxNum) + 'px';
  div.style.height = random(minNum, maxNum) + 'px';

  div.addEventListener ('mousedown', function (event) {
    currentDrag = div;
    startX = event.offsetX;
    startY = event.offsetY;
  });

  div.addEventListener('mouseup', () => (currentDrag = false));

  return div;
}


const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
  const div = createDiv();
  homeworkContainer.appendChild(div);
});
