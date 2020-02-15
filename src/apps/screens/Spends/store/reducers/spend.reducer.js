import * as Actions from '../actions';
const initialState = {
  count: 0,
};

const home = function(state = initialState, action) {
  switch (action.type) {
    case Actions.ADD_COUNT: {
      return {
        ...state,
        count: 1,
      };
    }
    default: {
      return state;
    }
  }
};

export default home;
