import { API_KEY } from '../types/constants';

const getWeatherInfoByGeo = async (latitude: number, longitude: number) => {

    const data = await (await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    )).json()
    return data;
}

export default getWeatherInfoByGeo