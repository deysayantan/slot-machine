import React from 'react';
import ReactDOM from 'react-dom';
import ControlButtonShallow from '../components/slot/ControlButton';
import { ControlButton } from '../components/slot/ControlButton'
import Adapter from 'enzyme-adapter-react-16'
import { configure,shallow,mount } from 'enzyme'
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

configure({ adapter: new Adapter() })

const mockStore = configureMockStore();
const store = mockStore({});
const mockCallBack = jest.fn(); 

const controlButtonElement = shallow(<Provider store={store}><ControlButtonShallow userInteractionCallback={mockCallBack} /></Provider>);


describe('initial snapshot test for hoc',()=>{
    it('renders app module correctly',()=>{
        expect(controlButtonElement).toMatchSnapshot();
    });
});

describe('initial snapshot test ',()=>{
    it('renders app module correctly',()=>{
        expect(<ControlButton userInteractionCallback={mockCallBack} />).toMatchSnapshot();
    });
});

describe('Test Control Button component', () => {
    const wrapper = mount(<ControlButton userInteractionCallback={mockCallBack} setUserInteraction={mockCallBack} />)
    wrapper.find('button').simulate('click');
    it('Test click event', () => {     
      expect(mockCallBack.mock.calls.length).toEqual(2);
    });
    it('whether clicking button changes state',()=>{
        expect(wrapper.state().started).toEqual(true)
    })
});