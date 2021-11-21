import { usersData } from './users.data';
import { messagesData } from './messages.data';
import messageGenerator from '../utils/messageGenerator';

export async function apiGetInitialData() {
  // const messages = messageGenerator(1000, usersData);
  // console.log('messages', messages);
  const messages = messagesData;

  localStorage.setItem('messages', JSON.stringify(messages));
  localStorage.setItem('users', JSON.stringify(usersData));
}
