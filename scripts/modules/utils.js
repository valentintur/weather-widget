export const getCurrentDateTime = () => {
    const MONTHS = [
        'January', 
        'February', 
        'Marth', 
        'April', 
        'May', 
        'June', 
        'July', 
        'August', 
        'September', 
        'October', 
        'November', 
        'December' 
    ];

    const WEEKDAYS = [
        'Sunday',
        'Monday',
        'Thuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday' 
    ]

    const date = new Date();
    const dayOfMonth = date.getDate(); 
    const month =  MONTHS[date.getMonth()]; 
    const year = date.getFullYear(); 
    const dayOfWeek = WEEKDAYS[date.getDay()];  
    
    let hours = date.getHours();
    let minutes = date.getMinutes();  

    if (hours < 10) {
        hours = `0{$hours}` 
    }

    return {dayOfMonth, month, year, dayOfWeek, hours, minutes}  
}