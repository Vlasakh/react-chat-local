import moment from 'moment';
import omit from 'lodash/omit';

import { actions } from '../actions/appActions';

const initialState = {
  users: {},
  messages: {},
  messagesOrder: [],
  newMessages: new Set(),
  currentUser: { name: undefined, id: undefined },
};

const mapIds = ({ id }) => id;

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

    case actions.FETCH_NEW_MESSAGES:
      return {
        ...state,
        ...normalizeData(state.users, state.messages, payload.messages),
        messagesOrder: addNewMessages(state.messagesOrder, payload.messages),
        newMessages: getNewMessagesIds(state.newMessages, state.currentUser.id, payload.messages),
      };

    case actions.SEND_MESSAGE:
      return {
        ...state,
        newMessages: new Set(),
      };

    default:
      return state;
  }
};

function normalizeData(users, messages, messData) {
  // console.log('messData', messData);
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
  return messData.map(mapIds).concat(messagesOrder);
}

function addNewMessages(messagesOrder, messData) {
  return messagesOrder.concat(messData.map(mapIds));
}

function getNewMessagesIds(newMessages, userId, messages) {
  const newMessagesIds = messages.filter((message) => message.user.id !== userId).map(mapIds);

  return new Set(Array.from(newMessages).concat(newMessagesIds));
}

export default appReducer;
