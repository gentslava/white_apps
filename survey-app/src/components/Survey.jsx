/* eslint-disable react/no-array-index-key */
import React from 'react';
import Question from './Question';

const Survey = ({ questionnaire, development }) => questionnaire.map(
    (question, index) => (
        <Question
            key={index}
            question={question}
            number={index}
            development={development}
        />
    ),
);
export default Survey;
