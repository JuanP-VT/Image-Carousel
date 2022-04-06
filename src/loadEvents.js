function loadEvents() {
  const buttons = document.querySelectorAll('.arrow');
  buttons.forEach((element) => {
    element.addEventListener('click', (e) => {
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
      // Reset Index if it gets bigger than array lenght
      console.log(arrayOfImages.length);
      if (currentIndex > arrayOfImages.length - 1) { currentIndex = 0; }
      // Display Next image
      arrayOfImages[currentIndex].setAttribute('data-status', 'active');
    });
  });
}
export default loadEvents;
