import React from 'react';
import Question from './Question';

const Survey = ({ questionnaire }) => questionnaire.map(
  (question, index) => (
    <Question
      key={index}
      question={question}
      number={index}
    />
  ),
);
export default Survey;
