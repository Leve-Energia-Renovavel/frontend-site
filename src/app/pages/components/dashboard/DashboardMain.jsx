"use client"

import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import HistorySpendingChart from "../charts/HistorySpendingChart";
import MemberGetMember from "../member-get-member/MemberGetMember";
import DefaultButton from "../utils/buttons/DefaultButton";
import FormButton from "../utils/buttons/FormButton";
import { BillDetails, DashboardContainer as Container, HistoryBilling, HistoryBillingContainer, HistoryContainer, HistorySpendingContainer, HistorySpendingGrid, UserEconomyInfos as Info, MainInfoContainer as Main, NewInstallationButtonContainer, NextBill, NextBillContainer, NextBillGrid, NextBillInfo, NextBillValue, PaymentButtonContainer, SkeletonDiv, TitleContainer, YourInfo, YourInfoContainer } from "./styles";
import DashboardButton from "../utils/buttons/DashboardButton";
import NewInstallationButton from "../utils/buttons/NewInstallationButton";

export default function DashboardMain() {

    const router = useRouter()

    const [isLoading, setIsLoading] = useState(true)

    const [installation, setInstallation] = useState({
        address: "Alameda José de Oliveira Guimarães 563 casa 23.",
        city: "Uberlândia",
        state: "MG",
        zipCode: "38412324",
        amount: 80.75,
        dueDate: "05/02/2024",
        status: "pendente",
    });

    useEffect(() => {
        setIsLoading(false)

    }, [])

    return (
        <Container>
            <Main>
                <NextBillContainer>
                    <TitleContainer>
                        <h1>Próxima fatura</h1>
                    </TitleContainer>
                    <NextBill>
                        <NextBillGrid>
                            {isLoading ? <SkeletonDiv className="grid-item" /> :
                                (<NextBillValue className="loaded-grid-item">
                                    <Typography className="referenceMonth">01/2024</Typography>
                                    <Typography className="billValue">R$ {installation?.amount.toString().replace('.', ',')}</Typography>
                                </NextBillValue>)}
                            {isLoading ? <SkeletonDiv className="grid-item" /> :
                                (
                                    <NextBillInfo className="loaded-grid-item">
                                        <Typography className="title">Vencimento</Typography>
                                        <Typography className="content">{installation?.dueDate}</Typography>
                                    </NextBillInfo>
                                )}
                            {isLoading ? <SkeletonDiv className="grid-item" /> :
                                (
                                    <NextBillInfo status={installation?.status} className="loaded-grid-item">
                                        <Typography className="title">Status</Typography>
                                        <Typography className="paymentStatus">{installation?.status}</Typography>
                                    </NextBillInfo>
                                )}
                            {isLoading ? <SkeletonDiv className="grid-item" /> :
                                <div className="loaded-grid-item"></div>
                            }
                        </NextBillGrid>
                        <PaymentButtonContainer>
                            <DashboardButton text="Ver todas faturas" onClick={() => router.push('/invoices')} />
                            <FormButton text="Pagar" />
                        </PaymentButtonContainer>
                    </NextBill>
                </NextBillContainer>
                <YourInfoContainer>
                    <TitleContainer>
                        <h1>Você de Leve</h1>
                    </TitleContainer>
                    <YourInfo>
                        <Info>
                            <span>Quanto voce economizou</span>
                            <span className="economyValue">R$ 571,57</span>
                        </Info>
                        <Info>
                            <span>Creditos recebidos</span>
                            <span>7533 kWh</span>
                        </Info>
                        <Info>
                            <span>Creditos acumulados</span>
                            <span>0 - kWh</span>
                        </Info>
                        <Info>
                            <span>CO2 nao emitido</span>
                            <span>0 - kWh</span>
                        </Info>
                        <Info>
                            <span>Economizando desde</span>
                            <span>18/09/2023</span>
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
                        <BillDetails>
                            <span>2023 - Julho</span>
                            <span>R$ 4.949,00</span>
                            <span>Em aberto</span>
                        </BillDetails>
                        <BillDetails>
                            <span>2023 - Junho</span>
                            <span>R$ 4.949,00</span>
                            <span>Pago</span>
                        </BillDetails>
                        <BillDetails>
                            <span>2023 - Maio</span>
                            <span>R$ 4.949,00</span>
                            <span>Pago</span>
                        </BillDetails>
                    </HistoryBilling>
                </HistoryBillingContainer>
            </HistoryContainer>
            <MemberGetMember />
        </Container >
    );
}
