import { startWidget } from './modules/widgetServise.js';  
import { cityServiceSearch } from './modules/cityServiceSearch.js';  

const initWidget = async (app) => {
    const widget = await startWidget();
    app.append(widget)

    cityServiceSearch(widget)
} 

initWidget(document.querySelector('#app'));    