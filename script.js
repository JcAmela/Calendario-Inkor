// Array de los meses
const months = [
    { name: 'Enero', days: 31, startDay: 1 },
    { name: 'Febrero', days: 28, startDay: 2 },
    { name: 'Marzo', days: 31, startDay: 2 },
    { name: 'Abril', days: 30, startDay: 5 },
    { name: 'Mayo', days: 31, startDay: 7 },
    { name: 'Junio', days: 30, startDay: 3 },
    { name: 'Julio', days: 31, startDay: 5 },
    { name: 'Agosto', days: 31, startDay: 1 },
    { name: 'Septiembre', days: 30, startDay: 4 },
    { name: 'Octubre', days: 31, startDay: 6 },
    { name: 'Noviembre', days: 30, startDay: 2 },
    { name: 'Diciembre', days: 31, startDay: 4 },
];

const weekdays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const today = new Date();
const currentMonth = today.getMonth(); 
const currentDate = today.getDate();

// Recorrer todos los meses
for (let month of months) {
    let calendarContainer = document.getElementById('calendar-container');
    let monthContainer = document.createElement('div');
    monthContainer.classList.add('month-container');

    let monthTitleContainer = document.createElement('div');
    monthTitleContainer.classList.add('month-title-container');
    monthTitleContainer.innerHTML = `<h2>${month.name}</h2>`;
    monthContainer.appendChild(monthTitleContainer);

    let olWeekdays = document.createElement('ol');
    olWeekdays.classList.add('weekdays');

    // Agregar días de la semana
    for (let day of weekdays) {
        let li = document.createElement('li');
        li.textContent = day;
        olWeekdays.appendChild(li);
    }
    monthContainer.appendChild(olWeekdays);

    // Crear y agregar días del mes
    let olDays = document.createElement('ol');
    olDays.classList.add('calendar');

    // Agregar espacios en blanco al inicio del mes
    for (let i = 1; i < month.startDay; i++) {
        let li = document.createElement('li');
        li.textContent = '';
        olDays.appendChild(li);
    }

    // Agregar días del mes
    for (let day = 1; day <= month.days; day++) {
        let li = document.createElement('li');
        li.textContent = day;
        // Marcar el día actual
        if (months.indexOf(month) === currentMonth && day === currentDate) {
            li.classList.add('today');
        }
        olDays.appendChild(li);
    }

    monthContainer.appendChild(olDays);
    calendarContainer.appendChild(monthContainer);
}
