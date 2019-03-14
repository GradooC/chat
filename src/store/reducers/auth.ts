import * as actionTypes from "../actions/actionTypes";

interface Action {
  type: string;
}

const initState = {
  test: 1
}

const reducer = (state = initState, action: Action ) => {
  switch (action.type) {
    case actionTypes.SIGN_IN:
      return state;
    case actionTypes.SIGN_IN:
      return state;
    default:
      return state
  }
}

export default reducer;