import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import * as Redux from 'react-redux';
import App from './App';
import { getMockStore } from './helpers/testUtil';

configure({
  adapter: new Adapter()
});

describe('ContactList component', () => {
  let wrapper;
  const mockState = {
    contact: {
      contacts: []
    },
    page: {
      pageName: ''
    }
  };
  wrapper = mount(
    <Redux.Provider store={getMockStore(mockState)}>
      <App />
    </Redux.Provider>
  );

  it('should render component', () => {
    expect(wrapper.find('.address-book')).toHaveLength(1);
  });
});
