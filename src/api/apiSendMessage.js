export async function apiSendMessage() {
  const users = localStorage.getItem('users');

  return {
    users: JSON.parse(users),
  };
}
