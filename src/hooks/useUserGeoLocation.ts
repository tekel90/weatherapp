import { useEffect, useState } from "react";


const useUserGeoLocation = () => {

    const [location, setLocation] = useState({latitude: 0, longitude: 0})
    
    const getLocation = (location: any) => {
        setLocation({
            latitude: location.coords.latitude, 
            longitude: location.coords.longitude
        })
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(getLocation)
    }, [])
    

    return location
}

export default useUserGeoLocation