/* eslint-disable no-multi-str */
import { template } from 'lodash';
import data from './reorganizeData';

function makeTable() {
  return (template('<table>\
    <thead>\
        <tr>\
            <th>Transaction ID</th>\
            <th>User Info</th>\
            <th>Order Date</th>\
            <th>Order Amount</th>\
            <th>Card Number</th>\
            <th>Card Type</th>\
            <th>Location</th>\
        </tr>\
    </thead>\
    <tbody>\
    <% orders.forEach(function(order) { %> \
        <tr id="order_<%-order.id%>"> \
            <td><%-order.transaction_id%></td> \
            <td class="user_data"><%-order.user_id%></td>\
            <td><%-order.created_at%></td>\
            <td>$<%-order.total%></td>\
            <td><%-order.card_number%></td>\
            <td><%-order.card_type%></td>\
            <td><%-order.order_country%> (<%-order.order_ip%>)<td>\
        </tr>\
    <% }); %> \
    </tbody>\
</table>'))(data);
}

export default makeTable;
