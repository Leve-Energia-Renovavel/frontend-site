/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreAddress, useStoreBillingHistory, useStoreInstallations, useStoreMainInstallation, useStoreNextBills, useStoreUser, useStoreUserEconomy } from "@/app/hooks/useStore";
import { requestSuccessful } from "@/app/service/utils/Validations";
import { billHasToBePaid, billingStatusOptions } from "@/app/utils/form-options/billingStatusOptions";
import { formatDate } from "@/app/utils/formatters/dateFormatter";
import { Alert, Typography } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import HistorySpendingChart from "../charts/HistorySpendingChart";
import MemberGetMember from "../member-get-member/MemberGetMember";
import DashboardButton from "../utils/buttons/DashboardButton";
import FormButton from "../utils/buttons/FormButton";
import NewInstallationButton from "../utils/buttons/NewInstallationButton";
import { BillDetails, DashboardContainer as Container, HistoryBilling, HistoryBillingContainer, HistoryContainer, HistorySpendingContainer, HistorySpendingGrid, UserEconomyInfos as Info, MainInfoContainer as Main, MemberGetMemberContainer, NewInstallationButtonContainer, NextBill, NextBillContainer, NextBillGrid, NextBillInfo, NextBillValue, PaymentButtonContainer, SkeletonDiv, TitleContainer, WarningsContainer, YourInfo, YourInfoContainer } from "./styles";

export default function DashboardMain() {

    const router = useRouter()

    const storeUser = useStoreUser()
    const storeAddress = useStoreAddress()
    const storeInstallations = useStoreInstallations()
    const storeMainInstallation = useStoreMainInstallation()
    const storeNextBills = useStoreNextBills()
    const storeBilling = useStoreBillingHistory()
    const storeEconomy = useStoreUserEconomy()

    const user = useStoreUser().user
    const userEconomy = useStoreUserEconomy().userEconomy
    const address = useStoreAddress().address
    const installations = useStoreInstallations().installations
    const nextBills = useStoreNextBills().nextBills
    const billings = useStoreBillingHistory().billings

    const nextBill = nextBills[0]

    const [isLoading, setIsLoading] = useState(true)

    const distributorName = user.distributor ? user.distributor : "distribuidora"

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const headers = {
                    Authorization: `Bearer ${Cookies.get('accessToken')}`
                };

                const uuidMilton = "20d04059-a75b-403b-910e-e59096a1370b"
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/${uuidMilton}`, { headers });
                console.log("Dashboard data response ===>>>", response)

                if (requestSuccessful(response.status)) {

                    const consumidor = response?.data?.consumidor
                    const ciclosConsumo = response?.data?.ciclosConsumo
                    const instalacao = response?.data?.instalacao
                    const outrasInstalacoes = response?.data?.outras_instalacoes
                    const economia = response?.data?.economia
                    const carbonCredits = response?.data?.co_dois
                    const receivedCredits = response?.data?.creditos_recebidos

                    storeUser.updateUser({
                        name: consumidor?.nome,
                        phone: consumidor?.telefone,
                        email: consumidor?.email,
                        cost: instalacao?.valor_base_consumo,
                        cep: consumidor?.cep,
                        discount: instalacao?.desconto,

                        cpf: consumidor?.cpf,
                        cost: consumidor?.valor,
                        rg: consumidor?.rg,

                        nationality: consumidor?.nacionalidade,
                        maritalStatus: consumidor?.estado_civil,
                        memberGetMemberCode: consumidor?.ref_code,
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

                    storeEconomy.updateUserEconomy({
                        economySince: formatDate(consumidor?.created_at),
                        value: economia,
                        carbonCredits: carbonCredits?.toFixed(2),
                        receivedCredits: receivedCredits?.toFixed(2),

                    })

                } else {
                    console.error("Failed to fetch dashboard data");
                }
            } catch (error) {
                console.error("Error fetching dashboard data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        const fetchUpdatedAddress = async () => {
            const cep = user?.cep
            try {
                const addressResponse = await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/consulta-cep`, {
                    params: { cep: cep },
                    withCredentials: false
                });

                if (requestSuccessful(addressResponse?.status)) {
                    const address = addressResponse?.data
                    storeAddress.updateAddress({
                        street: address?.logradouro,
                        neighborhood: address?.bairro,
                        city: address?.cidade,
                        state: address?.uf,
                        cep: address?.cep,
                    })
                } else {
                    console.error("Failed to fetch updated address data");
                }
            } catch (error) {
                console.error("Error fetching updated address data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDashboardData();
        fetchUpdatedAddress();
    }, []);

    const handleConnectToDistributor = () => {
        router.push(`https://cliente.leveenergia.com.br/cadastro/distribuidora-login/${user.uuid}`)
    }

    const handlePayBill = (url) => {
        window.open(url, '_blank');
    };

    return (
        <Container>
            {user.hasSyncDistribuitorData ? <></>
                : <WarningsContainer>
                    <Alert severity="warning">Conecte a conta da sua {distributorName} à Leve para uma melhor experiência! <span className="connectToDistributor" onClick={() => handleConnectToDistributor()}>Conectar conta</span></Alert>
                </WarningsContainer>}
            <Main>
                <NextBillContainer>
                    <TitleContainer>
                        <h1>Próxima fatura</h1>
                    </TitleContainer>
                    <NextBill>
                        <NextBillGrid>
                            {storeNextBills.exists ?
                                <>
                                    {isLoading ? <SkeletonDiv className="grid-item" /> :
                                        (<NextBillValue className="loaded-grid-item">
                                            <Typography className="referenceMonth">01/2024</Typography>
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
                                </> :
                                <>
                                    {isLoading ? <SkeletonDiv className="grid-item" /> :
                                        (<NextBillValue className="loaded-grid-item">
                                            <Typography className="nextBillNotFound">Não há dados de faturamento</Typography>
                                        </NextBillValue>)}
                                </>
                            }
                        </NextBillGrid>
                        {storeNextBills.exists ?
                            <PaymentButtonContainer>
                                <DashboardButton text="Ver todas faturas" onClick={() => router.push('/invoices')} />
                                <FormButton text="Pagar" onClick={() => handlePayBill(nextBill.urlBill)} />
                            </PaymentButtonContainer>
                            : <>
                            </>
                        }
                    </NextBill>
                </NextBillContainer>
                <YourInfoContainer>
                    <TitleContainer>
                        <h1>Você de Leve</h1>
                    </TitleContainer>
                    <YourInfo>
                        <Info>
                            <span>Quanto voce economizou</span>
                            <span className="economyValue">{`${userEconomy?.value.toString().replace('.', ',')}`}</span>
                        </Info>
                        <Info>
                            <span>Creditos recebidos</span>
                            <span className="economyData">{`${userEconomy?.receivedCredits} kWh`}</span>
                        </Info>
                        <Info>
                            <span>Creditos acumulados</span>
                            <span className="economyData">{`${userEconomy?.accumulatedEnergyValue} kWh`}</span>
                        </Info>
                        <Info>
                            <span>CO2 nao emitido</span>
                            <span className="economyData">{`${userEconomy?.carbonCredits} kWh`}</span>
                        </Info>
                        <Info>
                            <span>Economizando desde</span>
                            <span className="economyData">{`${userEconomy?.economySince}`}</span>
                        </Info>
                        <NewInstallationButtonContainer>
                            <NewInstallationButton text="Adicionar Novo Endereço" onClick={() => router.push("/installations")} />
                        </NewInstallationButtonContainer>
                    </YourInfo>
                </YourInfoContainer>
            </Main>
            <HistoryContainer>
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
                        ) :
                            <HistorySpendingChart />}
                    </HistorySpendingGrid>
                </HistorySpendingContainer>
                <HistoryBillingContainer>
                    <TitleContainer>
                        <h1>Histórico de contas</h1>
                    </TitleContainer>
                    <HistoryBilling>
                        {billings.length > 0 ?
                            <>
                                {billings.slice(0, 3).map((bill) => {
                                    return (
                                        <BillDetails key={bill.uuid}>
                                            <span>{`${bill.dueDate}`}</span>
                                            <span>{`R$ ${bill.value}`}</span>
                                            <span>{billingStatusOptions[bill.status]} </span>
                                        </BillDetails>
                                    )
                                })}
                                {billings.length > 2 && <div style={{ display: "flex", justifyContent: "center" }}>
                                    <Typography variant="subtitle1" className="seeMoreBillings" onClick={() => router.push(`/invoices`)}> Ver mais</Typography>
                                </div>}
                            </>
                            :
                            <BillDetails>
                                <span>Não há dados de contas</span>
                            </BillDetails>
                        }
                    </HistoryBilling>
                </HistoryBillingContainer>
            </HistoryContainer>
            <MemberGetMemberContainer>
                <MemberGetMember />
            </MemberGetMemberContainer>
        </Container >

    );
}
