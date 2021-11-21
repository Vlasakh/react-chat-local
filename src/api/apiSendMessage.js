import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

export async function apiSendMessage({ userId, message }) {
  try {
    const id = uuidv4();
    let users = localStorage.getItem('users');
    let messages = localStorage.getItem('messages');

    users = JSON.parse(users);
    messages = JSON.parse(messages);
    messages.push({
      id,
      user: users[userId],
      time: moment(),
      message,
    });
    localStorage.setItem('messages', JSON.stringify(messages));
    localStorage.setItem('eventMessage', `newMessage::${+new Date()}`);
  } catch (e) {
    console.error('Error while sending new message', e.message);
    return;
  }

  return true;
}
