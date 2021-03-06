import React, { useEffect,  useCallback } from 'react';
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

function MainPage({
  users,
  messages,
  messagesOrder,
  currentUser,
  newMessages,
  fetchMessages,
  fetchSendMsg,
  fetchNewMessages,
}) {
  const classes = styles();

  useEffect(() => {
    const storageListener = (e) => {
      if (e.newValue.startsWith('newMessage')) {
        fetchNewMessages();
      }
    };

    fetchMessages(0, MESSAGES_PAGE_LEN);
    window.addEventListener('storage', storageListener);

    return () => window.removeEventListener('storage', storageListener);
  }, []);

  const handleSendMsg = useCallback((data) => fetchSendMsg({ userId: currentUser.id, ...data }), [currentUser.id]);

  return (
    <div className={classes.root}>
      <a href={'/'} style={{ position: 'absolute', top: 10, right: 10 }}>
        logout
      </a>
      <HeadBlock currentUser={currentUser} />
      <MessagesBlock
        userId={currentUser.id}
        users={users}
        messages={messages}
        messagesOrder={messagesOrder}
        newMessages={newMessages}
      />
      <InputBlock onSendMsg={handleSendMsg} />
    </div>
  );
}

const mapConnect = [
  ({ app: { users, messages, messagesOrder, currentUser, newMessages } }) => {
    return {
      users,
      messages,
      messagesOrder,
      currentUser,
      newMessages,
    };
  },
  (dispatch) => ({
    fetchMessages: (start, count) => dispatch(actions.fetchMessages(start, count)),
    fetchSendMsg: (data) => dispatch(actions.fetchSendMsg(data)),
    fetchNewMessages: () => dispatch(actions.fetchNewMessages),
  }),
];

export default connect(...mapConnect)(MainPage);
