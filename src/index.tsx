import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import WeatherAppPage from './screens/WeatherAppPage';

if ( !navigator.geolocation){
  alert(' El navegador no tiene la Geolocalizacion disponible')
  throw new Error('El navegador no tiene la Geolocalizacion disponible')
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WeatherAppPage />
  </React.StrictMode>
);