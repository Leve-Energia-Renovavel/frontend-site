"use client"

import { useStoreMainInstallation } from '@/app/hooks/useStore';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import HistoryDetails from './details/HistoryDetails';
import { DATA_TYPE } from './historyEnums';
import { AntSwitch, DashboardHistoryContainer as Container, DashboardHistoryContent as Content, DashboardHistoryTitleContainer as Header, HistoryChartLegend, HistoryDivider, LegendCarrier, LegendDue, LegendExpired, LegendPaid, DashboardHistorySwitchContainer as SwitchContainer } from './styles';

const NewHistoryEnergyChart = dynamic(() => import('../../charts/NewHistoryEnergyChart'), { ssr: false });
const NewHistoryMoneyChart = dynamic(() => import('../../charts/NewHistoryMoneyChart'), { ssr: false });

export default function DashboardHistory() {

  const storeMainInstallation = useStoreMainInstallation()
  const mainInstallation = JSON.parse(localStorage?.getItem('mainInstallation'))

  const { hasStartedBilling } = mainInstallation?.mainInstallation ?? (storeMainInstallation?.mainInstallation || {})

  const [dataType, setDataType] = useState(DATA_TYPE.MONEY)

  const handleDataType = () => {
    dataType === DATA_TYPE.MONEY ? setDataType(DATA_TYPE.ENERGY) : setDataType(DATA_TYPE.MONEY)
  }

  const isMoneyChart = dataType === DATA_TYPE.MONEY

  return (
    <>
      {hasStartedBilling ? (
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

            {isMoneyChart ? <NewHistoryMoneyChart /> : <NewHistoryEnergyChart />}

            <HistoryDivider />

            <HistoryChartLegend className='historyChartLegend'>
              <LegendCarrier className='legend'>Distribuidora</LegendCarrier>
              <LegendExpired className='legend'>Fatura vencida</LegendExpired>
              <LegendDue className='legend'>Fatura em aberto</LegendDue>
              <LegendPaid className='legend'>Fatura paga</LegendPaid>
            </HistoryChartLegend>

            <HistoryDivider />

            <HistoryDetails />

          </Content>
        </Container>
      ) : <></>}
    </>

  )
}