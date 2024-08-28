import { billHasToBePaid } from "@/app/utils/form-options/billingStatusOptions";
import axios from "axios";
import Cookies from "js-cookie";
import { requestSuccessful } from "../utils/Validations";

export const getInvoicesData = async (storeNextBills, storeBilling) => {
  try {
    const headers = {
      "Authorization": `Bearer ${Cookies.get('accessToken')}`
    };

    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/`, { headers });
    if (requestSuccessful(response?.status)) {
      await updateInvoicesStoreData(response, storeNextBills, storeBilling)
    } else {
      console.error("Failed to fetch invoices data");
    }
  } catch (error) {
    console.error("Error fetching invoices data:", error);
  }
};

export const changeInvoiceDate = async (newDate, setErrorMessage, setNotifications, storeUser) => {
  const headers = {
    "Authorization": `Bearer ${Cookies.get('accessToken')}`
  };
  const data = {
    days: newDate
  }
  const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/vencimento-fatura`, data, { headers })
  if (requestSuccessful(response?.status)) {
    setNotifications(["Data de vencimento alterada com sucesso!"])
    storeUser.updateUser({ invoiceDate: newDate })

  } else {
    setErrorMessage(["Erro ao alterar a data de vencimento. Por favor, tente novamente mais tarde"])
  }
  return response
}

export const updateInvoicesStoreData = async (response, storeNextBills, storeBilling) => {
  const ciclosConsumo = response?.data?.ciclosConsumo

  if (storeBilling) {
    storeBilling.clearBillings()
    ciclosConsumo?.forEach(bill => {
      // if (billWasSend(bill.send)) {
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

      if (storeNextBills && billHasToBePaid[newBilling.status]) {
        storeNextBills.updateExists(true)
        storeNextBills.addNextBill(newBilling)
      }
      // }
    })
  }


}