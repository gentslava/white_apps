import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import HealthSurvey from './pages/HealthSurvey';
import Agreement from './pages/Agreement';

export default () => (
  <Router>
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={(
            <Home />
          )}
        />
        <Route
          path='/health-survey'
          element={(
            <HealthSurvey />
          )}
        />
        <Route
          path='/agreement'
          element={(
            <Agreement />
          )}
        />
      </Routes>
    </div>
  </Router>
);
