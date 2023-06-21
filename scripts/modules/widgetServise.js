import { 
    renderWidgetToday, 
    renderWidgetOther, 
    renderWidgetForecast 
} from "./render.js";   
import { fetchWeather } from './APIservice.js';

export const startWidget =  async () => {
    const widget = document.createElement('div');
    widget.classList.add('widget'); 

    const dataWeather = await fetchWeather('Warsaw'); 
    console.log('dataWeather: ', dataWeather);

    if (dataWeather.success) {
        renderWidgetToday(widget, dataWeather.data) 
        renderWidgetOther(widget, dataWeather.data)
    } else {
        showError()
    }

    renderWidgetForecast(widget)  

    return widget;  
}  