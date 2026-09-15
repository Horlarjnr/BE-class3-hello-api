const users: Array<{ name: string; email: string; message: string }> = [];

export const greetings = () => {
  return `Hello and welcome!`;
};

export const addUser = (name: string, email: string) => {
  const user = { name, email, message: 'User added successfully!' };
  users.push(user);
  return user;
};

export const getUsers = () => users;
