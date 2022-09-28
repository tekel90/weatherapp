import { useEffect, useState } from "react";
import getUserGeoLocation from "../services/getUserGeoLocation";


const useUserGeoLocation = () => {

    const [location, setLocation] = useState({latitude: 0, longitude: 0, city: ''})
    
    const getLocation = (location: any) => {
        const arrayLatLong = location.loc.split(",")
        setLocation({
            latitude: arrayLatLong[0], 
            longitude: arrayLatLong[1],
            city: location.city
        })
    }

    useEffect(() => {
        getUserGeoLocation().then(data => getLocation(data))
    }, [])

    return location
}

export default useUserGeoLocation