import navIcon from './img/icon/circle-small.png';

function initPage(myImages) {
  const imageContainer = document.querySelector('#imageContainer');
  myImages.forEach((element) => {
    // Append all images from array
    imageContainer.appendChild(element);
    // Create navigation dots
    const navigationBar = document.querySelector('#markerContent');
    const navDot = new Image();
    navDot.src = navIcon;
    const imageIndex = element.getAttribute('data-index');
    if (element.hasAttribute('data-status')) {
      navDot.setAttribute('data-highlight', 'on');
    }
    navDot.setAttribute('data-index', imageIndex);
    navDot.classList.add('navDot');
    navigationBar.appendChild(navDot.cloneNode(true));
  });
}
export default initPage;
