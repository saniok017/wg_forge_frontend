import usersJSON from '../data/users.json';
import ordersJSON from '../data/orders';

function timeConverter(unixTimestamp) {
  const time = new Date(unixTimestamp * 1000);
  return `${time.toLocaleDateString('en-US')}, ${time.toLocaleTimeString('en-US')}`;
}

const users = {};
const orders = ordersJSON.map(currentUser => (
  {
    ...currentUser,
    card_number: `${currentUser.card_number.slice(0, 2)}********${currentUser.card_number.substr(-4, 4)}`,
    created_at: timeConverter(currentUser.created_at),
  }
));

usersJSON.forEach((user) => {
  users[user.id] = user;
});

export default { orders, users };
