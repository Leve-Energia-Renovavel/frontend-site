"use client"

import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import FormButton from "../utils/buttons/FormButton";
import { BillDetails, DashboardContainer as Container, HistoryBilling, HistoryBillingContainer, HistoryContainer, HistorySpendingContainer, HistorySpendingGrid, UserEconomyInfos as Info, MainInfoContainer as Main, NextBill, NextBillContainer, NextBillGrid, NextBillInfo, NextBillValue, PaymentButtonContainer, SkeletonDiv, TitleContainer, YourInfo, YourInfoContainer } from "./styles";
import DefaultButton from "../utils/buttons/DefaultButton";
import MemberGetMember from "../member-get-member/MemberGetMember";

export default function DashboardMain() {

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
                                (<NextBillValue>
                                    <Typography className="referenceMonth">01/2024</Typography>
                                    <Typography className="billValue">R$ {installation?.amount.toString().replace('.', ',')}</Typography>
                                </NextBillValue>)}
                            {isLoading ? <SkeletonDiv className="grid-item" /> :
                                (
                                    <NextBillInfo>
                                        <Typography className="title">Vencimento</Typography>
                                        <Typography className="content">{installation?.dueDate}</Typography>
                                    </NextBillInfo>
                                )}
                            {isLoading ? <SkeletonDiv className="grid-item" /> :
                                (
                                    <NextBillInfo status={installation?.status}>
                                        <Typography className="title">Status</Typography>
                                        <Typography className="paymentStatus">{installation?.status}</Typography>
                                    </NextBillInfo>
                                )}
                            {isLoading ? <SkeletonDiv className="grid-item" /> : null}
                        </NextBillGrid>
                        <PaymentButtonContainer>
                            <FormButton text="Ver fatura" />
                            <FormButton text="Realizar pagamento" />
                        </PaymentButtonContainer>
                    </NextBill>
                </NextBillContainer>
                <YourInfoContainer>
                    <TitleContainer>
                        <h1>Você de Leve</h1>
                    </TitleContainer>
                    <YourInfo>
                        <Info><span>Quanto voce economizou</span></Info>
                        <Info><span>Creditos recebidos</span></Info>
                        <Info><span>Creditos acumulados</span></Info>
                        <Info><span>CO2 nao emitido</span></Info>
                        <Info><span>Economizando desde</span></Info>
                        <DefaultButton variant="contained" text="Adicionar Novo Endereço" />
                    </YourInfo>
                </YourInfoContainer>
            </Main>
            <HistoryContainer>
                <HistorySpendingContainer>
                    <TitleContainer>
                        <h1>Histórico de consumo e economia</h1>
                    </TitleContainer>
                    <HistorySpendingGrid>
                        <SkeletonDiv className="grid-item" />
                        <SkeletonDiv className="grid-item" />
                        <SkeletonDiv className="grid-item" />
                        <SkeletonDiv className="grid-item" />
                        <SkeletonDiv className="grid-item" />
                        <SkeletonDiv className="grid-item" />
                        <SkeletonDiv className="grid-item" />
                        <SkeletonDiv className="grid-item" />
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
