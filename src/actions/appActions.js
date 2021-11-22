import { apiGetInitialData } from '../api/apiGetInitialData';
import { apiGetAuthId } from '../api/apiGetAuthId';
import { apiGetMessages } from '../api/apiGetMessages';
import { apiSendMessage } from '../api/apiSendMessage';
import { apiGetNewMessages } from '../api/apiGetNewMessages';

export const actions = {
  CHECK_DEMO_DATA: 'CHECK_DEMO_DATA',
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  SEND_MESSAGE: 'SEND_MESSAGE',
  FETCH_MESSAGES: 'FETCH_MESSAGES',
  FETCH_NEW_MESSAGES: 'FETCH_NEW_MESSAGES',
};

actions.checkDemoData = (dispatch) => {
  const messages = localStorage.getItem('messages');

  dispatch({ type: actions.CHECK_DEMO_DATA, payload: messages });
};

actions.fetchInitialData = (dispatch) => {
  apiGetInitialData().then(() => dispatch({ type: actions.CHECK_DEMO_DATA, payload: true }));
};

actions.fetchMessages = (start, count) => (dispatch) => {
  apiGetMessages(start, count).then((data) => {
    data && dispatch({ type: actions.FETCH_MESSAGES, payload: data });
  });
};

actions.fetchGetAuthId = (name) => (dispatch) => {
  apiGetAuthId(name).then((res) => {
    res && dispatch({ type: actions.SET_CURRENT_USER, payload: { id: res.id, name } });
  });
};

actions.fetchSendMsg =
  ({ successCallback, ...data }) =>
  (dispatch, getState) => {
    apiSendMessage(data).then((res) => {
      if (res) {
        dispatch({ type: actions.SEND_MESSAGE, payload: null });
        actions.fetchNewMessages(dispatch, getState);
        successCallback();
      }
    });
  };

actions.fetchNewMessages = (dispatch, getState) => {
  const store = getState().app;
  const id = store.messagesOrder[store.messagesOrder.length - 1];
  const lastMessage = store.messages[id];

  apiGetNewMessages(lastMessage.time).then((data) => {
    data && dispatch({ type: actions.FETCH_NEW_MESSAGES, payload: data });
  });
};
