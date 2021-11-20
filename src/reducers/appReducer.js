import { actions } from '../actions/appActions';

const initialState = {
  users: [],
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.FETCH_USERS:
      return {
        ...state,
        users: payload,
      };

    default:
      return state;
  }
};

export default appReducer;
