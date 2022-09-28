import React, { useEffect } from 'react';
import useUserGeoLocaton from '../hooks/useUserGeoLocaton';
import getWeatherInfoByCity from '../services/getWeatherInfoByCity';
import getWeatherInfoByGeo from '../services/getWeatherInfoByGeo';

const WeatherAppPage = () => {

    const location = useUserGeoLocaton()
    useEffect(() => {
        
        getWeatherInfoByCity().then(data => console.log('city',data))
        getWeatherInfoByGeo(location.latitude, location.longitude).then(data => console.log('geo',data))
    }, [])
    

    return (
        <div>Weather App Main Page</div>
    );
}

export default WeatherAppPage;