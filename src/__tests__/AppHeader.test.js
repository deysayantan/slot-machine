import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from '../components/headers/AppHeader';

const AppHeaderElement = React.createElement(AppHeader, { params: { title: "Slot Machine" } });


it('header renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(AppHeaderElement, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('title match',()=>{
    expect(AppHeaderElement.props.params.title).toBe('Slot Machine')
})
