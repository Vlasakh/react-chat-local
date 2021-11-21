import moment from 'moment';

export async function apiGetNewMessages(time) {
  let messages;

  try {
    messages = localStorage.getItem('messages');
    messages = JSON.parse(messages);
    // console.log('messages ', { messages });
    messages = messages.filter((msg) => moment(time).unix() < moment(msg.time).unix());
    // console.log('messages ', { count, start });
  } catch (e) {
    console.error('Error while getting new messages', e.message);
    return;
  }

  return {
    messages,
  };
}
