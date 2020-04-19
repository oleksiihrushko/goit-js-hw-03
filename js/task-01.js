const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = !user.premium;

const keys = Object.keys(user); // ["name", "stars", "capacity"]

for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}
