"use client"

import { useState } from "react";
import { DashboardContainer as Container, DashboardInfoContainer as MainInfo, InstalationInfo, BillingInfo } from "./styles";

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
            <MainInfo>
                <InstalationInfo>
                    <h2>Instalação Selecionada</h2>
                    <p>{installation.address}</p>
                    <p>{installation.city}, {installation.state} {installation.zipCode}</p>
                    <p>Valor da Fatura: R$ {installation.amount}</p>
                    <p>Data de Vencimento: {installation.dueDate}</p>
                    <p>Status: {installation.status}</p>
                    <button>Ver Minhas Instalações</button>
                    <button>Conecte sua conta a Leve</button>
                    <button>Ver Fatura</button>
                    <button>Pagar Fatura</button>
                </InstalationInfo>
                <BillingInfo>
                    <h1>Proximas faturas</h1>
                    <span>Fartura selecionada</span>
                </BillingInfo>
            </MainInfo>
        </Container>
    );
}
