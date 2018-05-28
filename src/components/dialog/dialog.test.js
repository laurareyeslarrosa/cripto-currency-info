import React from 'react';
import ReactDOM from 'react-dom';
import DetailsDialog from './app';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DetailsDialog />, div);
  ReactDOM.unmountComponentAtNode(div);
});