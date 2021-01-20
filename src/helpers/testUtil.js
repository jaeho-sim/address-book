import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

export const getMockStore = (obj) => {
  const mockStore = configureMockStore([thunk]);
  const store = mockStore(obj);
  return store;
}
