import React from 'react';
import ReactDOM from 'react-dom';
import SlotContainerElement from '../components/slot/SlotContainer';
import Adapter from 'enzyme-adapter-react-16'
import { configure,shallow,mount } from 'enzyme'
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import {SlotContainer} from '../components/slot/SlotContainer'

const mockStore = configureMockStore();
const store = mockStore({});
const mockCallBack = jest.fn(); 
configure({ adapter: new Adapter() })

const slotContainerElement = shallow((<Provider store={store}><SlotContainerElement /></Provider>));

describe('Slot container snapshot testing',()=>{
  it('renders app module correctly',()=>{
      expect(slotContainerElement).toMatchSnapshot();
  });
});


describe('Check slot spinning timings',()=>{
  const wrapper = shallow(
    <Provider store={store}>
      <SlotContainerElement />
    </Provider>
  )
  const componentInstance = wrapper.instance();
  const slotContainerElement = new componentInstance.props.children.type.WrappedComponent(0)
  
  it('Slots should not run immediately after starting',()=>{
    expect(slotContainerElement.state.startSlot).toEqual(false)
  })
})



