import * as constants from "./constants";
import apiCall from "../api/api";

export const serverRenderClock = isServer => {
  return {
    type: constants.TICK,
    payload: {
      light: !isServer,
      ts: Date.now()
    }
  };
};
export const startClock = () => {
  return {
    type: constants.TICK,
    payload: {
      light: true,
      ts: Date.now()
    }
  };
};

export const incrementCount = () => {
  return { type: constants.INCREMENT };
};

export const decrementCount = () => {
  return { type: constants.DECREMENT };
};

export const resetCount = () => {
  return { type: constants.RESET };
};

// export const getUsers = urlToFetch => dispatch => {
//   return apiCall(urlToFetch)
//     .then(users =>
//       dispatch({ type: constants.REQUEST_USERS_SUCCESS, payload: users })
//     )
//     .catch(error =>
//       dispatch({ type: constants.REQUEST_USERS_FAILED, payload: error })
//     );
// };
export const getUsers = urlToFetch => dispatch => {
  dispatch({ type: constants.REQUEST_USER_PENDING });
  return apiCall(urlToFetch)
    .then(data =>
      dispatch({ type: constants.REQUEST_USERS_SUCCESS, payload: data })
    )
    .catch(error =>
      dispatch({ type: constants.REQUEST_USERS_FAILED, payload: error })
    );
};
