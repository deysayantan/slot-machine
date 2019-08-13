import React from 'react';
import ReactDOM from 'react-dom';
import Slot from '../components/slot/Slot';
import Adapter from 'enzyme-adapter-react-16'
import { configure,shallow } from 'enzyme'
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});

configure({ adapter: new Adapter() })

const mockCallBack = jest.fn();
const slotElement = shallow((<Provider store={store}><Slot serial="slot1" userInteraction={mockCallBack} /></Provider>));

describe('Slot component snapshot',()=>{
    it('renders app module correctly',()=>{
        expect(slotElement).toMatchSnapshot();
    });
});
describe('Initial slot assignment',()=>{
    const componentInstance = slotElement.instance();
    const slot = new componentInstance.props.children.type.WrappedComponent(0)
    it('slot 1 value must be 1,2,3 or 4',()=>{
        expect([1, 2, 3, 4]).toContain(slot.state.label1)
    })
    it('slot 2 value must be 1,2,3 or 4',()=>{
        expect([1, 2, 3, 4]).toContain(slot.state.label2)
    })
    it('slot 3 value must be 1,2,3 or 4',()=>{
        expect([1, 2, 3, 4]).toContain(slot.state.label3)
    })
})
