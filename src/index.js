import React from 'react';
import ReactDOM from 'react-dom';
import Parent from './components/Parent'


//render() currently returns a
//reference to the root ReactComponent instance
ReactDOM.render(
  <Parent />,
  document.getElementById('root')
);
