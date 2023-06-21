import { getCurrentDateTime, getWindDirection } from "./utils.js";  

export const renderWidgetToday = (widget, data) => { 
    const {dateFormat, timeFormat, weekdayFormat} = getCurrentDateTime();
    console.log(data)

    widget.insertAdjacentHTML(
        'beforeEnd', 
        `<div class="widget__today">
            <div class="widget__date-block">
                <p class="widget__date">${dateFormat}</p>   
                <p class="widget__time">${timeFormat}</p> 
                <p class="widget__day">${weekdayFormat}</p>  
            </div>
            <div class="widget__icon">
                <img class="widget__img" src="./icon/${data.weather[0].icon}.svg" alt="Weather">
            </div>
            <div class="widget__wheather">
                <div class="widget__city">
                    <p>${data.name}</p>  
                    <button class="widget__change-city" aria-label="Change city"></button>
                </div>
                <p class="widget__temp-big">${data.main.temp} °C</p> 
                <p class="widget__felt">feels-like</p> 
                <p class="widget__temp-small">${data.main.feels_like} °C</p>
            </div>
        </div>`  
    ) 
} 

export const renderWidgetOther = (widget, data) => {
    const directionIcon = getWindDirection(data.wind.deg)

    widget.insertAdjacentHTML(
        'beforeEnd',
        `<div class="widget__other">
            <div class="widget__wind">
                <p class="widget__wind-title">Wind</p> 
                <p class="widget__wind-speed">${data.wind.speed} m/s</p> 
                <p class="widget__wind-text">${directionIcon}</p> 
            </div>
            <div class="widget__humidity">
                <p class="widget__humidity-title">Humidity</p> 
                <p class="widget__humidity-value">${data.main.humidity}</p>
                <p class="widget__humidity-text">Т.Р: -0.2 °C</p>
            </div>
            <div class="widget__pressure">
                <p class="widget__pressure-title">Pressure</p>
                <p class="widget__pressure-value">${data.main.pressure}</p>
                <p class="widget__pressure-text">mb</p> 
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