import React from 'react';
import ReactDOM from 'react-dom';
import SlotContainer from '../components/slot/SlotContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SlotContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});