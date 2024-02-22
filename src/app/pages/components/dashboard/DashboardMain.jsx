"use client"

import { useState } from "react";
import { DashboardContainer as Container, HistoryBilling, HistoryContainer, HistorySpending, MainInfoContainer as Main, NextBill, NextBillGrid, SkeletonDiv, YourInfo, UserEconomyInfos as Info, TitleContainer, NextBillContainer, YourInfoContainer, HistorySpendingContainer, HistoryBillingContainer, BillDetails, PaymentButtonContainer } from "./styles";
import DefaultButton from "../utils/buttons/DefaultButton";
import { Button } from "@mui/material";
import FormButton from "../utils/buttons/FormButton";

export default function DashboardMain() {

    const [installation, setInstallation] = useState({
        address: "Alameda José de Oliveira Guimarães 563 casa 23.",
        city: "Uberlândia",
        state: "MG",
        zipCode: "38412324",
        amount: 80.75,
        dueDate: "05/02/2024",
        status: "Pendente",
    });

    return (
        <Container>
            <Main>
                <NextBillContainer>
                    <TitleContainer>
                        <h1>Próxima fatura</h1>
                    </TitleContainer>
                    <NextBill>
                        <NextBillGrid>
                            <SkeletonDiv className="grid-item" />
                            <SkeletonDiv className="grid-item" />
                            <SkeletonDiv className="grid-item" />
                            <SkeletonDiv className="grid-item" />
                        </NextBillGrid>
                        <PaymentButtonContainer>
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
                    </YourInfo>
                </YourInfoContainer>
            </Main>
            <HistoryContainer>
                <HistorySpendingContainer>
                    <TitleContainer>
                        <h1>Histórico de consumo e economia</h1>
                    </TitleContainer>
                    <HistorySpending>
                        <SkeletonDiv className="grid-item" />
                        <SkeletonDiv className="grid-item" />
                        <SkeletonDiv className="grid-item" />
                        <SkeletonDiv className="grid-item" />
                        <SkeletonDiv className="grid-item" />
                        <SkeletonDiv className="grid-item" />
                        <SkeletonDiv className="grid-item" />
                        <SkeletonDiv className="grid-item" />
                    </HistorySpending>
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
        </Container >
    );
}
