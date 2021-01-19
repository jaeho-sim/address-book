import { SET_PAGE_NAME } from '../../constants/actions';

const defaultState = {
  pageName: ''
}

const pageReducers = (state = defaultState, {type, payload}) => {
  switch (type) {
    case SET_PAGE_NAME:
      return Object.assign({}, state, { pageName: payload });
    default:
      return state;
  }
}

export default pageReducers;