import { useState } from "react";
import Checkbox from "./Checkbox";

const Question = ({ question, number }) => {
    const [value, setValue] = useState(null);

    return (
        <fieldset className="form__answer">
            <div className="form__table-row">
                <div className="form__table-cell">
                    { question.question }
                </div>
                {
                    question.answers
                    && (
                        <div className="form__table-answer">
                            {
                                question.answers.map((answer, index) => (
                                    <Checkbox
                                        key={`${number}-${index}`}
                                        number={number}
                                        index={index}
                                        required={question.required}
                                        needsText={answer.needsText}
                                        title={answer.title}
                                        value={value}
                                        setValue={setValue}
                                    />
                                ))
                            }
                        </div>
                    )
                }
            </div>
            {
                question.answers?.[value]?.needsText
                && (
                    <div className="form__subanswer">
                        {
                            question.answers[value].textTitle
                            && (
                                <label htmlFor={`subanswer-${number}-${value}`}>
                                    {question.answers[value].textTitle}
                                </label>
                            )
                        }
                        <input
                            type="text"
                            name={`subanswer-${number}-${value}`}
                            required
                        />
                    </div>
                )
            }
            {
                question.textAnswer
                && (
                    <input
                        type="text"
                        required={question.required}
                    />
                )
            }
            {
                question.multipleQuestions?.map((subQuestion, index) => (
                    <div className="form__table-row form__subquestion" key={`${number}-${index}`}>
                        <div className="form__table-cell">
                            { subQuestion.question }
                        </div>
                        {
                            subQuestion.answers
                            && (
                                <div className="form__table-answer">
                                    {
                                        subQuestion.answers.map((answer, subIndex) => (
                                            <Checkbox
                                                key={`${number}-${index}-${subIndex}`}
                                                number={`${number}-${index}`}
                                                index={subIndex}
                                                required={question.required}
                                                needsText={answer.needsText}
                                                title={answer.title}
                                                value={value}
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
        </fieldset>
    );
};
export default Question;
