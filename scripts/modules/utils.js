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