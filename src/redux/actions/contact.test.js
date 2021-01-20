import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from './contact';
import { SET_CONTACT, FETCH_FAIL } from '../../constants/actions';
import contactsMock from '../../mockData/mock_user_api.json';

describe('actions', () => {
  it('should create an action to set contact', () => {
    const expectedAction = {
      type: SET_CONTACT,
      payload: contactsMock.results
    }
    expect(actions.setAction(contactsMock.results)).toEqual(expectedAction);
  });

  it('should create an action to set fail', () => {
    const error = 'error1'
    const expectedAction = {
      type: FETCH_FAIL,
      payload: error
    }
    expect(actions.setFailAction(error)).toEqual(expectedAction);
  });

  describe('async actions', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    afterEach(() => {
      fetchMock.restore();
    });
    it('should create a ssetAction when succeeded to fetch', () => {
      fetchMock.getOnce('https://randomuser.me/api/?results=20&seed=fa68f06333af18b7', {
        body: contactsMock,
        headers: { 'content-type': 'application/json' }
      });
      const expectedActions = [
        {
          type: SET_CONTACT,
          payload: contactsMock.results
        }
      ]
      const store = mockStore({});
      return store.dispatch(actions.fetchAction()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
})