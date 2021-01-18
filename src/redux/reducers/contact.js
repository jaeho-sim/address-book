import { SET, FETCH_FAIL, FETCH_LOADING } from '../../constants/actions';

const defaultState = {
  contacts: []
}

const contactReducers = (state = defaultState, {type, payload}) => {
  switch (type) {
    case SET:
      return { contacts: payload };
    case FETCH_FAIL:
      return Object.assign({}, state, { error: payload });
    case FETCH_LOADING:
      return Object.assign({}, state, { loading: true });
    default:
      return defaultState;
  }
}

export default contactReducers;