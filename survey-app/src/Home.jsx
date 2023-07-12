import React from 'react';
import { Link } from 'react-router-dom';

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh',
  justifyContent: 'center',
  padding: '30px 40px',
  boxSizing: 'border-box',
};

const Home = () => (
  <div style={style}>
    <Link to='/health-survey'>Анкета о здоровье</Link>
    <Link to='/agreement'>Информированное добровольное согласие</Link>
    <div className='clear-button'>Очистить</div>
  </div>
);
export default Home;
