import React, { useState, useEffect } from "react";
import axios from "axios";
import WeekItem from "./weekItem";
import Loading from "../loading/loading";
import { key, Lat, Lon, Part } from "../../config";


function Week() {

    const [weatherData, setWeatherData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    let newData;

    const getWeekWeatherAPI = () => {
        setIsLoading(true);
        axios
            .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${Lat}&lon=${Lon}&exclude=${Part}&appid=${key}`)
            .then((data) => {
                newData = data.data.daily;
                setWeatherData(newData);
            })
            .catch((e) => console.log(e))
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        getWeekWeatherAPI();
    }, []);

    return (
        <div className="weather_row week_cont">
            {!isLoading ? weatherData.map(item =>
                <WeekItem icon={item.weather[0].icon} description={item.weather[0].description} tempDay={item.temp.day} key={item.index} />
            ) : <Loading />
            }
        </div >
    );
}
export default Week;
