import { billHasToBePaid } from "@/app/utils/form-options/billingStatusOptions";

export const createBillingData = (bill) => ({
    uuid: bill.uuid,
    installationId: bill.cliente_instalacao_id,
    energyConsumed: bill.consumo,
    energyInjected: bill.energia_injetada,
    availability: bill.disponibilidade,
    value: bill.valor_fatura,
    billDate: bill.data_fatura,
    dueDate: bill.vencimento_fatura,
    status: bill.pagamento_status,
    urlBill: bill.url_fatura,
    urlPayment: bill.url_pagamento,
});

export const updateBillingData = (ciclosConsumo, storeBilling, storeNextBills) => {
    storeBilling?.clearBillings();
    ciclosConsumo?.forEach(bill => {
        const newBilling = createBillingData(bill);
        storeBilling.addBilling(newBilling);

        if (storeNextBills && billHasToBePaid[newBilling.status]) {
            storeNextBills.updateExists(true);
            storeNextBills.addNextBill(newBilling);
        }
    });
};