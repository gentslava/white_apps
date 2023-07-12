/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import React from 'react';
import Form from './components/Form';
import Logo from './components/Logo';
import questionnaire from './questionnaire';
import Survey from './components/Survey';

export default ({ development, today }) => (
  <Form>
    <Logo />
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
          required={!development}
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
      development={development}
    />
    <div className='form__bottom'>
      <p><b>Насколько мне известно, я верно ответил(а) на все вопросы анкеты</b></p>
      <p className='form__bottom-data'>
        Дата
        {' '}
        {today.toLocaleDateString('ru-RU')}
      </p>
      <div>
        <p>
          Подпись врача &nbsp;
          <span>____________/___________________ /</span>
        </p>
        <p>
          Подпись &nbsp;
          <span>____________/___________________ /</span>
        </p>
      </div>
    </div>
  </Form>
);
