import React from 'react';

const Checkbox = ({ task, onToggle }) => {
  return React.createElement(
    'div',
    { style: { marginBottom: '10px' } },
    React.createElement('input', {
      type: 'checkbox',
      checked: task.isChecked,
      onChange: () => onToggle(task.id)
    }),
    React.createElement(
      'span',
      { style: { textDecoration: task.isChecked ? 'line-through' : 'none' } },
      task.name
    )
  );
};

export default Checkbox;
