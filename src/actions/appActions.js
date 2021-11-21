import { apiGetInitialData } from '../api/apiGetInitialData';
import { apiGetAuthId } from '../api/apiGetAuthId';
import { apiGetMessages } from '../api/apiGetMessages';

export const actions = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  FETCH_MESSAGES: 'FETCH_MESSAGES',
};

actions.fetchInitialData = () => {
  apiGetInitialData().then((data) => {
    localStorage.setItem('messages', JSON.stringify(data.messages));
  });
};

actions.fetchMessages = (start, count) => (dispatch) => {
  apiGetMessages(start, count).then((data) => {
    dispatch({ type: actions.FETCH_MESSAGES, payload: data });
  });
};

actions.fetchGetAuthId = (name) => (dispatch) => {
  apiGetAuthId().then((id) => {
    dispatch({ type: actions.SET_CURRENT_USER, payload: { id, name } });
  });
};
