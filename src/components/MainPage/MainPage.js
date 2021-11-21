import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { actions } from '../../actions/appActions';
import MessagesBlock from './MessagesBlock';
import InputBlock from './InputBlock';
import HeadBlock from './HeadBlock';

const MESSAGES_PAGE_LEN = 25;

const styles = makeStyles(() => ({
  root: {
    margin: 'auto',
    width: 1000,
  },
}));

function MainPage({ users, messages, messagesOrder, currentUser, fetchMessages }) {
  const classes = styles();

  useEffect(() => {
    fetchMessages(0, MESSAGES_PAGE_LEN);
  }, []);

  function handleClick() {}

  console.log('messages', messages);
  return (
    <div className={classes.root}>
      <a href={'/'} style={{ position: 'absolute', top: 10, right: 10 }}>
        logout
      </a>
      <HeadBlock currentUser={currentUser} />
      <MessagesBlock users={users} messages={messages} messagesOrder={messagesOrder} />
      <InputBlock />
    </div>
  );
}

const mapConnect = [
  ({ app: { users, messages, messagesOrder, currentUser } }) => {
    return {
      users,
      messages,
      messagesOrder,
      currentUser,
    };
  },
  (dispatch) => ({
    fetchMessages: (start, count) => dispatch(actions.fetchMessages(start, count)),
  }),
];

export default connect(...mapConnect)(MainPage);
