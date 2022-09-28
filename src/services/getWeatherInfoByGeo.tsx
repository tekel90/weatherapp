import { API_KEY_WEATHERMAP } from '../types/constants';

const getWeatherInfoByGeo = async (latitude: number, longitude: number) => {

    if (latitude !== 0 && longitude !== 0) {    
    const data = await (await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY_WEATHERMAP}&units=metric`
    )).json()
        
    console.log('geo', data);
    return data;
    
    }
}

export default getWeatherInfoByGeo