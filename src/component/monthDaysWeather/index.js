import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { key, Lat, Lon, Part } from "../../config";



function MonthDaysWeather() {

    console.log({ key, Lat, Lon, Part });
    const [weatherData, setWeatherData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    const weatherAPI = () => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${Lat.Lat}&lon=${Lon.Lon}&exclude=${Part.Part}&appid=${key.key}`)
            .then((data) => {
                console.log("Month ", data);

                setIsLoading(false);
                setWeatherData(data.data.daily);
            })
            .catch((e) => console.log(e))
            .finally(() => setIsLoading(true));
    };

    useEffect(() => {
        weatherAPI();
    }, []);

    return (
        <div className="weather_row bottom_cont">
            {isLoading ? weatherData.map(item => (
                <div className = "weather_item" >
                    <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
                    <span className="description">
                        {item.weather[0].description}
                    </span>
                    <h1 className="temp">
                        {item.temp.day}
                        <span className="celsus-icon">&#9900;</span>
                    </h1>
                </div>
                )
            ) : (
            <FontAwesomeIcon className="spiner" icon={faSpinner} />
        )}
        </div >
    );
}
export default MonthDaysWeather;
