import makeTable from './makeTable';
import './css/reset.css';
import './css/style.css';

export default (function () {
  const table = makeTable();
  document.getElementById('app').innerHTML = table;
}());

document.getElementById('tableBody').addEventListener('click', (event) => {
  if (event.target.classList.value === 'toggle-link') {
    event.preventDefault();
    event.target.nextElementSibling.classList.toggle('none');
  }
});
