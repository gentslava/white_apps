/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import RadioButton from './RadioButton';

const Question = ({ question, number, development }) => {
    const [value, setValue] = useState(null || (development && 0));

    if (question.break) {
        return (
            <div className='break-page' />
        );
    }

    return (
        <fieldset className='form__answer'>
            <div className='form__table-row'>
                <div className='form__table-cell'>
                    { question.question }
                </div>
                {
                    question.type === 'radio'
                    && (
                        <div className='form__table-answer'>
                            {
                                question.answers.map((answer, index) => (
                                    <RadioButton
                                        key={`${number}-${index}`}
                                        number={number}
                                        index={index}
                                        required={!development && question.required}
                                        needsText={answer.needsText}
                                        title={answer.title}
                                        // value={value}
                                        setValue={setValue}
                                    />
                                ))
                            }
                        </div>
                    )
                }
            </div>
            {
                question.type === 'text'
                && (
                    <input
                        type='text'
                        required={!development && question.required}
                    />
                )
            }
            {
                question.type === 'select'
                && (
                    <>
                        <select
                            name='select'
                            required={!development && question.required}
                            onChange={({ target }) => setValue(target.value)}
                        >
                            <option hidden value='' />
                            {
                                question.answers.map((answer, index) => (
                                    <option
                                        key={`${number}-${index}`}
                                        value={index}
                                    >
                                        {answer.title}
                                    </option>
                                ))
                            }
                        </select>
                        {
                            question.answers?.[value]
                            && !question.answers?.[value]?.needsText
                            && (
                                <input
                                    type='text'
                                    value={question.answers?.[value].title}
                                    readOnly
                                />
                            )
                        }
                    </>
                )
            }
            {
                question.multipleQuestions?.map((subQuestion, index) => (
                    <div className='form__table-row form__subquestion' key={`${number}-${index}`}>
                        <div className='form__table-cell'>
                            { subQuestion.question }
                        </div>
                        {
                            subQuestion.type === 'radio'
                            && (
                                <div className='form__table-answer'>
                                    {
                                        subQuestion.answers.map((answer, subIndex) => (
                                            <RadioButton
                                                key={`${number}-${index}-${subIndex}`}
                                                number={`${number}-${index}`}
                                                index={subIndex}
                                                required={!development && question.required}
                                                needsText={answer.needsText}
                                                title={answer.title}
                                                // value={value}
                                                setValue={setValue}
                                            />
                                        ))
                                    }
                                </div>
                            )
                        }
                    </div>
                ))
            }
            {
                question.answers?.[value]?.needsText
                && (
                    <div className='form__subanswer'>
                        {
                            question.answers[value].textTitle
                            && (
                                <label htmlFor={`subanswer-${number}-${value}`}>
                                    {question.answers[value].textTitle}
                                </label>
                            )
                        }
                        <input
                            type='text'
                            name={`subanswer-${number}-${value}`}
                            required={!development}
                        />
                    </div>
                )
            }
        </fieldset>
    );
};
export default Question;
