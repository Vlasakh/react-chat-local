import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
  time: {
    paddingLeft: 30,
    fontSize: 12,
  },
  message: {
    paddingTop: 5,
  },
}));

function Message({ message, time, userId, users, num, isLast }) {
  const classes = styles();

  return (
    <div className={classes.root} id={isLast ? LAST_MESSAGE_ID : ''}>
      <div className={classes.user}>
        <span className={classes.numPos}>
          <div className={classes.num}>#{num + 1} </div>
        </span>
        <span className={classes.userName}>{users[userId].name}</span>
        <span className={classes.time}>{time.format('HH:mm:ss DD MMM YY')}</span>
      </div>
      <div className={classes.message}>{message}</div>
    </div>
  );
}

export default Message;
