import arrowRight from './img/icon/arrow-right-thick.png';
import arrowLeft from './img/icon/arrow-left-thick.png';

function InitPage() {
  // Define arrow icons src
  const right = new Image();
  right.src = arrowRight;
  right.classList.add('arrow');
  const left = new Image();
  left.src = arrowLeft;
  left.classList.add('arrow');
  // Append arrows
  const leftSide = document.querySelector('#left');
  leftSide.appendChild(left);
  const rightSide = document.querySelector('#right');
  rightSide.appendChild(right);
}

export default InitPage;
