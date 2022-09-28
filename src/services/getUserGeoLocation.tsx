import { API_KEY_GEOLOCATION } from '../types/constants';

const UserGeoLocation = async () => {

        
    const data = await (await fetch(
        `https://ipinfo.io/json?token=${API_KEY_GEOLOCATION}`
    )).json()
    
    return data;
    
}

export default UserGeoLocation