import React from 'react';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

export const LAST_MESSAGE_ID = 'id-last-message-js';

const styles = makeStyles((theme) => ({
  root: {
    padding: '20px 20px 20px 50px',
  },
  user: {},
  numPos: {
    position: 'relative',
  },
  num: {
    position: 'absolute',
    top: 2,
    right: 0,
    paddingRight: 7,
    color: 'lightgray',
    fontSize: 12,
  },
  userName: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
  isNew: {
    color: 'orange',
  },
  time: {
    paddingLeft: 30,
    fontSize: 12,
  },
  message: {
    paddingTop: 5,
  },
}));

function Message({ message, time, userId, users, num, isNew, isLast }) {
  const classes = styles();

  return (
    <div className={classes.root} id={isLast ? LAST_MESSAGE_ID : ''}>
      <div className={classes.user}>
        <span className={classes.numPos}>
          <div className={classes.num}>#{num + 1} </div>
        </span>
        <span
          className={clsx({
            [classes.userName]: true,
            [classes.isNew]: isNew,
          })}
        >
          {users[userId].name}
        </span>
        <span className={classes.time}>{time.format('HH:mm:ss DD MMM YY')}</span>
      </div>
      <div className={classes.message}>{message}</div>
    </div>
  );
}

export default Message;
