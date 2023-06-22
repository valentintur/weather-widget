import {
    getCurrentDateTime,
    getWindDirection,
    calculateDewPoint 
} from "./utils.js";

export const renderWidgetToday = (widget, data) => {
    const {
        dateFormat,
        timeFormat,
        weekdayFormat
    } = getCurrentDateTime();
    const {
        weather: [{
            icon
        }],
        name,
        main: {
            temp,
            feels_like: feelsLike
        }
    } = data;

    widget.insertAdjacentHTML(
        'beforeEnd',
        `<div class="widget__today">
            <div class="widget__date-block">
                <p class="widget__date">${dateFormat}</p>   
                <p class="widget__time">${timeFormat}</p> 
                <p class="widget__day">${weekdayFormat}</p>  
            </div>
            <div class="widget__icon">
                <img class="widget__img" src="./icon/${icon}.svg" alt="Weather">
            </div>
            <div class="widget__wheather">
                <div class="widget__city">
                    <p>${name}</p>  
                    <button class="widget__change-city" aria-label="Change city"></button>
                </div>
                <p class="widget__temp-big">${temp.toFixed(1)} °C</p>  
                <p class="widget__felt">feels like</p> 
                <p class="widget__temp-small">${feelsLike.toFixed(1)} °C</p> 
            </div>
        </div>`
    )
}

export const renderWidgetOther = (widget, data) => {

    const {
        main,
        wind
    } = data;
    const directionIcon = getWindDirection(wind.deg)

    widget.insertAdjacentHTML(
        'beforeEnd',
        `<div class="widget__other">
            <div class="widget__wind">
                <p class="widget__wind-title">Wind</p> 
                <p class="widget__wind-speed">${wind.speed} m/s</p> 
                <p class="widget__wind-text">${directionIcon}</p> 
            </div>
            <div class="widget__humidity">
                <p class="widget__humidity-title">Humidity</p> 
                <p class="widget__humidity-value">${main.humidity}%</p> 
                <p class="widget__humidity-text">dew point: ${calculateDewPoint(data.main.temp, main.humidity)} °C</p>  
            </div>
            <div class="widget__pressure">
                <p class="widget__pressure-title">Pressure</p>
                <p class="widget__pressure-value">${main.pressure}</p>
                <p class="widget__pressure-text">hPa</p> 
            </div>
        </div>`
    )
}

export const renderWidgetForecast = (widget) => {
    widget.insertAdjacentHTML(
        'beforeEnd',
        `<ul class="widget__forecast">
            <li class="widget__day-item">
            <p class="widget__day-text">ср</p>
            <img class="widget__day-img" src="./icon/02d.svg" alt="Погода">
            <p class="widget__day-temp">18.4°/13.7°</p>
            </li>
            <li class="widget__day-item">
            <p class="widget__day-text">чт</p>
            <img class="widget__day-img" src="./icon/03d.svg" alt="Погода">
            <p class="widget__day-temp">17.3°/11.3°</p>
            </li>
            <li class="widget__day-item">
            <p class="widget__day-text">пт</p>
            <img class="widget__day-img" src="./icon/04d.svg" alt="Погода">
            <p class="widget__day-temp">16.5°/10.9°</p>
            </li>
            <li class="widget__day-item">
            <p class="widget__day-text">сб</p>
            <img class="widget__day-img" src="./icon/01d.svg" alt="Погода">
            <p class="widget__day-temp">18.6°/12.5°</p>
            </li>
            <li class="widget__day-item">
            <p class="widget__day-text">вс</p>
            <img class="widget__day-img" src="./icon/03d.svg" alt="Погода">
            <p class="widget__day-temp">17.3°/11.2°</p>
            </li>                                   
        </ul>`
    )
}

export const showError = (widget, error) => {
    widget.textContent = error.toString();
    widget.classList.add('widget_error');
}