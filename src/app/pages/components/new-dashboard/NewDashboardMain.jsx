/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreBillingHistory, useStoreInstallations, useStoreMainInstallation, useStoreNextBills, useStoreUser, useStoreUserEconomy } from '@/app/hooks/useStore';
import { requestSuccessful } from '@/app/service/utils/Validations';
import { clearStorageData } from '@/app/utils/browser/BrowserUtils';
import { formatBasicBirthDate } from '@/app/utils/date/DateUtils';
import { billHasToBePaid } from '@/app/utils/form-options/billingStatusOptions';
import { formatBrazillianDate } from '@/app/utils/formatters/dateFormatter';
import axios from 'axios';
import Cookies from 'js-cookie';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import FactoryContent from './factory/FactoryContent';
import DashboardHistory from './history/DashboardHistory';
import DashboardInvoices from './invoices/DashboardInvoices';
import { NewDashboardContainer as Container, NewDashboardContent as Content, NewDashboardMainContent as MainContent } from './styles';

const DashboardSideBar = dynamic(() => import('./side-bar/DashboardSideBar'), { ssr: false });

export default function NewDashboardMain() {

    const router = useRouter()
    const storeUser = useStoreUser()
    const storeInstallations = useStoreInstallations()
    const storeMainInstallation = useStoreMainInstallation()
    const storeNextBills = useStoreNextBills()
    const storeBilling = useStoreBillingHistory()
    const storeEconomy = useStoreUserEconomy()

    useEffect(() => {
        clearStorageData()
        const fetchDashboardData = async () => {
            try {
                const headers = {
                    "Authorization": `Bearer ${Cookies.get('accessToken')}`
                };

                const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/`, { headers });
                console.log("response ==>>", response)

                if (requestSuccessful(response?.status)) {
                    const { consumidor, ciclosConsumo, instalacao, economia } = response?.data
                    const outrasInstalacoes = response?.data?.outras_instalacoes
                    const carbonCredits = response?.data?.co_dois
                    const receivedCredits = response?.data?.creditos_recebidos

                    storeUser.updateUser({
                        name: consumidor?.nome + " " + consumidor?.sobrenome,
                        phone: consumidor?.telefone,
                        email: consumidor?.email,
                        secondaryEmail: consumidor?.email_secondary,
                        cost: instalacao?.valor_base_consumo,
                        cep: consumidor?.cep,
                        discount: instalacao?.desconto,
                        birthDate: consumidor?.data_nascimento ? formatBasicBirthDate(consumidor?.data_nascimento) : "",

                        cpf: consumidor?.cpf,
                        cost: consumidor?.valor,
                        rg: consumidor?.rg,

                        nationality: consumidor?.nacionalidade,
                        maritalStatus: consumidor?.estado_civil,
                        memberGetMemberCode: consumidor?.ref_code,

                        hasFetchedData: true,

                        invoiceDate: consumidor?.dia_fatura
                    });

                    const updatedMainInstallation = {
                        id: instalacao?.id,
                        uuid: instalacao?.uuid,
                        address: instalacao?.nome,
                        street: instalacao?.nome,
                        number: instalacao?.numero,
                        cityId: instalacao?.cidade_id,
                        stateId: instalacao?.estado_id,
                        neighborhood: instalacao?.bairro,
                        complement: instalacao?.complemento,
                        zipCode: instalacao?.cep,
                        amount: instalacao?.valor_base_consumo,
                        dueDate: consumidor?.dia_fatura,
                        status: instalacao?.situacao,
                        installationNumber: instalacao?.numero_instalacao,

                        percentageAllocatedEnergy: instalacao?.porcentagem_energia_alocada,
                        kwhContracted: instalacao?.kwh_contratado,
                        discount: instalacao?.desconto,

                        clientId: instalacao?.clientes_id,
                        isSelected: instalacao?.selecionada,
                        status: instalacao?.status
                    }

                    storeMainInstallation.updateMainInstallation(updatedMainInstallation)
                    storeInstallations.addInstallation(updatedMainInstallation);

                    outrasInstalacoes?.forEach(installation => {
                        const otherInstallation = {
                            uuid: installation?.uuid,
                            address: installation?.endereco,
                            neighborhood: installation?.bairro,
                            number: installation?.numero,
                            zipCode: installation?.cep,
                            cityId: installation?.cidade_id,
                            stateId: installation?.estado_id,
                            status: installation?.situacao,
                            installationNumber: installation?.numero_instalacao,
                        }

                        storeInstallations.addInstallation(otherInstallation);
                    });

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

                    const updatedUserEconomy = {
                        economySince: formatBrazillianDate(consumidor?.created_at),
                        value: economia,
                        carbonCredits: carbonCredits?.toFixed(2),
                        receivedCredits: receivedCredits?.toFixed(2),
                    }

                    storeEconomy.updateUserEconomy(updatedUserEconomy)

                }
            } catch (error) {
                console.error("Error fetching dashboard data:", error);
                if (error?.response?.data?.message === "Unauthenticated.") {
                    router.push("/login")
                }
            }
        };
        fetchDashboardData();
    }, []);

    return (
        <>
            <Container className='container'>
                <DashboardSideBar className="sideBar" />
                <Content className='dashboardContent'>
                    <MainContent className='dashboardMainContent'>
                        <DashboardInvoices />
                        <DashboardHistory />
                    </MainContent>

                    <FactoryContent />


                </Content>
            </Container>
        </>
    )
}