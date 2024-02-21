"use client"

import { useState } from "react";
import { DashboardContainer as Container, HistoryBilling, HistoryContainer, HistorySpending, DashboardInfoContainer as Main, NextBill, NextBillGrid, SkeletonDiv, YourInfo, UserEconomyInfos as Info, TitleContainer, NextBillContainer, YourInfoContainer, HistorySpendingContainer, HistoryBillingContainer } from "./styles";
import DefaultButton from "../utils/buttons/DefaultButton";

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
                        <h1>Proxima Fatura</h1>
                    </TitleContainer>
                    <NextBill>
                        <NextBillGrid>
                            <SkeletonDiv className="grid-item" />
                            <SkeletonDiv className="grid-item" />
                            <SkeletonDiv className="grid-item" />
                            <SkeletonDiv className="grid-item" />
                        </NextBillGrid>
                        <div>
                            <DefaultButton variant="contained" text="Realizar Pagamento" />
                        </div>
                    </NextBill>
                </NextBillContainer>
                <YourInfoContainer>
                    <TitleContainer>
                        <h1>Voce de Leve</h1>
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
                        <h1>Histórico de Consumo e Economia</h1>
                    </TitleContainer>
                    <HistorySpending>
                        <div>info</div>
                        <div>info</div>
                        <div>info</div>
                    </HistorySpending>
                </HistorySpendingContainer>
                <HistoryBillingContainer>
                    <TitleContainer>
                        <h1>Historico de Contas</h1>
                    </TitleContainer>
                    <HistoryBilling>
                        <div>info</div>
                        <div>info</div>
                        <div>info</div>
                    </HistoryBilling>
                </HistoryBillingContainer>
            </HistoryContainer>
        </Container >

    );
}
