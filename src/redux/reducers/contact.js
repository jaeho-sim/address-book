import { SET_CONTACT, FETCH_FAIL } from '../../constants/actions';

const defaultState = {
  contacts: []
}

const contactReducers = (state = defaultState, {type, payload}) => {
  switch (type) {
    case SET_CONTACT:
      return Object.assign({}, state, { contacts: payload });
    case FETCH_FAIL:
      return Object.assign({}, state, { error: payload });
    default:
      return state;
  }
}

export default contactReducers;