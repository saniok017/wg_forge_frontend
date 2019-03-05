import makeTable from './makeTable';

export default (function () {
  const table = makeTable();
  document.getElementById('app').innerHTML = table;
}());
