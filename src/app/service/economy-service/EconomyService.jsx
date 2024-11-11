import { formatBrazillianDate } from "@/app/utils/formatters/dateFormatter";

export const updateEconomyData = (consumidor, economia, carbonCredits, receivedCredits, storeEconomy) => {
    storeEconomy.updateUserEconomy({
        economySince: formatBrazillianDate(consumidor?.created_at),
        value: economia,
        carbonCredits: carbonCredits?.toFixed(2),
        receivedCredits: receivedCredits?.toFixed(2),
    });
};