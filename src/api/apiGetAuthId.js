import { v4 as uuidv4 } from 'uuid';

export async function apiGetAuthId(name) {
  let id;

  try {
    let users = localStorage.getItem('users');

    users = JSON.parse(users);

    let user = Object.entries(users).find(([, user]) => user.name === name);

    if (!user) {
      id = uuidv4();
      users[id] = { id, name };
      localStorage.setItem('users', JSON.stringify(users));
    } else {
      id = user[1].id;
    }
  } catch (e) {
    console.error('Error while getting messages', e.message);
    return false;
  }

  return {
    id,
  };
}
