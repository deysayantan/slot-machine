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

describe('test login module',()=>{
    it('renders app module correctly',()=>{
        expect(slotElement).toMatchSnapshot();
    });
});
