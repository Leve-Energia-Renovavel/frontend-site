
import { downloadBillByUrl } from '@/app/utils/downloader/invoicesDownloader';
import { useRouter } from 'next/navigation';
import { DownloadIcon, DueButton, GraphIcon, IconButton, InvoicesTableActionButtonContainer, LinkIcon, PendingButton } from './styles';

export default function NewInvoicesActionButtonContainer({ status, urlBill, uuid, referenceDate }) {

    const router = useRouter()

    const handleOpenLink = () => {
        window.open(urlBill, '_blank', 'noopener noreferrer');
    }

    const handleDownloadBill = () => {
        const filename = `Fatura_Leve_${referenceDate}`
        downloadBillByUrl(urlBill, filename)

    }

    return (
        <InvoicesTableActionButtonContainer>
            <>
                {status === "due" || status === "pending" ? (
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