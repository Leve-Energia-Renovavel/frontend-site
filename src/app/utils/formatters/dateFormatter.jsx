export const formatDate = (dateString) => {
    const date = new Date(dateString);

    const day = date.getDate().toString().padStart(2, '0'); // Ensure 2 digits with leading zero
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

export const formatMonthAndYear = (dateString) => {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${month}/${year}`;
}