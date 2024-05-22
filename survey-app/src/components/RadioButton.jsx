import React, { useState } from 'react';

const RadioButton = ({
  number,
  index,
  required,
  title,
  development,
}) => {
  const [value, setValue] = useState(development ? 0 : null);

  return (
    <>
      <input
        type='radio'
        id={`answer-${number}-${index}`}
        name={`question-${number}`}
        required={required}
        checked={index === value}
        onChange={() => setValue(index)}
      />
      <label htmlFor={`answer-${number}-${index}`}>{title}</label>
    </>
  );
};
export default RadioButton;
