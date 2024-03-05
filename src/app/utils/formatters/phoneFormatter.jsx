export default function formatPhoneNumber(phoneNumber) {
    if (phoneNumber) {
        const matches = phoneNumber.match(/^(\d{2})(\d{5})(\d{4})$/);
        if (matches) {
            return `(${matches[1]}) ${matches[2]}-${matches[3]}`;
        } else {
            return phoneNumber
        }
    }
};