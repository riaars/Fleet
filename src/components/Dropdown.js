import React from 'react';
import './_Dropdown.css';

const Dropdown = (props) => {
  const optionList = [
    {id: 1, value: '<=200.000 km'},
    {id: 2, value: '>200.000 km'},
  ];

  const handleSelectedDropdown = (id) => {
   return (id === props.option) ? 'dropdown-list-item selected': 'dropdown-list-item';
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={() => props.toggleDropdown()}>
        <div>{props.distance}</div>
        {props.isDropdownOpen ? (
          <i class="fa fa-caret-up" aria-hidden="true"></i>
        ) : (
          <i class="fa fa-caret-down" aria-hidden="true"></i>
        )}
      </div>
      {props.isDropdownOpen ? (
        <div className="dropdown-list">
          {optionList.map(item =>(
            <div className={handleSelectedDropdown(item.id)} onClick={props.onClick} id={item.id}>
              {item.value}
              </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
