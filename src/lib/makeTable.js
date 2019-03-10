/* eslint-disable no-multi-str */
import 'bootstrap';
import { template } from 'lodash';

function makeTable(data) {
  return (template('<table class="table table-striped">\
    <thead class="thead-dark" id="tableHead">\
        <tr>\
            <th colspan="8">\
                <form class="form-inline">\
                    <div class="form-group mb-2">\
                        <input class="form-control mb-2" type="text" placeholder="Search" aria-label="Search" id="search">\
                        <button class="btn btn-outline-success mb-2" type="submit" id="searchButton">Search</button>\
                    </div>\
                </form>\
            </th>\
        </tr>\
        <tr class="headers">\
            <th scope="col">#</th>\
            <th scope="col">Transaction ID<% if(sortedColumn === "Transaction ID") { %><span>&#8595;</span><% }; %></th>\
            <th scope="col">User Info<% if(sortedColumn === "User Info") { %><span>&#8595;</span><% }; %></th>\
            <th scope="col">Order Date<% if(sortedColumn === "Order Date") { %><span>&#8595;</span><% }; %></th>\
            <th scope="col">Order Amount<% if(sortedColumn === "Order Amount") { %><span>&#8595;</span><% }; %></th>\
            <th scope="col" class="default-cursor">Card Number</th>\
            <th scope="col">Card Type<% if(sortedColumn === "Card Type") { %><span>&#8595;</span><% }; %></th>\
            <th scope="col">Location<% if(sortedColumn === "Location") { %><span>&#8595;</span><% }; %></th>\
        </tr>\
    </thead>\
    <tbody id="tableBody">\
    <% orders.forEach(function(order, index) { %> \
        <tr id="order_<%-order.id%>"> \
            <th scope="row"><%-index + 1 || "n/a"%></th>\
            <td><%-order.transaction_id  || "n/a"%></td> \
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
    <% if(!orders.length) { %> \
        <tr>\
            <td colspan="8">Nothing found</td>\
        </tr>\
    <% }; %> \
        <tr>\
            <th scope="row">Orders Count</td>\
            <td>Average Check</td>\
            <td colspan="2">Average Check (Female)</td>\
            <td colspan="2">Average Check (Male)</td>\
            <td>Orders Total</td>\
            <td>Median Value</td>\
        </tr>\
        <% if(orders.length) { %> \
            <tr>\
                <th scope="row"><%-orders.length%></th>\
                <td>$<%-(statistic.ordersTotal.toFixed(2) / orders.length).toFixed(2)%></td>\
                <td colspan="2">$<%-statistic.femaleAverage.toFixed(2)%></td>\
                <td colspan="2">$<%-statistic.maleAverage.toFixed(2)%></td>\
                <td>$<%-statistic.ordersTotal.toFixed(2)%></td>\
                <td>$<%-statistic.median%></td>\
            </tr>\
        <% } else { %> \
            <tr>\
                <th scope="row">n/a</th>\
                <td>n/a</td>\
                <td colspan="2">n/a</td>\
                <td colspan="2">n/a</td>\
                <td>n/a</td>\
                <td>n/a</td>\
            </tr>\
        <% }; %> \
    </tbody>\
</table>'))(data);
}

export default makeTable;
