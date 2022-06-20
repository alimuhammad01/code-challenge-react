import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../assets/navigation.json";
import "./style.scss";

const City = () => {
    const [selectedCity, setSelectedCity] = useState(null);
    const { slug } = useParams();

    const getTime = (timezone) => {
        return new Date().toLocaleString("en-US", {timeZone: timezone});
    }

    useEffect(()=> {
        const city = data.cities.find(city => city.section === slug);
        setSelectedCity(city);
    }, [slug]);

    return (
        <div className={'homepage'}>
            <div className="container">
                <div className="cities_container">
                    {selectedCity ? (
                        <div className="city_card">
                            <h1>{selectedCity.cityName}</h1>
                            <div className="city_img">
                                <img src={`images/${selectedCity.img}`} alt={selectedCity.cityName}/>
                                <div className="date_tag">
                                    <span>{getTime(selectedCity.timeZone)}</span>
                                </div>
                            </div>
                        </div>
                    ): (
                        <h1>City Not Found</h1>
                    )}
                </div>
            </div>
        </div>
    );
}

export default City;
