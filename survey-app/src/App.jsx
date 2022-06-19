import './App.scss';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import questionnaire from './questionnaire';
import Survey from './Survey';
import Logo from './Logo';

const App = () => {
    const today  = new Date();
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const submitHandler = (event) => {
        event.preventDefault();
        handlePrint();
    };

    return (
        <div className='App'>
            <form className='form' onSubmit={submitHandler}>
                <div className='form__content' ref={componentRef}>
                    <Logo />
                    <h1>Анкета о вашем здоровье</h1>
                    <p>Успешность стоматологического лечения может зависеть от наличия и степени развития общих заболеваний организма.</p>
                    <p>Врачу-стоматологу очень важны сведения о состоянии Вашего здоровья.
                        Они помогут правильно составить план лечения, обеспечить безопасность и эффективность проведения лечебных мероприятий, дать обоснованные гарантии на выполненную работу.
                        Неправильная информация может повредить Вашему здоровью!</p>
                    <p>Отвечая на вопросы анкеты, необходимо выбрать нужный вариант ответа <b>ДА</b> или <b>НЕТ</b> по каждому пункту.</p>
                    <p>Сообщенные Вами данные составляют врачебную тайну и не будут доступны посторонним лицам.</p>
                    <p>
                        <b>Я,&nbsp;
                        <input
                            type='text'
                            placeholder='Фамилия Имя Отчество'
                            required
                            size={'Фамилия Имя Отчество'.length - 1}
                            onChange={({target}) => {
                                const minLength = 'Фамилия Имя Отчество'.length;
                                const curLength = target.value.length;
                                target.size = (curLength < minLength ? minLength : curLength) - 1;
                            }}
                        />,&nbsp;
                        сообщаю следующую информацию</b>
                    </p>
                    <Survey
                        questionnaire={ questionnaire }
                    />
                    <div className='form__bottom'>
                        <p><b>Насколько мне известно, я верно ответил(а) на все вопросы анкеты</b></p>
                        <p>Дата {today.toLocaleDateString("ru-RU")}</p>
                        <div>
                            <p>Подпись врача &nbsp;<span>____________/___________________ /</span></p>
                            <p>Подпись &nbsp;<span>____________/___________________ /</span></p>
                        </div>
                    </div>
                </div>
                <input className='form__submit' type='submit' value={'Готово'} />
            </form>
        </div>
    );
};
export default App;
