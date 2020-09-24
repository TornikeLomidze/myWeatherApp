import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { key, City, Country } from "../../config";

function TodayWeather() {

    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [iconID, setIconID] = useState(null);

    const weatherAPI = () => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${City.City},${Country.Country}&APPID=${key.key}&units=metric`)
            .then((data) => {
                console.log(data);

                setIsLoading(false);
                setWeatherData(data);
                setIconID(data.data.weather[0].icon);

            })
            .catch((e) => console.log(e))
            .finally(() => setIsLoading(true));
    };

    useEffect(() => {
        weatherAPI();
    }, []);

    let weatherIcon = `http://openweathermap.org/img/wn/${iconID}@2x.png`;

    return (
        <div className="weather_row">
            {isLoading ? (
                <div className="weather_item">
                    <img src={weatherIcon} />
                    <span className="description">
                        {weatherData.data.weather[0].description}
                    </span>
                    <h1 className="temp">
                        {weatherData.data.main.temp}
                        <span className="celsus-icon">&#9900;</span>
                    </h1>
                    <h3 className="title">
                        <span>{weatherData.data.name}</span>,
            <span className="abrev"> {weatherData.data.sys.country}</span>
                    </h3>
                </div>
            ) : (
                    <FontAwesomeIcon className="spiner" icon={faSpinner} />
                )}
        </div>
    );
}
export default TodayWeather;
