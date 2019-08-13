import React from 'react';
import ReactDOM from 'react-dom';
import ResultWindowElement from '../components/slot/ResultWindow';
import Adapter from 'enzyme-adapter-react-16'
import { configure,shallow,mount } from 'enzyme'
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";


const mockStore = configureMockStore();
const store = mockStore({});
const mockCallBack = jest.fn(); 
configure({ adapter: new Adapter() })

const resultWindowElement = shallow((<Provider store={store}><ResultWindowElement /></Provider>));

describe('ResultWindow  snapshot testing',()=>{
    it('renders app module correctly',()=>{
        expect(resultWindowElement).toMatchSnapshot();
    });
    it('Result should not appear immediately after first load',()=>{
        const componentInstance = resultWindowElement.instance();
        const resultWindow = new componentInstance.props.children.type.WrappedComponent(0)
        expect(resultWindow.state.shouldAppear).toEqual(false)
    })
});
