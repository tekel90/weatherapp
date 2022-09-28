import { API_KEY_WEATHERMAP } from '../types/constants';

const getWeatherInfoByCity = async (city: String) => {
    const data = await ( await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY_WEATHERMAP}&units=metric`
    )).json()
    console.log('city', data);
    
    return data;
}

export default getWeatherInfoByCity