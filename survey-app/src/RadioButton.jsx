/* eslint-disable react/jsx-boolean-value */
import React from 'react';

const RadioButton = ({
    number,
    index,
    required,
    title,
    development,
    // value,
    setValue,
}) => (
    <>
        <input
            type='radio'
            id={`answer-${number}-${index}`}
            name={`question-${number}`}
            required={required}
            checked={development}
            // checked={index === value}
            onChange={() => setValue(index)}
        />
        <label htmlFor={`answer-${number}-${index}`}>{title}</label>
    </>
);
export default RadioButton;
