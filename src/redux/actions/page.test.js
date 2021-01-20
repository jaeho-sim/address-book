import * as actions from './page';
import { SET_PAGE_NAME } from '../../constants/actions';

describe('actions', () => {
  it('should create an action to set page name', () => {
    const expectedAction = {
      type: SET_PAGE_NAME,
      payload: 'LIST'
    }
    expect(actions.setPageNameAction('LIST')).toEqual(expectedAction);
  });
})