const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = 'b3b393fc4d651403fbd3e6b5c29735d2';  
  
export const fetchWeather = async (city) => {
    try {
        const response = await fetch(`${API_URL}weather?units=metric&q=${city}&appid=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Require Error') 
        }
        const data = await response.json(); 
        return { success: true, data } 
    } catch (error) {
        return { success: false, error } 
    }
}

export const fetchForecast = async (city) => {
    try {
        const response = await fetch(`${API_URL}forecast?units=metric&q=${city}&appid=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Require Error')
        }
        const data = await response.json(); 
        return { success: true, data } 
    } catch (error) { 
        return { success: false, error }  
    }
}