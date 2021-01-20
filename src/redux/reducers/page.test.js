import pageReducers from '../reducers/page';
import { SET_PAGE_NAME } from '../../constants/actions';

describe('contact reducer', () => {
  it('should return the initial state', () => {
    expect(pageReducers(undefined, {})).toEqual({ pageName: '' });
  });

  it('should handle SET_CONTACT', () => {
    expect(
      pageReducers(undefined, {
        type: SET_PAGE_NAME,
        payload: 'LIST'
      })).toEqual({
        pageName: 'LIST'
      });
  });
});