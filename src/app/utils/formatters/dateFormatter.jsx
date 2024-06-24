const monthNames = [
    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
    'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
];

export const formatBrazillianDate = (dateString) => {
    const date = new Date(dateString);

    const day = date.getDate().toString().padStart(2, '0'); // Ensure 2 digits with leading zero
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

export const formatMonthAndYear = (dateString) => {
    const [month, day, year] = dateString.split('/');
    const date = new Date(`${year}-${month}-${day}`);
    const formattedMonth = (date.getMonth() + 2).toString().padStart(2, '0');
    const formattedYear = date.getFullYear().toString();
    return `${formattedMonth}/${formattedYear}`;
}

export const formatDayMonthAndYearInFull = (brazillianDateString) => {
    // Parse the input date string "DD/MM/YYYY"
    const [day, month, year] = brazillianDateString.split('/').map(Number);
    const date = new Date(year, month - 1, day);

    const monthName = monthNames[date.getMonth()];
    const shortYear = date.getFullYear().toString().slice(-2); // Get the last two digits of the year

    const formattedDate = `${monthName} ${shortYear}`;

    return formattedDate;
}

export const formatMonthAndYearInFull = (brazilianDateString) => {
    // Parse the input date string "MM/YYYY"
    const [month, year] = brazilianDateString.split('/').map(Number);
    const date = new Date(year, month - 1);

    // Get the month name and last two digits of the year
    const monthName = monthNames[date.getMonth()];
    const shortYear = date.getFullYear().toString().slice(-2); // Get the last two digits of the year

    const formattedDate = `${monthName} ${shortYear}`;

    return formattedDate;
}