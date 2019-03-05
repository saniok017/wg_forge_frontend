import { template } from 'lodash';
import orders from '../data/orders'

function makeTable() {
    console.log(orders)
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
        <% orders.forEach(function(order) { %> \
            <tr id="order_<%-order.id%>"> \
                <td><%-order.transaction_id%></td> \
                <td class="user_data"><%-order.user_id%></td>\
                <td>21/12/2017, 1:13:47 AM</td>\
                <td>$<%-order.total%></td>\
                <td><%-order.card_number%></td>\
                <td><%-order.card_type%></td>\
                <td>IS (<%-order.order_ip%>)<td>\
            </tr>\
        <% }); %> \
        <tbody>\
        </tbody>\
    </table>'))({orders})
}

export default makeTable;
