import React from 'react';
import './style.css';

const Board = ({ children }) => {
  return React.createElement(
    'div',
    React.createElement('h2', null, 'To-Do List'),
    children
  );
};

export default Board;