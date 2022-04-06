function initPage(myImages) {
  const imageContainer = document.querySelector('#imageContainer');
  myImages.forEach((element) => {
    imageContainer.appendChild(element);
  });
}
export default initPage;
