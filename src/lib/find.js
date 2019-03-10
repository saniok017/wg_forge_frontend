import findMedian from './findMedian';
import findAverage from './findAverage';

const find = (request, data) => {
  let ordersTotal = 0;
  const arrayForMedianCalculation = [];
  const ordersByGender = { male: [], female: [] };
  const filteredArray = data.orders.filter((order) => {
    if (order.userData.first_name.toLowerCase().includes(request.toLowerCase())) return order;
    if (order.userData.last_name.toLowerCase().includes(request.toLowerCase())) return order;
    if (order.id.toString().includes(request.toString())) return order;
    if (order.transaction_id.toLowerCase().includes(request.toLowerCase())) return order;
    if (order.user_id.toString().includes(request.toString())) return order;
    if (order.total.toString().includes(request.toString())) return order;
    if (order.card_type.toLowerCase().includes(request.toLowerCase())) return order;
    if (order.order_country.toLowerCase().includes(request.toLowerCase())) return order;
    if (order.order_ip.toString().includes(request.toString())) return order;
    return false;
  });

  filteredArray.forEach((currentUser) => {
    ordersTotal += parseFloat(currentUser.total);
    arrayForMedianCalculation.push(currentUser.total);
    if (currentUser.userData.gender === 'Male') ordersByGender.male.push(currentUser.total);
    else ordersByGender.female.push(currentUser.total);
  });

  const statistic = {
    ...data.statistic,
    ordersTotal,
    median: findMedian(arrayForMedianCalculation),
    maleAverage: findAverage(ordersByGender.male),
    femaleAverage: findAverage(ordersByGender.female),
  };

  return {
    ...data,
    orders: filteredArray,
    statistic,
  };
};

export default find;
