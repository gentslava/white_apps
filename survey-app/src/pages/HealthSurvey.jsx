/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import React, { memo } from 'react';
import { inject, observer } from 'mobx-react';
import Form from '../components/Form';
import questionnaire from '../resources/questionnaire';
import Survey from '../components/Survey';

@inject("userStore")
@observer
const HealthSurvey = () => (
  <Form>
    <h1>Анкета о вашем здоровье</h1>
    <p>Успешность стоматологического лечения может зависеть от наличия и степени развития общих заболеваний организма.</p>
    <p>
      Врачу-стоматологу очень важны сведения о состоянии Вашего здоровья.
      Они помогут правильно составить план лечения, обеспечить безопасность и эффективность проведения лечебных мероприятий, дать обоснованные гарантии на выполненную работу.
      Неправильная информация может повредить Вашему здоровью!
    </p>
    <p>
      Отвечая на вопросы анкеты, необходимо выбрать нужный вариант ответа
      <b> ДА </b>
      или
      <b> НЕТ </b>
      по каждому пункту.
    </p>
    <p>Сообщенные Вами данные составляют врачебную тайну и не будут доступны посторонним лицам.</p>
    <p>
      <b>
        Я,
        {' '}
        <input
          type='text'
          placeholder='Фамилия Имя Отчество'
          // TODO: rewrite  required={!development}
          size={'Фамилия Имя Отчество'.length - 1}
          onChange={({ target }) => {
            const minLength = 'Фамилия Имя Отчество'.length;
            const curLength = target.value.length;
            target.size = (curLength < minLength ? minLength : curLength) - 1;
          }}
        />
        , сообщаю следующую информацию
      </b>
    </p>
    <Survey
      questionnaire={questionnaire}
    />
    <div className='form__bottom'>
      <p><b>Насколько мне известно, я верно ответил(а) на все вопросы анкеты</b></p>
    </div>
  </Form>
);
export default memo(HealthSurvey);
