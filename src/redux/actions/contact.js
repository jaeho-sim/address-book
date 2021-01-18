import { fetchContactData } from '../../helpers/api';

export const setAction = (payload) => {
  return {
    type: 'SET',
    payload
  }
}

export const setFailAction = (payload) => {
  return {
    type: 'FETCH_FAIL',
    payload
  }
}

export const fetchAction = () => {
  return async (dispatch) => {
    try {
      const response = await fetchContactData();
      dispatch(setAction(response.results));
    }
    catch (err) {
      dispatch(setFailAction(err));
    }
  }
}