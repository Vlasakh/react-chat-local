import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = makeStyles(() => ({
  root: {
    display: 'flex',
    padding: 10,
    border: '1px solid lightgray',
  },
  input: {
    width: '100%',
    paddingRight: 10,
  },
}));

function InputBlock() {
  const classes = styles();

  return (
    <div className={classes.root}>
      <TextField className={classes.input} label="Message" variant="outlined" size="small" />
      <div>
        <Button variant={'contained'} color="primary">
          Send
        </Button>
      </div>
    </div>
  );
}

export default InputBlock;
