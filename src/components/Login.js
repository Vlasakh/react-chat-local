import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import logo from '../logo.svg';
import { actions } from '../actions/appActions';

const styles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  logo: {
    width: 250,
  },
  resetAll: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    height: 110,
  },
}));

function Login({ currentUser: { id }, fetchInitialData, fetchGetAuthId }) {
  const classes = styles();
  const [name, setName] = useState('');
  const history = useHistory();

  useEffect(() => {
    id && history.push('/chat');
  }, [id]);

  function handleResetData() {
    fetchInitialData();
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleStartClick(e) {
    fetchGetAuthId(name);
  }

  return (
    <div className={classes.root}>
      <Tooltip title={'Reset data to default'}>
        <Button className={classes.resetAll} variant={'contained'} onClick={handleResetData}>
          R
        </Button>
      </Tooltip>
      <img className={classes.logo} src={logo} alt="logo" />
      <h2>ChatApp</h2>
      <div className={classes.form}>
        <TextField label="Your name" variant="outlined" size="small" value={name} onChange={handleNameChange} />
        <div>
          {/*<Link to={'/chat'}>*/}
          {/*</Link>*/}
          <Button disabled={!name} variant={'contained'} color="primary" onClick={handleStartClick}>
            Start
          </Button>
        </div>
      </div>
    </div>
  );
}

const mapConnect = [
  ({ app: { currentUser } }) => {
    return {
      currentUser,
    };
  },
  (dispatch) => ({
    fetchInitialData: () => dispatch(actions.fetchInitialData),
    fetchGetAuthId: (name) => dispatch(actions.fetchGetAuthId(name)),
  }),
];

export default connect(...mapConnect)(Login);
