const defaultState = {
  contacts: []
}

const contactReducers = (state = defaultState, {type, payload}) => {
  switch (type) {
    case 'SET':
      return { contacts: payload };
    case 'FETCH_FAIL':
      return { error: payload };
    default:
      return defaultState;
  }
}

export default contactReducers;