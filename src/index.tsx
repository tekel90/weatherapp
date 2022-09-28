import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import WeatherAppPage from './screens/WeatherAppPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WeatherAppPage />
  </React.StrictMode>
);