function imageLoop() {
  // Create array with all my images
  const imageContainer = document.querySelector('#imageContainer');
  const arrayOfImages = [...imageContainer.children];
  // Check current index
  const activeImage = document.querySelector('[data-status]');
  let currentIndex = arrayOfImages.findIndex((ele) => ele === activeImage);
  // Remove display image
  activeImage.removeAttribute('data-status');
  // Remove navDotHighlight
  const currentDataIndex = arrayOfImages[currentIndex].getAttribute('data-index');
  console.log(currentDataIndex);
  const navDots = [...document.querySelector('#markerContent').children];
  navDots[currentDataIndex].removeAttribute('data-highlight');
  // update currentIndex
  currentIndex += 1;
  if (currentIndex > arrayOfImages.length - 1) { currentIndex = 0; }
  // Display Next image
  arrayOfImages[currentIndex].setAttribute('data-status', 'active');
  // highlight next navDot
  navDots[currentIndex].setAttribute('data-highlight', 'on');
}

export default imageLoop;
