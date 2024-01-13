const updateHour = () => {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hourElement = document.getElementById('Text-Hour')

    const time = (hour >= 12) ? 'PM' : 'AM';

    const currentHour = `${hour}:${minutes}:${seconds} ${time}`;

    hourElement.textContent = currentHour;
}

setInterval(updateHour, 1000);