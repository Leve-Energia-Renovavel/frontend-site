import { awaitSeconds } from "@/app/utils/browser/BrowserUtils";
import { billHasToBePaid } from "@/app/utils/form-options/billingStatusOptions";
import axios from "axios";
import Cookies from "js-cookie";
import { requestSuccessful } from "../utils/Validations";

export const getConsumerByUUID = async (uuid) => {
    return await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/consumer/${uuid}`);
}

export const getMainInstallationData = async (storeMainInstallation, storeInstallations, storeNextBills, storeBilling, setIsLoading) => {
    try {
        const headers = {
            "Authorization": `Bearer ${Cookies.get('accessToken')}`,
        };

        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/`, { headers });
        if (requestSuccessful(response?.status)) {
            await updateInstallationsStoreData(response, storeMainInstallation, storeInstallations, storeNextBills, storeBilling)

        } else {
            console.error("Failed to fetch dashboard data");
        }
    } catch (error) {
        console.error("Error fetching dashboard data:", error);
    } finally {
        setIsLoading(false);
    }
}

export const getInstallationByUUID = async (uuid) => {
    const headers = {
        "Authorization": `Bearer ${Cookies.get('accessToken')}`
    };
    return await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/${uuid}`, { headers });
}

export const getInstallationByUUIDandUpdateStore = async (uuid, storeMainInstallation, storeInstallations, storeNextBills, storeBilling, setIsLoading) => {
    const headers = {
        "Authorization": `Bearer ${Cookies.get('accessToken')}`
    };
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/${uuid}`, { headers });
    if (requestSuccessful(response?.status)) {
        await updateInstallationsStoreData(response, storeMainInstallation, storeInstallations, storeNextBills, storeBilling)
    } else {
        console.error("Failed to fetch selected installation data");
    }
    setIsLoading(false)
}

export const addNewInstallation = async (data, router, setErrorMessage, setIsLoading, closeModal) => {
    const headers = {
        "Authorization": `Bearer ${Cookies.get('accessToken')}`,
        "Content-Type": "application/json",
    };

    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/add-uc`, data, { headers });
        const uuid = response?.data?.uuid
        if (requestSuccessful(response?.status) && uuid && uuid != "") {
            router.push(`/dashboard/installations/contract-signature/?uuid=${uuid}`)
        }
    } catch (error) {
        if (error?.response?.data?.code === "ALANCASR") {
            setErrorMessage(["Não é possível adicionar este endereço pois a Leve ainda não chegou na região"])
        } else if (error?.response?.data?.message === "Instalação com consumo baixo") {
            setErrorMessage(["Não é possível adicionar este endereço pois o consumo de energia já é baixo"])
        } else {
            console.error(error)
            setErrorMessage(["Não é possível adicionar este endereço. Tente novamente mais tarde"])
        }
    } finally {
        setIsLoading(false)
        await awaitSeconds(6)
        closeModal()
    }
}

export const updateInstallationsStoreData = async (response, storeMainInstallation, storeInstallations, storeNextBills, storeBilling) => {
    const { instalacao } = response?.data
    const outrasInstalacoes = response?.data?.outras_instalacoes
    const hasStartedBilling = response?.data?.ciclosConsumo?.length > 0 ? true : false
    const ciclosConsumo = response?.data?.ciclosConsumo

    const updatedMainInstallation = {
        id: instalacao?.id,
        uuid: instalacao?.uuid,
        address: instalacao?.endereco,
        street: instalacao?.nome,
        number: instalacao?.numero,
        cityId: instalacao?.cidade_id,
        stateId: instalacao?.estado_id,
        neighborhood: instalacao?.bairro,
        complement: instalacao?.complemento,
        zipCode: instalacao?.cep,
        amount: instalacao?.valor_base_consumo,
        status: instalacao?.situacao,
        installationNumber: instalacao?.numero_instalacao,

        documentKey: instalacao?.document_key,

        percentageAllocatedEnergy: instalacao?.porcentagem_energia_alocada,
        kwhContracted: instalacao?.kwh_contratado,
        discount: instalacao?.desconto,

        clientId: instalacao?.clientes_id,
        isSelected: instalacao?.selecionada,

        hasStartedBilling: hasStartedBilling
    }

    if (storeMainInstallation) {
        storeMainInstallation.updateMainInstallation(updatedMainInstallation)
    }
    if (storeInstallations) {
        storeInstallations.addInstallation(updatedMainInstallation);
        outrasInstalacoes?.forEach(installation => {

            const otherInstallation = {
                id: installation?.id,
                uuid: installation?.uuid,
                address: installation?.endereco,
                street: installation?.nome,
                number: installation?.numero,
                cityId: installation?.cidade_id,
                stateId: installation?.estado_id,
                neighborhood: installation?.bairro,
                complement: installation?.complemento,
                zipCode: installation?.cep,
                amount: installation?.valor_base_consumo,
                status: installation?.situacao,
                installationNumber: installation?.numero_instalacao,

                documentKey: installation?.document_key,

                percentageAllocatedEnergy: installation?.porcentagem_energia_alocada,
                kwhContracted: installation?.kwh_contratado,
                discount: installation?.desconto,

                clientId: installation?.clientes_id,
                isSelected: installation?.selecionada,
            }

            storeInstallations.addInstallation(otherInstallation);
        });
    }

    if (storeBilling) {
        storeBilling.clearBillings()
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

            if (storeNextBills && billHasToBePaid[newBilling.status]) {
                storeNextBills.updateExists(true)
                storeNextBills.addNextBill(newBilling)
            }
        })
    }

}


export const createInstallationData = (instalacao, hasStartedBilling) => ({
    id: instalacao?.id,
    uuid: instalacao?.uuid,
    address: instalacao?.endereco,
    street: instalacao?.nome,
    number: instalacao?.numero,
    cityId: instalacao?.cidade_id,
    stateId: instalacao?.estado_id,
    neighborhood: instalacao?.bairro,
    complement: instalacao?.complemento,
    zipCode: instalacao?.cep,
    amount: instalacao?.valor_base_consumo,
    status: instalacao?.situacao,
    installationNumber: instalacao?.numero_instalacao,
    documentKey: instalacao?.document_key,
    percentageAllocatedEnergy: instalacao?.porcentagem_energia_alocada,
    kwhContracted: instalacao?.kwh_contratado,
    discount: instalacao?.desconto,
    clientId: instalacao?.clientes_id,
    isSelected: instalacao?.selecionada,
    hasStartedBilling,
});

export const updateOtherInstallationsData = (outrasInstalacoes, storeInstallations, mainInstallationData) => {
    storeInstallations?.addInstallation(mainInstallationData);
    outrasInstalacoes?.forEach(installation => {
        const otherInstallation = createInstallationData(installation);
        storeInstallations.addInstallation(otherInstallation);
    });
};