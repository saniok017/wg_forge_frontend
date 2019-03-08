/* eslint-disable no-multi-str */
import 'bootstrap';
import { template } from 'lodash';
import data from './reorganizeData';

function makeTable() {
  return (template('<table class="table">\
    <thead class="thead-dark">\
        <tr>\
            <th scope="col">Transaction ID</th>\
            <th scope="col">User Info</th>\
            <th scope="col">Order Date</th>\
            <th scope="col">Order Amount</th>\
            <th scope="col">Card Number</th>\
            <th scope="col">Card Type</th>\
            <th scope="col">Location</th>\
        </tr>\
    </thead>\
    <tbody>\
    <% orders.forEach(function(order) { %> \
        <tr id="order_<%-order.id%>"> \
            <td><%-order.transaction_id%></td> \
            <td class="user_data">\
                <a href="#">\
                    <%-users[order.user_id].gender === "Male" ? "Mr." : "Ms."%>\
                    <%-users[order.user_id].first_name%>\
                    <%-users[order.user_id].last_name%>\
                </a>\
            </td>\
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
