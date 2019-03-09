import usersJSON from '../data/users.json';
import ordersJSON from '../data/orders';
import companiesJSON from '../data/companies.json';

function timeConverter(unixTimestamp, onlyDate) {
  if (!unixTimestamp) return 'NA';
  const time = new Date(unixTimestamp * 1000);
  if (onlyDate) return time.toLocaleDateString('en-US');
  return `${time.toLocaleDateString('en-US')}, ${time.toLocaleTimeString('en-US')}`;
}

const users = {};
const companies = {};

companiesJSON.forEach((company) => {
  companies[company.id] = company;
});

usersJSON.forEach((user) => {
  users[user.id] = user;
  users[user.id].birthday = timeConverter(user.birthday, true);
  users[user.id].companyData = companies[user.company_id];
});

const orders = ordersJSON.map(currentUser => (
  {
    ...currentUser,
    card_number: `${currentUser.card_number.slice(0, 2)}********${currentUser.card_number.substr(-4, 4)}`,
    created_at: timeConverter(currentUser.created_at),
    userData: users[currentUser.user_id],
  }
));

console.log(orders);

export default { orders };
