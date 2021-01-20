import contactReducers from '../reducers/contact';
import { SET_CONTACT, FETCH_FAIL } from '../../constants/actions';
import contactsMock from '../../mockData/mock_user_api.json';

describe('contact reducer', () => {
  it('should return the initial state', () => {
    expect(contactReducers(undefined, {})).toEqual({ contacts: [] });
  });

  it('should handle SET_CONTACT', () => {
    expect(
      contactReducers(undefined, {
        type: SET_CONTACT,
        payload: contactsMock.results
      })).toEqual({
        contacts: contactsMock.results
      });
  });

  it('should handle FETCH_FAIL', () => {
    expect(
      contactReducers(undefined, {
        type: FETCH_FAIL,
        payload: 'error1'
      })).toEqual({
        contacts: [],
        error: 'error1'
      });
  });
});