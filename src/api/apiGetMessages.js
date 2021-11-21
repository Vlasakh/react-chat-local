export async function apiGetMessages(start, count) {
  let messages = [];

  try {
    messages = localStorage.getItem('messages');
    messages = JSON.parse(messages);
    // console.log('messages ', { messages });
    messages = messages.slice(-count, start ? -start : undefined);
    // console.log('messages ', { count, start });
  } catch (e) {
    console.error('Error while getting messages', e.message);
  }

  return {
    messages,
  };
}
