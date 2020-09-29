import React, { useState, useEffect } from "react";
import axios from "axios";
import TodayItem from "./todayItem";
import Loading from "../loading/loading";
import { key, City, Country } from "../../config";

function TodayWeather() {
    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [iconID, setIconID] = useState(null);

    let newData;

    const getTodayWeatherAPI = () => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&APPID=${key}&units=metric`)
            .then(data => {
                setIsLoading(false);
                newData = data.data;
                setWeatherData(newData);
                setIconID(newData.weather[0].icon);
            })
            .catch((e) => console.log(e))
            .finally(() => setIsLoading(true));
    };

    useEffect(() => {
        getTodayWeatherAPI();
    }, []);

    let todayIcon = `http://openweathermap.org/img/wn/${iconID}@2x.png`;
    
    return (
        <div className="weather_row">
            {isLoading ? 
                <TodayItem 
                    todayIcon={todayIcon} 
                    todayDescription={weatherData.weather[0].description} 
                    todayTemp={weatherData.main.temp} 
                    city={weatherData.name} 
                    country={weatherData.sys.country} 
                />
            :   <Loading />
            }
        </div>
    );
}
export default TodayWeather;
