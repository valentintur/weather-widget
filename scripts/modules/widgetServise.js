import { 
    renderWidgetToday, 
    renderWidgetOther, 
    renderWidgetForecast 
} from "./render.js";   
import { fetchWeather, fetchForecast, getCity } from './APIservice.js';

export const startWidget =  async (city, widget) => {

    if (!city) {
        const dataCity = await getCity();  
        if (dataCity.success) {
            city = dataCity.city; 
        }
    }

    if (!widget) {
        widget = document.createElement('div');
        widget.classList.add('widget');   
    }  

    function showError(errorMessage) { 
        console.error(errorMessage);
        // Handle the error message display or any other necessary actions
      } 

    const dataWeather = await fetchWeather(city);  

    if (dataWeather.success) {
        renderWidgetToday(widget, dataWeather.data) 
        renderWidgetOther(widget, dataWeather.data)
    } else {
        showError(dataWeather.error) 
    }

    const dataForecast = await fetchForecast(city);   

    if (dataForecast.success) {
        renderWidgetForecast(widget, dataForecast.data);  
    } else {
        showError(dataForecast.error);   
    } 

    
    return widget;  
}  