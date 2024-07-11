import { useStoreUserEconomy } from '@/app/hooks/useStore';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { HistoryDetail, HistoryDetailContent, HistoryDetailFooter, HistoryDetailFooterHeader, HistoryDetailHeader, HistoryDetailValue } from './styles';

export default function HistoryDetails() {

    const userEconomy = useStoreUserEconomy().userEconomy

    return (
        <HistoryDetail>
            <HistoryDetailHeader>
                <p className='contractInitialDate'>Desde o início do contrato:</p>
                <p className='initialDate'>{`${userEconomy.economySince ? userEconomy.economySince : `01/01/2020`}`}</p>
            </HistoryDetailHeader>
            <HistoryDetailContent>
                <HistoryDetailValue>
                    <p className='value'>{`${userEconomy.receivedCredits ? parseInt(userEconomy.receivedCredits) : `0`} kWh`}</p>
                    <p className='legend'>em energia renovável</p>
                </HistoryDetailValue>
                <HistoryDetailValue>
                    <p className='valueHighlighted'>{`${userEconomy.value ? userEconomy.value.toString().replace('.', ',') : `R$ 0,00`}`}</p>
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
    )
}