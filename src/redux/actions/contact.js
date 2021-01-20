import { fetchContactData } from '../../helpers/api';
import { SET_CONTACT, FETCH_FAIL } from '../../constants/actions';

export const setAction = (payload) => {
  return {
    type: SET_CONTACT,
    payload
  }
}

export const setFailAction = (payload) => {
  return {
    type: FETCH_FAIL,
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
      dispatch(setFailAction(err.message));
    }
  }
}