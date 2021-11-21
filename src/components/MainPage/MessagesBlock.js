import React, { useEffect, useRef } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import scrollTo, { BEHAVIOR } from '../../utils/scrollTo';
import Message, { LAST_MESSAGE_ID } from './Message';

const styles = makeStyles(() => ({
  root: {
    height: 'calc(100vh - (20px * 2 + 48px + 62px))',
    border: '1px solid lightgray',
    borderWidth: '0 1px',
    overflowY: 'auto',
  },
}));

function MessagesBlock({ users, messages, messagesOrder, newMessages }) {
  const classes = styles();
  const messagesRef = useRef();

  useEffect(() => {
    messagesOrder.length &&
      document.getElementById(LAST_MESSAGE_ID) &&
      scrollTo({ scrollItem: messagesRef.current, anchor: LAST_MESSAGE_ID, behavior: BEHAVIOR.instant });
  }, [messagesOrder]);

  return (
    <div className={classes.root} ref={messagesRef}>
      {messagesOrder.map((id, idx) => {
        const message = messages[id];
        // const message = messages[messages.length - 1 - idx];

        return (
          <Message
            key={id}
            users={users}
            {...message}
            num={messagesOrder.length - 1 - idx}
            isNew={newMessages.has(id)}
            isLast={idx === messagesOrder.length - 1}
          />
        );
      })}
    </div>
  );
}

export default MessagesBlock;
