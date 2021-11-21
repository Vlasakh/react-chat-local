import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
    height: 48,
    border: '1px solid lightgray',
  },
}));

function HeadBlock({ currentUser }) {
  const classes = styles();

  return (
    <div className={classes.root}>
      Current user -&nbsp;<b>{currentUser.name}</b>
    </div>
  );
}

export default HeadBlock;
