import React from "react";
import "./weekStyle.scss";

function WeekItem({icon, description, tempDay}) {

    return <div className="weekItem" >
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
        <span className="weekItem__description">
            {description}
        </span>
        <h1 className="weekItem__temp">
            {tempDay}
            <span className="weekItem__celsusIcon">&#9900;</span>
        </h1>
    </div>

}
export default WeekItem;
