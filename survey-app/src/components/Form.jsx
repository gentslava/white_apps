import React, { memo, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import dayjs from 'dayjs';
import Logo from './Logo';

const Form = ({ children }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const submitHandler = (event) => {
    event.preventDefault();
    handlePrint();
  };

  return (
    <>
      <br />
      <form className='form' onSubmit={submitHandler}>
        <div className='form__content' ref={componentRef}>
          <Logo />
          {children}
          <div className='form__bottom'>
            <p className='form__bottom-data'>
              Дата
              {' '}
              {
                dayjs().format('DD.MM.YYYY')
              }
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
        </div>
        <input className='form__submit' type='submit' value='Готово' />
      </form>
    </>
  );
};
export default memo(Form);
