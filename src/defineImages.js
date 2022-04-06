import img1 from './img/chris-bair-A10y2Eq7OHY-unsplash.jpg';
import img2 from './img/dolo-iglesias-FjElUqGfbAw-unsplash.jpg';
import img3 from './img/dolo-iglesias-z9z6u1rn7sY-unsplash.jpg';
import img4 from './img/donald-giannatti-7lbzwVoEh9c-unsplash.jpg';
import img5 from './img/john-matychuk-gUK3lA3K7Yo-unsplash.jpg';

function defineImages() {
  const allImages = [];
  const file1 = new Image();
  file1.src = img1;
  file1.classList.add('img');

  const file2 = new Image();
  file2.src = img2;
  file2.classList.add('img');

  const file3 = new Image();
  file3.src = img3;
  file3.classList.add('img');

  const file4 = new Image();
  file4.src = img4;
  file4.classList.add('img');

  const file5 = new Image();
  file5.src = img5;
  file5.classList.add('img');
  file1.setAttribute('data-status', 'active');
  allImages.push(file1, file2, file3, file4, file5);

  return allImages;
}
export default defineImages;
