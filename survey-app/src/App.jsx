import React from 'react';
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
// } from 'react-router-dom';
import './App.scss';
// import Home from './Home';
import HealthSurvey from './HealthSurvey';
// import Agreement from './Agreement';

const App = () => (
    // <Router>
    //     <div className='App'>
    //         <Routes>
    //             <Route
    //                 path='/'
    //                 element={<Home />}
    //             />
    //             <Route
    //                 path='/health-survey'
    //                 element={<HealthSurvey />}
    //             />
    //             <Route
    //                 path='/agreement'
    //                 element={<Agreement />}
    //             />
    //         </Routes>
    //     </div>
    // </Router>
    <HealthSurvey />
);
export default App;
