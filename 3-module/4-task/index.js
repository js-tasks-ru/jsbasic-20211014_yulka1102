function showSalary(users, age) {
  let str = '';
  let finalStr = users.filter(user => user.age <= age)
  .map(user => str = `${user.name}, ${user.balance}`)
  .join('\n');
  return finalStr
}