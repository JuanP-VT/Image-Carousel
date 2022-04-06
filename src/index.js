import defineImages from './defineImages';
import imageLoop from './imageLoop';
import initPage from './initPage';
import loadEvents from './loadEvents';
import './style.css';

const myImages = defineImages();
initPage(myImages);
const myInterval = setInterval(imageLoop, [5000]);
loadEvents(myInterval);
