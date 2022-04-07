function loadEvents() {
  // Events for my arrows
  const buttons = document.querySelectorAll('.arrow');
  buttons.forEach((element) => {
    element.addEventListener('click', (e) => {
      // Clear Interval from the Loop Image Carousel
      // Create array with all my images
      const imageContainer = document.querySelector('#imageContainer');
      const arrayOfImages = [...imageContainer.children];
      console.log(arrayOfImages);

      // Check current index
      const activeImage = document.querySelector('[data-status]');
      let currentIndex = arrayOfImages.findIndex((ele) => ele === activeImage);
      console.log(currentIndex);
      // Remove display image
      activeImage.removeAttribute('data-status');
      // Remove current navDot highlighted
      const navDots = [...document.querySelector('#markerContent').children];
      navDots[currentIndex].removeAttribute('data-highlight');
      //
      // Check what button action is press
      const btnAction = e.target.getAttribute('data-state');
      // Move Index depending on button

      if (btnAction === 'next') {
        currentIndex += 1;
      }
      if (btnAction === 'prev') {
        currentIndex -= 1;
      }
      // Reset Index if it gets bigger than array length
      console.log(arrayOfImages.length);
      if (currentIndex > arrayOfImages.length - 1) { currentIndex = 0; }
      // Return to last if index is lower than 0
      if (currentIndex < 0) {
        currentIndex = arrayOfImages.length - 1;
      }
      // Display Next image
      arrayOfImages[currentIndex].setAttribute('data-status', 'active');
      // Highlight next navDot
      navDots[currentIndex].setAttribute('data-highlight', 'on');
    });
  });

  // Load events for navigation dots
  const navDots = document.querySelectorAll('.navDot');
  navDots.forEach((element) => {
    element.addEventListener('click', () => {
      const referenceIndex = element.getAttribute('data-index');
      // Remove visible image
      const visibleImage = document.querySelector('[data-status]');
      const arrayOfImages = [...document.querySelector('#imageContainer').children];
      const indexOfVisibleImage = arrayOfImages.findIndex((img) => img === visibleImage);
      arrayOfImages[indexOfVisibleImage].removeAttribute('data-status');
      // Remove navDot highlight
      const navDotsArray = [...navDots];
      navDotsArray[indexOfVisibleImage].removeAttribute('data-highlight');
      // Display new visible image
      arrayOfImages[referenceIndex].setAttribute('data-status', 'active');
      navDotsArray[referenceIndex].setAttribute('data-highlight', 'on');
    });
  });
}
export default loadEvents;
