import { fetchContactData } from '../../helpers/api';
import { SET, FETCH_FAIL, FETCH_LOADING } from '../../constants/actions';

export const setAction = (payload) => {
  return {
    type: SET,
    payload
  }
}

export const setFailAction = (payload) => {
  return {
    type: FETCH_FAIL,
    payload
  }
}

export const setLoadingAction = () => {
  return {
    type: FETCH_LOADING
  }
}

export const fetchAction = () => {
  return async (dispatch) => {
    dispatch(setLoadingAction);
    try {
      const response = await fetchContactData();
      dispatch(setAction(response.results));
    }
    catch (err) {
      dispatch(setFailAction(err.message));
    }
  }
}