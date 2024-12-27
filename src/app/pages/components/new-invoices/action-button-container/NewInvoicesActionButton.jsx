
import { downloadBillByUrl } from '@/app/utils/downloader/invoicesDownloader';
import { useRouter } from 'next/navigation';
import { DownloadIcon, DueButton, GraphIcon, IconButton, InvoicesTableActionButtonContainer, LinkIcon, PendingButton } from './styles';
import { BILL_STATUS } from '../../dashboard/invoices/invoicesEnums';

export default function NewInvoicesActionButtonContainer({ status, urlBill, uuid, referenceDate }) {

    const router = useRouter()

    const billNeedsToBePaid = status === BILL_STATUS.DUE || status === BILL_STATUS.PENDING

    const handleOpenLink = () => {
        window.open(urlBill, '_blank', 'noopener noreferrer');
    }

    const handleDownloadBill = async () => {
        const filename = `Fatura_Leve_${referenceDate}`
        await downloadBillByUrl(urlBill, filename)

    }

    return (
        <InvoicesTableActionButtonContainer>
            <>
                {billNeedsToBePaid ? (
                    <PendingButton status={status}>
                        <span>Pagar</span>
                    </PendingButton>)
                    :
                    (<DueButton status={status} onClick={() => router.push("/dashboard/installations")}>
                        <GraphIcon className='icon' />
                        <span>Ver consumo</span>
                    </DueButton>)}
                <IconButton status={status} onClick={() => handleOpenLink()}>
                    <LinkIcon className='icon' />
                </IconButton>
                <IconButton status={status} onClick={() => handleDownloadBill()}>
                    <DownloadIcon className='icon' />
                </IconButton>
            </>

        </InvoicesTableActionButtonContainer>
    )
}