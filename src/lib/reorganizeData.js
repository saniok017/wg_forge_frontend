import usersJSON from '../../data/users.json';
import ordersJSON from '../../data/orders';
import companiesJSON from '../../data/companies.json';
import findMedian from './findMedian';
import findAverage from './findAverage';
import convertTime from './convertTime';

const users = {};
const companies = {};
let statistic = { ordersTotal: 0 };
const arrayForMedianCalculation = [];
// some joke here
const chauvinisticCalculationObject = { male: [], else: [] };

companiesJSON.forEach((company) => {
  companies[company.id] = company;
});

usersJSON.forEach((user) => {
  users[user.id] = user;
  users[user.id].birthday = convertTime(user.birthday, true);
  users[user.id].companyData = companies[user.company_id];
});

const orders = ordersJSON.map((currentUser) => {
  statistic.ordersTotal += parseFloat(currentUser.total);
  arrayForMedianCalculation.push(currentUser.total);
  if (users[currentUser.user_id].gender === 'Male') chauvinisticCalculationObject.male.push(currentUser.total);
  else chauvinisticCalculationObject.else.push(currentUser.total);
  return {
    ...currentUser,
    card_number: `${currentUser.card_number.slice(0, 2)}********${currentUser.card_number.substr(-4, 4)}`,
    created_at: convertTime(currentUser.created_at),
    created_atForSort: currentUser.created_at,
    userData: users[currentUser.user_id],
  };
});

statistic = {
  ...statistic,
  median: findMedian(arrayForMedianCalculation),
  maleAverage: findAverage(chauvinisticCalculationObject.male),
  femaleAverage: findAverage(chauvinisticCalculationObject.else),
};

export default { orders, sortedColumn: null, statistic };
