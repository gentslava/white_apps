/* eslint-disable no-console */
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import './App.scss';
import Home from './Home';
import HealthSurvey from './HealthSurvey';
import Agreement from './Agreement';

const App = () => {
    const development = (process.env.NODE_ENV === 'development');
    console.log('Development', development);
    const today = new Date();

    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route
                        path='/'
                        element={(
                            <Home
                                development={development}
                            />
                        )}
                    />
                    <Route
                        path='/health-survey'
                        element={(
                            <HealthSurvey
                                development={development}
                                today={today}
                            />
                        )}
                    />
                    <Route
                        path='/agreement'
                        element={(
                            <Agreement
                                development={development}
                                today={today}
                            />
                        )}
                    />
                </Routes>
            </div>
        </Router>
    );
};
export default App;
