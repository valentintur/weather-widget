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