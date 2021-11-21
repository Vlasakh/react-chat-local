import React, { useState, useRef } from 'react';

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

function InputBlock({ onSendMsg }) {
  const classes = styles();
  const [txt, setTxt] = useState('');
  const inputRef = useRef();

  function handleClick() {
    onSendMsg({
      message: txt,
      successCallback: () => {
        setTxt('');
        inputRef.current?.focus();
      },
    });
  }

  return (
    <div className={classes.root}>
      <TextField
        inputRef={inputRef}
        className={classes.input}
        label="Message"
        variant="outlined"
        size="small"
        value={txt}
        onChange={(e) => setTxt(e.target.value)}
      />
      <div>
        <Button disabled={!txt} variant={'contained'} color="primary" onClick={handleClick}>
          Send
        </Button>
      </div>
    </div>
  );
}

export default InputBlock;
