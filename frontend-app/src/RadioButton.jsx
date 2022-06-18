const RadioButton = ({
    onClick,
    number,
    index,
    required,
    checked,
}) => (
    <input
        type="radio"
        id={`answer-${number}-${index}`}
        name={`question-${number}`}
        required={required}
        checked={checked}
        onClick={onClick}
    />
);
export default RadioButton;
