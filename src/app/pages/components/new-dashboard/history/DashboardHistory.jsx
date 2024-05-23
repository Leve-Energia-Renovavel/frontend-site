import NewHistoryChart from '../../charts/NewHistoryChart'
import { DashboardHistoryContainer as Container, DashboardHistoryContent as Content, HistoryChartLegend, HistoryDetail, HistoryDetailContent, HistoryDetailFooter, HistoryDetailFooterHeader, HistoryDetailHeader, HistoryDetailValue, HistoryDivider, LegendCarrier, LegendDue, LegendExpired, LegendPaid } from './styles'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
export default function DashboardHistory() {
  return (
    <Container>
      <h2 className='myHistory'>Histórico de Consumo</h2>
      <Content>
        <NewHistoryChart />
        <HistoryDivider />
        <HistoryChartLegend>
          <LegendCarrier className='legend'>Concessionária</LegendCarrier>
          <LegendExpired className='legend'>Fatura vencida</LegendExpired>
          <LegendDue className='legend'>Fatura em aberto</LegendDue>
          <LegendPaid className='legend'>Fatura paga</LegendPaid>
        </HistoryChartLegend>
        <HistoryDivider />
        <HistoryDetail>
          <HistoryDetailHeader>
            <p className='contractInitialDate'>Desde o início do contrato:</p>
            <p className='initialDate'>11/12/2023</p>
          </HistoryDetailHeader>
          <HistoryDetailContent>
            <HistoryDetailValue>
              <p className='value'>625,5 KWh</p>
              <p className='legend'>em energia renovável</p>
            </HistoryDetailValue>
            <HistoryDetailValue>
              <p className='valueHighlighted'>R$ 104,60</p>
              <p className='legend'>a mais no seu bolso</p>
            </HistoryDetailValue>
          </HistoryDetailContent>
          <HistoryDetailFooter>
            <HistoryDetailFooterHeader>
              <InfoOutlinedIcon className='infoIcon' />
              <p className='undestandYourEconomy'>Entenda sua economia</p>
            </HistoryDetailFooterHeader>
            <p className='checkAllHistory'>Ver histórico completo</p>
          </HistoryDetailFooter>
        </HistoryDetail>
      </Content>
    </Container>
  )
}