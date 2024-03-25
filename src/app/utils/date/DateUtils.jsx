import { format } from 'date-fns';

export const getCurrentDate = () => {
    const currentDate = new Date();

    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = String(currentDate.getFullYear());

    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');

    const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    return formattedDateTime;
}


export const formatBirthDate = (receivedDate) => {
    return format(new Date(receivedDate), 'dd/MM/yyyy');
}
export const formatBasicBirthDate = (receivedDate) => {
    if(receivedDate) {
        const [year, month, day] = receivedDate.split('-');
        return `${day}/${month}/${year}`;
    } else return ""
}