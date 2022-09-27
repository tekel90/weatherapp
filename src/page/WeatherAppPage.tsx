import React, { useEffect } from 'react';

import getWeatherInfoByCity from '../services/getWeatherInfoByCity';

const WeatherAppPage = () => {

    useEffect(() => {
        getWeatherInfoByCity().then(data => console.log(data))
    }, [])

    return (
        <div>Weather App Main Page</div>
    );
}

export default WeatherAppPage;