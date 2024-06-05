/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreAddress, useStoreBillingHistory, useStoreInstallations, useStoreMainInstallation, useStoreNextBills, useStoreUser, useStoreUserEconomy } from "@/app/hooks/useStore";
import { requestSuccessful } from "@/app/service/utils/Validations";
import { clearStorageData } from "@/app/utils/browser/BrowserUtils";
import { formatBasicBirthDate } from "@/app/utils/date/DateUtils";
import { billHasToBePaid, billingStatusOptions } from "@/app/utils/form-options/billingStatusOptions";
import { formatBrazillianDate } from "@/app/utils/formatters/dateFormatter";
import { Typography } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import HistorySpendingChart from "../charts/HistorySpendingChart";
import MemberGetMember from "../member-get-member/MemberGetMember";
import DashboardButton from "../utils/buttons/DashboardButton";
import FormButton from "../utils/buttons/FormButton";
import NewInstallationButton from "../utils/buttons/NewInstallationButton";
import { BillDetails, DashboardContainer as Container, HistoryBilling, HistoryBillingContainer, HistoryContainer, HistorySpendingContainer, HistorySpendingGrid, UserEconomyInfos as Info, MainInfoContainer as Main, MemberGetMemberContainer, NewInstallationButtonContainer, NextBill, NextBillContainer, NextBillGrid, NextBillInfo, NextBillNotFound, NextBillValue, PaymentButtonContainer, SkeletonDiv, TitleContainer, UserEconomyNotFound, WarningsContainer, YourInfo, YourInfoContainer } from "./styles";

export default function DashboardMain() {

    const router = useRouter()

    const storeUser = useStoreUser()
    const storeAddress = useStoreAddress()
    const storeInstallations = useStoreInstallations()
    const storeMainInstallation = useStoreMainInstallation()
    const storeNextBills = useStoreNextBills()
    const storeBilling = useStoreBillingHistory()
    const storeEconomy = useStoreUserEconomy()

    const user = storeUser.user
    const userEconomy = useStoreUserEconomy().userEconomy
    const nextBills = useStoreNextBills().nextBills
    const billings = useStoreBillingHistory().billings

    const nextBill = nextBills[0]

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        clearStorageData()
        const fetchDashboardData = async () => {
            try {
                const headers = {
                    "Authorization": `Bearer ${Cookies.get('accessToken')}`
                };

                const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/`, { headers });

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

                } else {
                    console.error("Failed to fetch dashboard data");
                }
            } catch (error) {
                console.error("Error fetching dashboard data:", error);
            }
        };

        const fetchUpdatedAddress = async () => {
            const data = {
                cep: user.cep
            }
            try {
                const addressResponse = await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/consulta-cep`, data);

                if (requestSuccessful(addressResponse?.status)) {
                    const address = addressResponse?.data
                    storeAddress.updateAddress({
                        street: address?.logradouro,
                        neighborhood: address?.bairro,
                        city: address?.cidade,
                        state: address?.uf,
                        cep: address?.cep,
                        hasFetchedData: true,

                    })
                } else {
                    console.error("Failed to fetch updated address data");
                }
            } catch (error) {
                console.error("Error fetching updated address data:", error);
            }
        };
        fetchDashboardData();
        fetchUpdatedAddress();
        setIsLoading(false);

    }, []);

    const handlePayBill = (url) => {
        window.open(url, '_blank');
    };

    function areAllKeysEmpty(obj) {
        for (const key in obj) {
            if (obj[key] !== "") {
                return false;
            }
        }
        return true;
    }

    return (
        <Container>
            <WarningsContainer />
            <Main>
                <NextBillContainer>
                    <TitleContainer>
                        <h1>Próxima fatura</h1>
                    </TitleContainer>
                    {storeNextBills.exists ?
                        <NextBill>
                            <NextBillGrid>
                                {isLoading ? <SkeletonDiv className="grid-item" /> :
                                    (<NextBillValue className="loaded-grid-item">
                                        <Typography className="referenceMonth">{nextBill?.billDate}</Typography>
                                        <Typography className="billValue">R$ {nextBill?.value.toString().replace('.', ',')}</Typography>
                                    </NextBillValue>)}
                                {isLoading ? <SkeletonDiv className="grid-item" /> :
                                    (
                                        <NextBillInfo className="loaded-grid-item">
                                            <Typography className="title">Vencimento</Typography>
                                            <Typography className="content">{nextBill?.dueDate}</Typography>
                                        </NextBillInfo>
                                    )}
                                {isLoading ? <SkeletonDiv className="grid-item" /> :
                                    (
                                        <NextBillInfo status={nextBill?.status} className="loaded-grid-item">
                                            <Typography className="title">Status</Typography>
                                            <Typography className="paymentStatus">{billingStatusOptions[nextBill?.status]?.toUpperCase()}</Typography>
                                        </NextBillInfo>
                                    )}
                                {isLoading ? <SkeletonDiv className="grid-item" /> :
                                    <div className="loaded-grid-item"></div>
                                }
                            </NextBillGrid>
                        </NextBill>
                        :
                        <>
                            {isLoading ? <SkeletonDiv className="grid-item" /> :
                                (<NextBillNotFound className="loaded-grid-item">
                                    <Typography className="nextBillNotFound">Não há dados da próxima fatura</Typography>
                                </NextBillNotFound>)}
                        </>
                    }
                    {storeNextBills.exists ?
                        <PaymentButtonContainer>
                            <DashboardButton text="Ver todas faturas" onClick={() => router.push('/dashboard/invoices')} />
                            <FormButton text="Pagar" onClick={() => handlePayBill(nextBill.urlBill)} />
                        </PaymentButtonContainer>
                        : <>
                        </>
                    }
                </NextBillContainer>
                <YourInfoContainer>
                    <TitleContainer>
                        <h1>Você de Leve</h1>
                    </TitleContainer>
                    {!areAllKeysEmpty(userEconomy) ?
                        <YourInfo>
                            <Info>
                                <span>Quanto você economizou</span>
                                <span className="economyValue">{`${userEconomy.value ? userEconomy.value.toString().replace('.', ',') : `R$ 0,00`}`}</span>
                            </Info>
                            <Info>
                                <span>Créditos recebidos</span>
                                <span className="economyData">{`${userEconomy.receivedCredits ? userEconomy.receivedCredits : `0`} kWh`}</span>
                            </Info>
                            <Info>
                                <span>Créditos acumulados</span>
                                <span className="economyData">{`${userEconomy.accumulatedEnergyValue ? userEconomy?.accumulatedEnergyValue : `0`} kWh`}</span>
                            </Info>
                            <Info>
                                <span>CO2 não emitido</span>
                                <span className="economyData">{`${userEconomy.carbonCredits ? userEconomy?.carbonCredits : `0`} kWh`}</span>
                            </Info>
                            <Info>
                                <span>Economizando desde</span>
                                <span className="economyData">{`${userEconomy.economySince ? userEconomy.economySince : `0`}`}</span>
                            </Info>
                            <NewInstallationButtonContainer>
                                <NewInstallationButton text="Adicionar Novo Endereço" onClick={() => router.push("/dashboard/installations")} />
                            </NewInstallationButtonContainer>
                        </YourInfo>
                        : <UserEconomyNotFound>
                            <Typography className="notFoundEconomy">Ainda não há dados de economia</Typography>
                        </UserEconomyNotFound>
                    }
                </YourInfoContainer>
            </Main>
            <HistoryContainer>


                {billings.length > 0 ? (
                    <HistorySpendingContainer>
                        <TitleContainer>
                            <h1>Histórico de consumo e economia</h1>
                        </TitleContainer>
                        <HistorySpendingGrid>
                            {isLoading ? (
                                <>
                                    <SkeletonDiv className="grid-item" />
                                    <SkeletonDiv className="grid-item" />
                                    <SkeletonDiv className="grid-item" />
                                    <SkeletonDiv className="grid-item" />
                                    <SkeletonDiv className="grid-item" />
                                    <SkeletonDiv className="grid-item" />
                                    <SkeletonDiv className="grid-item" />
                                    <SkeletonDiv className="grid-item" />
                                </>
                            ) : (
                                billings.length > 1 ? <HistorySpendingChart /> :
                                    <div style={{ margin: "auto", textAlign: "center" }}>
                                        <Typography className="notFoundHistorySpending">Não há dados de consumo</Typography>
                                    </div>
                            )}
                        </HistorySpendingGrid>
                    </HistorySpendingContainer>
                ) : (
                    <div>
                        <TitleContainer>
                            <h1>Histórico de consumo e economia</h1>
                        </TitleContainer>
                        <NextBillNotFound className="loaded-grid-item">
                            <Typography className="nextBillNotFound">Não há dados de consumo</Typography>
                        </NextBillNotFound>
                    </div>
                )}

                {billings.length > 0 ? (
                    <HistoryBillingContainer>
                        <TitleContainer>
                            <h1>Histórico de contas</h1>
                        </TitleContainer>
                        <HistoryBilling>
                            {billings.slice(0, 3).map((bill) => (
                                <BillDetails key={bill.uuid}>
                                    <span>{`${bill.dueDate}`}</span>
                                    <span>{`R$ ${bill.value}`}</span>
                                    <span>{billingStatusOptions[bill.status]} </span>
                                </BillDetails>
                            ))}
                            {billings.length > 2 && (
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <Typography variant="subtitle1" className="seeMoreBillings" onClick={() => router.push(`/dashboard/invoices`)}> Ver mais</Typography>
                                </div>
                            )}
                        </HistoryBilling>
                    </HistoryBillingContainer>
                ) : (
                    <div>
                        <TitleContainer>
                            <h1>Histórico de contas</h1>
                        </TitleContainer>
                        <NextBillNotFound className="loaded-grid-item">
                            <Typography className="nextBillNotFound">Não há dados de contas</Typography>
                        </NextBillNotFound>
                    </div>
                )}

            </HistoryContainer>
            <MemberGetMemberContainer>
                <MemberGetMember />
            </MemberGetMemberContainer>
        </Container >

    );
}
