import { useStoreUserEconomy } from '@/app/hooks/stores/useStore';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useRouter } from 'next/navigation';
import { HistoryDetail, HistoryDetailContent, HistoryDetailFooter, HistoryDetailFooterHeader, HistoryDetailHeader, HistoryDetailValue } from './styles';

export default function HistoryDetails() {

    const router = useRouter()
    const userEconomy = useStoreUserEconomy().userEconomy

    const formattedUserEconomyCost = userEconomy.value.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    return (
        <HistoryDetail className='historyDetailContainer'>
            <HistoryDetailHeader className='historyDetailHeader'>
                <p className='contractInitialDate'>Desde o início do contrato:</p>
                <p className='initialDate'>{`${userEconomy.economySince ? userEconomy.economySince : `01/01/2020`}`}</p>
            </HistoryDetailHeader>
            <HistoryDetailContent>
                <HistoryDetailValue className='historyDetailValue'>
                    <p className='value'>{`${userEconomy.receivedCredits ? parseInt(userEconomy.receivedCredits) : `0`} kWh`}</p>
                    <p className='legend'>em créditos de energia limpa</p>
                </HistoryDetailValue>
                <HistoryDetailValue className='historyDetailValue'>
                    <p className='valueHighlighted'>{`${formattedUserEconomyCost}`}</p>
                    <p className='legend'>a mais no seu bolso</p>
                </HistoryDetailValue>
            </HistoryDetailContent>
            <HistoryDetailFooter className='HistoryDetailFooter'>
                <HistoryDetailFooterHeader>
                    <InfoOutlinedIcon className='infoIcon' />
                    <p className='undestandYourEconomy' onClick={() => router.push(`/dashboard/invoices/`)}>Entenda sua economia</p>
                </HistoryDetailFooterHeader>
                <p className='checkAllHistory' onClick={() => router.push(`/dashboard/installations/`)}>Ver histórico completo</p>
            </HistoryDetailFooter>
        </HistoryDetail>
    )
}