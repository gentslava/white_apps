/* eslint-disable max-len */
import React from 'react';
import Form from './components/Form';
import Logo from './components/Logo';

export default ({ today }) => (
  <Form>
    <Logo />
    <p className='form__additional-text'>Приложение к медицинской карте</p>
    <p>
      Информированное добровольное согласие на виды медицинских вмешательств, включенные
      в Перечень определенных видов медицинских вмешательств, на которые граждане дают
      информированное добровольное согласие при выборе врача и медицинской организации
      для получения первичной медико-санитарной помощи
    </p>
    <p>
      Этот документ свидетельствует о том, что мне в соответствии со ст.ст. 19-23 ФЗ N 323 &quot;Об основах охраны здоровья граждан в РФ&quot;,
      сообщена вся необходимая информация о моем предстоящем лечении и что я согласен (согласна) с названными мне условиями проведения лечения.
      Данный документ является необходимым предварительным условием (разрешением) начала медицинского вмешательства.
    </p>
    <div className='form__bottom'>
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
