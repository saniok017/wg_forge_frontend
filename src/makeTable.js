/* eslint-disable no-multi-str */
import 'bootstrap';
import { template } from 'lodash';
import data from './reorganizeData';

function makeTable() {
  return (template('<table class="table table-striped">\
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
    <tbody id="tableBody">\
    <% orders.forEach(function(order) { %> \
        <tr id="order_<%-order.id%>"> \
            <td><%-order.transaction_id%></td> \
            <td class="user_data">\
                <a href="#" class="toggle-link">\
                    <%-order.userData.gender === "Male" ? "Mr." : "Ms."%>\
                    <%-order.userData.first_name%>\
                    <%-order.userData.last_name%>\
                </a>\
                <div class="user-details none">\
                    <p>Birthday: <%-order.userData.birthday%></p>\
                    <p><img src="<%-order.userData.avatar%>" width="100px"></p>\
                    <% if(order.userData.companyData) { %> \
                        <p>Industry: <%-order.userData.companyData.industry%> / <%-order.userData.companyData.sector%></p>\
                        <p>Company: <a href="<%-order.userData.companyData.url%>" target="_blank"><%-order.userData.companyData.title%></a></p>\
                    <% }; %> \
                </div>\
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
