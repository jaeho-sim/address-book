import { SET_CONTACT, FETCH_FAIL, FETCH_LOADING } from '../../constants/actions';

const defaultState = {
  contacts: []
}

const contactReducers = (state = defaultState, {type, payload}) => {
  switch (type) {
    case SET_CONTACT:
      return Object.assign({}, state, { contacts: payload });
    case FETCH_FAIL:
      return Object.assign({}, state, { error: payload });
    case FETCH_LOADING:
      return Object.assign({}, state, { loading: true });
    default:
      return state;
  }
}

export default contactReducers;