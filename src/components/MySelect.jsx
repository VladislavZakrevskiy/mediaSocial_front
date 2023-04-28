import React from 'react';

const MySelect = ({options, defaultValue, value, onChanges}) => {
    return (
        <select
            value={value}
            onChange ={event => onChanges(event.target.value)}
        >
            <option  disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option  key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;

