import { useStoreBillingHistory } from "@/app/hooks/useStore";
import axios from "axios";
import Cookies from "js-cookie";
import { requestSuccessful } from "../utils/Validations";

export const useGetInvoicesData = async () => {

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