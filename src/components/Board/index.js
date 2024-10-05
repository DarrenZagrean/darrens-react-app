import React from 'react';

const Board = ({ children }) => {
  return React.createElement(
    'div',
    { style: { border: '1px solid #ccc', padding: '20px', borderRadius: '8px', width: '300px', margin: '0 auto' } },
    React.createElement('h2', null, 'To-Do List'),
    children
  );
};

export default Board;