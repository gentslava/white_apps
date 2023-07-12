import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';

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
      <header>
        <Link to='/'>
          ⬅️ Назад
        </Link>
      </header>
      <form className='form' onSubmit={submitHandler}>
        <div className='form__content' ref={componentRef}>
          {children}
        </div>
        <input className='form__submit' type='submit' value='Готово' />
      </form>
    </>
  );
};
export default Form;
