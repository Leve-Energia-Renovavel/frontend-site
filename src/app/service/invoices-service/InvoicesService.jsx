import { useStoreBillingHistory, useStoreNextBills } from "@/app/hooks/useStore";
import axios from "axios";
import Cookies from "js-cookie";
import { requestSuccessful } from "../utils/Validations";
import { billHasToBePaid } from "@/app/utils/form-options/billingStatusOptions";

export const useGetInvoicesParcialData = async () => {

    const storeBilling = useStoreBillingHistory()

    try {
        const headers = {
            "Authorization": `Bearer ${Cookies.get('accessToken')}`
        };

        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/`, { headers });
        if (requestSuccessful(response?.status)) {
            const ciclosConsumo = response?.data?.ciclosConsumo

            ciclosConsumo?.forEach(bill => {
                const newBilling = {
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
                }
                storeBilling.addBilling(newBilling)
            })

        } else {
            console.error("Failed to fetch invoices data");
        }
    } catch (error) {
        console.error("Error fetching invoices data:", error);
    }
};


export const useGetInvoicesData = async () => {

    const storeNextBills = useStoreNextBills()
    const storeBilling = useStoreBillingHistory()

    try {
        const headers = {
            "Authorization": `Bearer ${Cookies.get('accessToken')}`
        };

        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/`, { headers });
        if (requestSuccessful(response?.status)) {
          const ciclosConsumo = response?.data?.ciclosConsumo
          ciclosConsumo?.forEach(bill => {
            const newBilling = {
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
            }
            storeBilling.addBilling(newBilling)

            if (billHasToBePaid[newBilling.status]) {
              storeNextBills.updateExists(true)
              storeNextBills.addNextBill(newBilling)
            }
          })

        } else {
          console.error("Failed to fetch invoices data");
        }
      } catch (error) {
        console.error("Error fetching invoices data:", error);
      }
};