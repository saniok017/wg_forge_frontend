import { sortBy } from 'lodash';
import data from './reorganizeData';
import makeTable from './makeTable';
import find from './find';

function addListeners(prevState) {
  let state = {
    table: {},
    orders: [],
    currentData: data,
  };

  if (prevState) state = prevState;

  document.getElementById('tableBody').addEventListener('click', (event) => {
    if (event.target.classList.value === 'toggle-link') {
      event.preventDefault();
      event.target.nextElementSibling.classList.toggle('none');
    }
  });

  document.getElementById('tableHead').addEventListener('click', (event) => {
    if (event.target.innerText !== 'Card Number' && event.target.parentElement.classList.value === 'headers') {
      switch (event.target.firstChild.nodeValue) {
        case 'Order Amount':
          state.orders = sortBy(data.orders, [o => +o.total]);
          break;
        case 'User Info':
          state.orders = sortBy(data.orders, ['userData.first_name', 'userData.last_name']);
          break;
        case 'Order Date':
          state.orders = sortBy(data.orders, [o => +o.created_atForSort]);
          break;
        case 'Transaction ID':
          state.orders = sortBy(data.orders, ['transaction_id']);
          break;
        case 'Card Type':
          state.orders = sortBy(data.orders, ['card_type']);
          break;
        case 'Location':
          state.orders = sortBy(data.orders, ['order_country', 'order_ip']);
          break;
        default:
          state.orders = data.orders.slice();
          break;
      }
      state.currentData = {
        orders: state.orders,
        sortedColumn: event.target.firstChild.nodeValue,
        statistic: data.statistic,
      };

      state.table = makeTable(state.currentData);
      document.getElementById('app').innerHTML = state.table;
      addListeners(state);
    }
  });

  document.getElementById('searchButton').addEventListener('click', () => {
    state.searchResult = find(document.getElementById('search').value, state.currentData);
    state.table = makeTable(state.searchResult);
    document.getElementById('app').innerHTML = state.table;
    addListeners(state);
  });
}

export default addListeners;
