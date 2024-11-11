import { BILL_STATUS } from '@/app/pages/components/new-dashboard/invoices/invoicesEnums';
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
    if (receivedDate) {
        const [year, month, day] = receivedDate.split('-');
        return `${day}/${month}/${year}`;
    } else return ""
}

export const isOver18 = (value) => {
    if (!value) return false;

    const [day, month, year] = value.split('/');
    const userBirthday = new Date(`${year}-${month}-${day}`);

    const today = new Date();
    const ageDifference = today.getFullYear() - userBirthday.getFullYear();
    const birthdayInThisYear = new Date(today.getFullYear(), userBirthday.getMonth(), userBirthday.getDate());

    return ageDifference > 18 || (ageDifference === 18 && today >= birthdayInThisYear);
};

export const isOver110 = (dateString) => {
    if (isValidDate(dateString)) {
        const [day, month, year] = dateString.split('/');
        const userBirthday = new Date(`${year}-${month}-${day}`);

        const today = new Date();
        const ageDifference = today.getFullYear() - userBirthday.getFullYear();

        return ageDifference < 110;
    } else {
        return false
    }
};

export const isValidDate = (dateString) => {
    // Parse the date parts to integers
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    // Check if the date is a valid date
    const isValid = !isNaN(year) && !isNaN(month) && !isNaN(day) &&
        day >= 1 && day <= 31 &&
        month >= 1 && month <= 12 &&
        year >= 1900 && year <= new Date().getFullYear(); // Assuming users cannot have birthdates in the future

    return isValid;
};

export const billHasExpired = (status, dueDate) => {
    if (status === BILL_STATUS.PAID) {
        return status
    }
    if (status === BILL_STATUS.CANCELED) {
        return status
    }

    const expired = BILL_STATUS.PENDING
    const open = BILL_STATUS.DUE

    const [day, month, year] = dueDate.split('/').map(Number);

    const dueDateObject = new Date(year, month - 1, day);

    const today = new Date();
    if (today > dueDateObject) {
        return expired
    } else {
        return open
    }
}