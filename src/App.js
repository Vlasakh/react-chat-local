import React, { useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import ChatLayout from './layouts/Chat';
import EmptyLayout from './layouts/Empty';
import Login from './components/Login';
import MainPage from './components/MainPage';
import { actions } from './actions/appActions';

function App({ checkDemoData }) {
  useMemo(() => {
    checkDemoData();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <EmptyLayout>
            <Login />
          </EmptyLayout>
        </Route>
        <Route exact path="/chat">
          <ChatLayout>
            <MainPage />
          </ChatLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default connect(null, (dispatch) => ({
  checkDemoData: () => dispatch(actions.checkDemoData),
}))(App);
