import React, { memo } from 'react';
import './App.scss';
import { Provider } from 'mobx-react';
import HealthSurvey from './pages/HealthSurvey';
import Agreement from './pages/Agreement';
import Logo from './components/Logo';
import userStore from './stores/userStore';

const documents = [
  <HealthSurvey />,
  <Agreement />,
];

const stores = {
  userStore,
};

const App = () => (
  <Provider {...stores}>
    <Logo />
    { documents.map((document) => document) }
  </Provider>
);
export default memo(App);
