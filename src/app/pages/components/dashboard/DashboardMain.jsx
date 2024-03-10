/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreAddress, useStoreInstallations, useStoreUser } from "@/app/hooks/useStore";
import { requestSuccessful } from "@/app/service/utils/Validations";
import { Alert, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import HistorySpendingChart from "../charts/HistorySpendingChart";
import MemberGetMember from "../member-get-member/MemberGetMember";
import DashboardButton from "../utils/buttons/DashboardButton";
import FormButton from "../utils/buttons/FormButton";
import NewInstallationButton from "../utils/buttons/NewInstallationButton";
import { BillDetails, DashboardContainer as Container, HistoryBilling, HistoryBillingContainer, HistoryContainer, HistorySpendingContainer, HistorySpendingGrid, UserEconomyInfos as Info, MainInfoContainer as Main, MemberGetMemberContainer, NewInstallationButtonContainer, NextBill, NextBillContainer, NextBillGrid, NextBillInfo, NextBillValue, PaymentButtonContainer, SkeletonDiv, TitleContainer, WarningsContainer, YourInfo, YourInfoContainer } from "./styles";
import { getInstallationsByUUID } from "@/app/service/installation-service/InstallationService";

export default function DashboardMain() {

    const router = useRouter()

    const user = useStoreUser().user
    const storeUser = useStoreUser()
    const storeAddress = useStoreAddress()
    const storeInstallations = useStoreInstallations()

    const address = useStoreAddress().address

    const installations = useStoreInstallations().installations
    const installation = installations[0]

    const [isLoading, setIsLoading] = useState(true)
    
    const distributorName = user.distributor ? user.distributor : "distribuidora"

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const headers = {
                    Authorization: `Bearer ${user.accessToken}`
                };

                const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/${user.uuid}`, { headers });
                console.log("Dashboard data response ===>>>", response)

                if (requestSuccessful(response.status)) {
                    // Handle dashboard data response if needed
                } else {
                    console.error("Failed to fetch dashboard data");
                }
            } catch (error) {
                console.error("Error fetching dashboard data:", error);
            }
        };

        const fetchCustomerData = async () => {
            try {
                const uuid = "b2fc67d3-a48e-47d2-972e-629da4dafcfc";
                const response = await getInstallationsByUUID(uuid);
                console.log("Customer data response ===>>>", response);

                if (requestSuccessful(response.status)) {
                    const instalacao = response?.data?.instalacao;
                    const consumer = response?.data?.instalacao?.consumidor;
                    const cep = consumer?.cep;

                    storeUser.updateUser({
                        name: consumer?.nome + " " + consumer?.sobrenome,
                        phone: consumer?.telefone,
                        email: consumer?.email,
                        cost: instalacao?.valor_base_consumo,
                        cep: cep,
                        discount: instalacao?.desconto,
                    });

                    storeAddress.updateAddress({
                        cityId: consumer?.cidade_id,
                        stateId: consumer?.estado_id,
                    });

                    const installation = response.data.instalacao;
                    storeInstallations.addInstallation({
                        address: installation.endereco,
                        number: installation.numero,
                        city: installation.cidade || address.city,
                        state: installation.uf || address.city,
                        zipCode: installation.cep,
                        amount: 80.75,
                        dueDate: "05/02/2024",
                        status: installation.situacao,
                    });
                } else {
                    console.error("Failed to fetch customer data");
                }
            } catch (error) {
                console.error("Error fetching customer data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDashboardData();
        fetchCustomerData();
    }, []);

    const handleConnectToDistributor = () =>{ 
        router.push(`https://cliente.leveenergia.com.br/cadastro/distribuidora-login/${user.uuid}`)
    }

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
                            <span className="economyData">7533 kWh</span>
                        </Info>
                        <Info>
                            <span>Creditos acumulados</span>
                            <span className="economyData">0 kWh</span>
                        </Info>
                        <Info>
                            <span>CO2 nao emitido</span>
                            <span className="economyData">0</span>
                        </Info>
                        <Info>
                            <span>Economizando desde</span>
                            <span className="economyData">18/09/2023</span>
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
            <MemberGetMemberContainer>
                <MemberGetMember />
            </MemberGetMemberContainer>
        </Container >
    );
}
