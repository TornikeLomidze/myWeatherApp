import React from "react";
import "./todayStyle.scss";

function TodayItem({ todayIcon, todayDescription, todayTemp, city, country }) {
    return <div className="todayItem">
            <img src={todayIcon} />
            <span className="todayItem__description">
                {todayDescription}
            </span>
            <h1 className="todayItem__temp">
                {todayTemp}
                <span className="todayItem__celsusIcon">&#9900;</span>
            </h1>
            <h3 className="todayItem__title">
                <span>{city}</span>,
                <span className="todayItem__abrev"> {country}</span>
            </h3>
        </div>
}
export default TodayItem;
