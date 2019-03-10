import makeTable from './lib/makeTable';
import './css/reset.css';
import './css/style.css';
import data from './lib/reorganizeData';
import addListeners from './lib/addListeners';


export default (function () {
  const table = makeTable(data);
  document.getElementById('app').innerHTML = table;
  addListeners();
}());
