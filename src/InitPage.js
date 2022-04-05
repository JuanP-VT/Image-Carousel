import arrowRight from './img/arrow-right-thick.png';
import arrowLeft from './img/arrow-left-thick.png';
// import circleSmall from './img/circle-small.png';

function InitPage() {
  console.log('hi');
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
