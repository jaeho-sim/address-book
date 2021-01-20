import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import * as Redux from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import ContactList from './';
import contactsMock from '../../mockData/mock_user_api.json';
import { getMockStore } from '../../helpers/testUtil';

configure({
  adapter: new Adapter()
});

describe('ContactList component', () => {
  let wrapper;
  let useSelectorSpy, useDispatchSpy;
  let dummySelector, dummyDispatch;
  const mockState = {
    contact: {
      contacts: contactsMock.results
    },
    page: {
      pageName: 'LIST'
    }
  };
  wrapper = mount(
    <Redux.Provider store={getMockStore(mockState)}>
      <Router>
        <ContactList />
      </Router>
    </Redux.Provider>
  );

  beforeEach(() => {
    useSelectorSpy = jest.spyOn(Redux, 'useSelector');
    useDispatchSpy = jest.spyOn(Redux, 'useDispatch');
    dummySelector = jest.fn();
    dummyDispatch = jest.fn();
    useSelectorSpy.mockReturnValue(dummySelector);
    useDispatchSpy.mockReturnValue(dummyDispatch);
  });
  afterEach(() => {
    useSelectorSpy.mockClear();
    useDispatchSpy.mockClear();
  });

  it('should render component', () => {
    expect(wrapper.find('.contact-list-page')).toHaveLength(1);
  });

  describe('When contacts data is fetched from the redux successfully', () => {
    it('lists all the contacts from the data when successful', () => {
      expect(wrapper.find('.contact-list-item')).toHaveLength(10);
    });
  });

  describe('when there is error during fetch', () => {
    it('should show fetch error', () => {
      useSelectorSpy = jest.spyOn(Redux, 'useSelector');
      useSelectorSpy.mockReturnValue({contact: { error: 'error1' }})
      wrapper = mount(
        <Redux.Provider store={getMockStore({})}>
          <Router>
            <ContactList />
          </Router>
        </Redux.Provider>
      );
      expect(wrapper.find('.fetch-error')).toHaveLength(1);
    });
  });
});
