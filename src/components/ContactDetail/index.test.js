import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import * as Redux from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import fetchMock from 'fetch-mock';
import ContactDetail from './';
import contactsMock from '../../mockData/mock_user_api.json';
import { getMockStore } from '../../helpers/testUtil';

configure({
  adapter: new Adapter()
});

describe('ContactDetail component', () => {
  let wrapper;
  let useSelectorSpy, useDispatchSpy;
  let dummySelector, dummyDispatch;
  const mockState = {
    contact: {
      contacts: contactsMock.results
    },
    page: {
      pageName: 'DETAIL'
    }
  };
  wrapper = mount(
    <Redux.Provider store={getMockStore(mockState)}>
      <Router>
        <ContactDetail />
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
    fetchMock.getOnce('https://randomuser.me/api/?results=10&seed=fa68f06333af18b7', {
      body: contactsMock,
      headers: { 'content-type': 'application/json' }
    });
  });
  afterEach(() => {
    useSelectorSpy.mockClear();
    useDispatchSpy.mockClear();
    fetchMock.restore();
  });

  it('should render component', () => {
    expect(wrapper.find('.contact-detail-page')).toHaveLength(1);
  });

  describe('When there is no contact matching the username with params.username', () => {
    it('shows the contact not found', () => {
      expect(wrapper.find('.contact-not-found')).toHaveLength(1);
    });
  });

  describe('When there exists a contact matching the username with params.username', () => {
    delete window.location;
      window.location = new URL('https://www.example.com/yellowmeercat610');
      wrapper = mount(
        <Redux.Provider store={getMockStore(mockState)}>
          <Router>
            <ContactDetail />
          </Router>
        </Redux.Provider>
      );
    it('shows the contact details', () => {
    });
  });
});
