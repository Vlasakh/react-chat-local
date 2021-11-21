import moment from 'moment';
import omit from 'lodash/omit';

import { actions } from '../actions/appActions';

const initialState = {
  users: {},
  messages: {},
  messagesOrder: [],
  currentUser: { name: undefined, id: undefined },
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    case actions.FETCH_MESSAGES:
      return {
        ...state,
        ...normalizeData(state.users, state.messages, payload.messages),
        messagesOrder: addPrevMessages(state.messagesOrder, payload.messages),
      };

    default:
      return state;
  }
};

function normalizeData(users, messages, messData) {
  console.log('messData', messData);
  messData.forEach((message) => {
    users[message.user.id] || (users[message.user.id] = message.user);
    messages[message.id] ||
      (messages[message.id] = { ...omit(message, ['user']), time: moment(message.time), userId: message.user.id });
  });

  return {
    users: { ...users },
    messages: { ...messages },
  };
}

function addPrevMessages(messagesOrder, messData) {
  return messData.map(({ id }) => id).concat(messagesOrder);
}

export default appReducer;
