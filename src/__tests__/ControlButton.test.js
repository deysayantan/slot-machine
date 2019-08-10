import React from 'react';
import {shallow} from 'enzyme'
import ReactDOM from 'react-dom';
import ControlButton from '../components/slot/ControlButton';
import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'

configure({ adapter: new Adapter() })

const mockCallBack = jest.fn(); 
const controlButtonElement = shallow((<ControlButton userInteractionCallback={mockCallBack} />));

describe('test login module',()=>{
    it('renders app module correctly',()=>{
        expect(controlButtonElement).toMatchSnapshot();
    });
});


describe('Test Control Button component', () => {
    controlButtonElement.find('button').simulate('click');
    it('Test click event', () => {     
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
    it('whether clicking button changes state',()=>{
        expect(controlButtonElement.state().started).toEqual(true)
    })
});