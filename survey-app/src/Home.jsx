import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/health-survey'>About</Link>
    </div>
);
export default Home;
