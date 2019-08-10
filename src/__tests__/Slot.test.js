import React from 'react';
import ReactDOM from 'react-dom';
import Slot from '../components/slot/Slot';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Slot />, div);
  ReactDOM.unmountComponentAtNode(div);
});
