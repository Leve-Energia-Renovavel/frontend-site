"use client"

import dynamic from 'next/dynamic';
import { useState } from 'react';
import HistoryDetails from './details/HistoryDetails';
import { AntSwitch, DashboardHistoryContainer as Container, DashboardHistoryContent as Content, DashboardHistoryTitleContainer as Header, HistoryChartLegend, HistoryDivider, LegendCarrier, LegendDue, LegendExpired, LegendPaid, DashboardHistorySwitchContainer as SwitchContainer } from './styles';

const NewHistoryEnergyChart = dynamic(() => import('../../charts/NewHistoryEnergyChart'), { ssr: false });
const NewHistoryMoneyChart = dynamic(() => import('../../charts/NewHistoryMoneyChart'), { ssr: false });

export default function DashboardHistory() {

  const [dataType, setDataType] = useState("money")

  const handleDataType = () => {
    dataType === "money" ? setDataType("energy") : setDataType("money")
  }

  return (
    <Container className='dashboardHistoryContainer'>
      <Header className='dashboardHistoryHeader'>
        <h2 className='myHistory'>Histórico de Consumo</h2>
        <SwitchContainer>
          <p className='label'>R$</p>
          <AntSwitch onChange={() => handleDataType()} />
          <p className='label'>kWh</p>
        </SwitchContainer>
      </Header>

      <Content className='dashboardHistoryContent'>

        {dataType === "money" ? <NewHistoryMoneyChart /> : <NewHistoryEnergyChart />}

        <HistoryDivider />

        <HistoryChartLegend className='historyChartLegend'>
          <LegendCarrier className='legend'>Concessionária</LegendCarrier>
          <LegendExpired className='legend'>Fatura vencida</LegendExpired>
          <LegendDue className='legend'>Fatura em aberto</LegendDue>
          <LegendPaid className='legend'>Fatura paga</LegendPaid>
        </HistoryChartLegend>

        <HistoryDivider />

        <HistoryDetails />

      </Content>
    </Container>
  )
}