function imageLoop() {
  // Create array with all my images
  const imageContainer = document.querySelector('#imageContainer');
  const arrayOfImages = [...imageContainer.children];
  // Check current index
  const activeImage = document.querySelector('[data-status]');
  let currentIndex = arrayOfImages.findIndex((ele) => ele === activeImage);
  console.log(currentIndex);
  // Remove display image
  activeImage.removeAttribute('data-status');
  currentIndex += 1;
  if (currentIndex > arrayOfImages.length - 1) { currentIndex = 0; }
  // Display Next image
  arrayOfImages[currentIndex].setAttribute('data-status', 'active');
}

export default imageLoop;
