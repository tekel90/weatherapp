import * as React from 'react';
import useUserGeoLocation from '../hooks/useUserGeoLocation';
import Form from 'react-bootstrap/Form';
import '../styles/Select.css'
import getWeatherInfoByCity from '../services/getWeatherInfoByCity';
import getWeatherInfoByGeo from '../services/getWeatherInfoByGeo';

const Select = () => {
    const location = useUserGeoLocation();
    const dataByGeolocation = getWeatherInfoByGeo(location.latitude, location.longitude)
    
    const handleChange = (city: String) => {
        const dataByCity = getWeatherInfoByCity(city);
    }



    return (
        <div className='selectComponent'>
            <Form.Select onChange={(e) => handleChange(e.target.value)}>
                <option selected>{ `${location.city}` || 'Seleccione una ciudad'}</option>
                <option value="Madrid">Madrid</option>
                <option value="Tokio">Tokio</option>
                <option value="Londres">Londres</option>
                <option value="Miami">Miami</option>
                <option value="Cancun">Cancun</option>
            </Form.Select>
        </div>
    )

};
export default Select