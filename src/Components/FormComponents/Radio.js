import React from 'react';

const Radio = ({ options, value, setValue, ...props }) => {
  return (
    <>
      {options &&
        options.map((option) => (
          <label key={option} className={value === option ? 'active' : ''}>
            <input
              type="radio"
              value={option}
              checked={value === option}
              onChange={({ target }) => setValue(target.value)}
              {...props}
            />
            {option === '' ? 'Todos' : option}
          </label>
        ))}
    </>
  );
};

export default Radio;
