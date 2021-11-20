import React from 'react';
import { connect } from 'react-redux';

import { actions } from '../actions/appActions';

function MainPage({ users, fetchUsers }) {
  function handleClick() {
    fetchUsers();
  }

  return (
    <div>
      <p>Hello</p>
      <div>
        {users.map((user) => {
          return (
            <p>
              {user.name}
              <br />
              {user.email}
            </p>
          );
        })}
      </div>
      <button onClick={handleClick}>run</button>
    </div>
  );
}

const mapConnect = [
  ({ app: { users } }) => {
    return {
      users,
    };
  },
  (dispatch) => ({
    fetchUsers: () => dispatch(actions.fetchUsers),
  }),
];

export default connect(...mapConnect)(MainPage);
