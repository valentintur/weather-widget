import {
    getCurrentDateTime,
    getWindDirection,
    calculateDewPoint,
    getWeatherForecastData 
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

export const renderWidgetForecast = (widget, data) => {

    const widgetForecast = document.createElement('ul');
    widgetForecast.className = 'widget__forecast';
    widget.append(widgetForecast); 
    
    const forecastData = getWeatherForecastData(data);   

    const items = forecastData.map((item) => { 
        const widgetDayItem = document.createElement('li'); 
        widgetDayItem.className = 'widget__day-item';

        widgetDayItem.insertAdjacentHTML('beforeend', `
            <p class="widget__day-text">${item.dayOfWeek}</p>
            <img class="widget__day-img" src="./icon/${item.weatherIcon}.svg" alt="Weater ${item.dayOfWeek}">
            <p class="widget__day-temp">${item.minTemp.toFixed(1)}°/${item.maxTemp.toFixed(1)}°</p>` 
        ) 
        return widgetDayItem
    })

    widgetForecast.append(...items);
}

export const showError = (widget, error) => {
    widget.textContent = error.toString();
    widget.classList.add('widget_error');
}