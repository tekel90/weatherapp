import { API_KEY } from '../types/constants';

const getWeatherInfoByCity = async () => {
    const data = await ( await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`
    )).json()
    return data;
}

export default getWeatherInfoByCity