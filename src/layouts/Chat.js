import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => ({
  main: {
    padding: 20,
  },
}));

function Chat({ children }) {
  const classes = styles();

  return <div className={classes.main}>{children}</div>;
}

export default Chat;
