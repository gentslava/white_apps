const Checkbox = ({
    number,
    index,
    required,
    title,
    value,
    setValue,
}) => (
    <>
        <input
            type="radio"
            id={`answer-${number}-${index}`}
            name={`question-${number}`}
            required={required}
            // checked={index === value}
            onChange={() => setValue(index)}
        />
        <label htmlFor={`answer-${number}-${index}`}>{title}</label>
    </>
);
export default Checkbox;
