import React, { useEffect } from 'react';
import Header from '../components/Header';
import useUserGeoLocation from '../hooks/useUserGeoLocation';
import getWeatherInfoByCity from '../services/getWeatherInfoByCity';
import getWeatherInfoByGeo from '../services/getWeatherInfoByGeo';

const WeatherAppPage = () => {

    const location = useUserGeoLocation()
    useEffect(() => {
        
        getWeatherInfoByCity().then(data => console.log('city',data))
        getWeatherInfoByGeo(location.latitude, location.longitude).then(data => console.log('geo',data))
    }, [])
    

    return (
        <div className='weatherApp'>
            <Header />
        </div>
    );
}

export default WeatherAppPage;