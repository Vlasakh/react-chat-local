export const actions = {
  FETCH_USERS: 'FETCH_USERS',
};

actions.fetchUsers = (dispatch, getState) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((payload) => dispatch({ type: actions.FETCH_USERS, payload }));
};
