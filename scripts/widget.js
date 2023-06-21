import { startWidget } from './modules/widgetServise.js';  

const initWidget = (app) => {
    const widget = startWidget();
    app.append(widget)
} 

initWidget(document.querySelector('#app'));    