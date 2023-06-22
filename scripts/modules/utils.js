export const getCurrentDateTime = () => {

    const date = new Date(); 

    const dateFormat = new Intl.DateTimeFormat('en-GB', {
        day: '2-digit', 
        month: 'long',
        year: 'numeric',
    }).format(date)

    const timeFormat = new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit'
    }).format(date)

    const weekdayFormat = new Intl.DateTimeFormat('en-GB', {
        weekday: 'long'
    }).format(date)


    return {dateFormat, timeFormat, weekdayFormat}    
}

export const getWindDirection = (dir) => {
    const directionIcon = `<span style="display: block; transform: rotate(${dir}deg)">&#8593;</span>`; 
    return directionIcon; 
}

export const calculateDewPoint = (temp, humidity) => {
    const A = 17.27;
    const B = 237.7;

    const ft = (A * temp) / (B + temp) + Math.log(humidity / 100);
    const dewPoint = (B * ft) / (A - ft);

    return dewPoint.toFixed(1);  
}

export const getWeatherForecastData = (data) => { 
    const forecasts = data.list.filter((item) => 
        new Date(item.dt_txt).getHours() === 12 &&
        new Date(item.dt_txt).getDate() >= new Date().getDate()
    );

    const forecastData = forecasts.map((item) => {
        const date = new Date(item.dt_txt); 

        const weekdaysShort = [
            'sun', 'mon', 'thu', 'wed', 'thu', 'fri', 'sat'
        ];

        const dayOfWeek = weekdaysShort[date.getDay()]; 
        const weatherIcon = item.weather[0].icon;

        let minTemp = Infinity; 
        let maxTemp = -Infinity;

        for (let i = 0; i < data.list.length; i++) { 
            const temp = data.list[i].main.temp;
            const tempDate = new Date(data.list[i].dt_txt);

            if (tempDate.getDate() === date.getDate()) {
                if (temp < minTemp) {
                    minTemp = temp;
                }
                if (temp > maxTemp) {
                    maxTemp = temp;
                }
            } 
        }

        return {
            dayOfWeek,
            weatherIcon,
            minTemp,
            maxTemp
        };
    });

    return forecastData;
};
