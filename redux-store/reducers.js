import * as constants from "./constants";

const initialClockState = {
  lastUpdate: 0
};

export const updateClockReducer = (state = initialClockState, action) => {
  switch (action.type) {
    case constants.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.payload.ts,
        light: !!action.payload.light // this is converting the object entry in a boolean through negation, ! returns false if it is true and !! retruns true if it is true
      });
    default:
      return state;
  }
};

const initialCounterState = {
  light: false,
  count: 0
};

export const updateCounterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case constants.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      });
    case constants.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      });
    case constants.RESET:
      return Object.assign({}, state, {
        count: initialCounterState.count
      });
    default:
      return state;
  }
};

const initialUsersReducer = {
  users: [],
  error: "",
  isPending: false
};

export const updateUsersReducer = (state = initialUsersReducer, action) => {
  switch (action.type) {
    case constants.REQUEST_USER_PENDING:
      return { ...state, isPending: true };
    case constants.REQUEST_USERS_SUCCESS:
      return Object.assign({}, state, {
        users: action.payload,
        isPending: false
      });
    case constants.REQUEST_USERS_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false
      });
    default:
      return state;
  }
};
