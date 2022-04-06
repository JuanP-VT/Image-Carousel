import defineImages from './defineImages';
import initPage from './initPage';
import loadEvents from './loadEvents';
import './style.css';

const myImages = defineImages();
initPage(myImages);
loadEvents();
