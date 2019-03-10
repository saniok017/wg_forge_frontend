import { sortBy } from 'lodash';
import data from './reorganizeData';
import makeTable from './makeTable';

function addListeners() {
  document.getElementById('tableBody').addEventListener('click', (event) => {
    if (event.target.classList.value === 'toggle-link') {
      event.preventDefault();
      event.target.nextElementSibling.classList.toggle('none');
    }
  });

  document.getElementById('tableHead').addEventListener('click', (event) => {
    if (event.target.innerText !== 'Card Number') {
      let table = {};
      let orders = [];
      switch (event.target.firstChild.nodeValue) {
        case 'Order Amount':
          orders = sortBy(data.orders, [o => +o.total]);
          break;
        case 'User Info':
          orders = sortBy(data.orders, ['userData.first_name', 'userData.last_name']);
          break;
        case 'Order Date':
          orders = sortBy(data.orders, [o => +o.created_atForSort]);
          break;
        case 'Transaction ID':
          orders = sortBy(data.orders, ['transaction_id']);
          break;
        case 'Card Type':
          orders = sortBy(data.orders, ['card_type']);
          break;
        case 'Location':
          orders = sortBy(data.orders, ['order_country', 'order_ip']);
          break;
        default:
          orders = data.orders.slice();
          break;
      }
      table = makeTable(
        {
          orders,
          sortedColumn: event.target.firstChild.nodeValue,
          statistic: data.statistic,
        },
      );
      document.getElementById('app').innerHTML = table;
      addListeners();
    }
  });
}

export default addListeners;
