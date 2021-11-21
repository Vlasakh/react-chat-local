import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ChatLayout from './layouts/Chat';
import EmptyLayout from './layouts/Empty';
import Login from './components/Login';
import MainPage from './components/MainPage';

function App() {
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

export default App;
