import React from 'react';
import ReactDOM from 'react-dom';
import SlotContainer from '../components/slot/SlotContainer';
import Adapter from 'enzyme-adapter-react-16'
import { configure,shallow } from 'enzyme'
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});
configure({ adapter: new Adapter() })

const slotContainerElement = shallow((<Provider store={store}><SlotContainer /></Provider>));

describe('test login module',()=>{
  it('renders app module correctly',()=>{
      expect(slotContainerElement).toMatchSnapshot();
  });
});