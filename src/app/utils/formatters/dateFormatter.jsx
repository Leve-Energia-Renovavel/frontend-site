export const formatDate = (dateString) => {
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